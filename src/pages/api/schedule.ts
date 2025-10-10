import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { RateLimiterMemory } from "rate-limiter-flexible";
import xss from "xss";
import { schedulePickupFormSchema } from "@/lib/validation";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds
});

type Data = {
  message: string;
  error?: string | z.ZodIssue[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await rateLimiter.consume(req.socket.remoteAddress || "unknown");
  } catch (error) {
    return res.status(429).json({ message: "Too many requests" });
  }

  // Basic honeypot check
  if (req.body.honeypot) {
    return res.status(200).json({ message: "Success" });
  }

  const sanitizedData = {
    name: xss(req.body.name),
    email: xss(req.body.email),
    phone: xss(req.body.phone),
    address: xss(req.body.address),
    city: xss(req.body.city),
    state: xss(req.body.state),
    zip: xss(req.body.zip),
    pickupDate: xss(req.body.pickupDate),
    materials: xss(req.body.materials),
  };

  const validationResult = schedulePickupFormSchema.safeParse(sanitizedData);

  if (!validationResult.success) {
    return res.status(400).json({
      message: "Invalid input.",
      error: validationResult.error.issues,
    });
  }

  const { name, email, phone, address, city, state, zip, pickupDate, materials } = validationResult.data;

  try {
    await resend.emails.send({
      from: `K&L Website <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO!,
      subject: `New Pickup Request from ${name}`,
      html: `
        <h2>Pickup Request Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${state} ${zip}</p>
        <p><strong>Desired Date:</strong> ${pickupDate}</p>
        <p><strong>Materials:</strong></p>
        <p>${materials}</p>
      `,
    });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Pickup schedule email error:", error);
    res.status(500).json({
      message: "Error scheduling pickup.",
      error: (error as Error).message,
    });
  }
}
