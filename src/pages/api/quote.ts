import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Basic honeypot check for spam
    if (req.body.honeypot) {
      return res.status(200).json({ message: "Success" });
    }

    const sanitizedData = {
      name: req.body.name ? String(req.body.name) : "",
      email: req.body.email ? String(req.body.email) : "",
      message: req.body.message ? String(req.body.message) : "",
    };

    // Basic validation
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Store the quote request (you would typically save to database)
    console.log("Quote request received:", sanitizedData);

    res.status(200).json({ message: "Quote request submitted successfully. We'll contact you within 24 hours." });
  } catch (error) {
    console.error("Quote submission error:", error);
    res.status(500).json({ message: "Error processing quote request" });
  }
}
