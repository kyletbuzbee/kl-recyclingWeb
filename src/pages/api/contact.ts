import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { RateLimiterMemory } from "rate-limiter-flexible";
import xss from "xss";
import { contactFormSchema } from "@/lib/validation";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 10, // 10 requests
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

  // Basic honeypot check for spam
  if (req.body.honeypot) {
    return res.status(200).json({ message: "Success" });
  }

  const sanitizedData = {
    name: xss(req.body.name),
    email: xss(req.body.email),
    message: xss(req.body.message),
    attachments: req.body.attachments || [],
  };

  const validationResult = contactFormSchema.safeParse(sanitizedData);

  if (!validationResult.success) {
    return res.status(400).json({
      message: "Invalid input.",
      error: validationResult.error.issues,
    });
  }

  const { name, email, message } = validationResult.data;

  try {
    await resend.emails.send({
      from: `K&L Website <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO!,
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      message: "Error sending message.",
      error: (error as Error).message,
    });
  }
}
