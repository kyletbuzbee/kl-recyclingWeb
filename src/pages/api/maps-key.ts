import type { NextApiRequest, NextApiResponse } from "next";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 20, // 20 requests
  duration: 60, // per 60 seconds
});

type Data = {
  key: string;
};

type ErrorResponse = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await rateLimiter.consume(req.socket.remoteAddress || "unknown");
  } catch (error) {
    return res.status(429).json({ message: "Too many requests" });
  }

  const referer = req.headers.referer;
  const host = req.headers.host;

  if (process.env.NODE_ENV === "production" && (!referer || new URL(referer).host !== host)) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (apiKey) {
    res.status(200).json({ key: apiKey });
  } else {
    res.status(500).json({ message: "Google Maps API key not configured." });
  }
}
