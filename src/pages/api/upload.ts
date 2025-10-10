import type { NextApiRequest, NextApiResponse } from "next";
import { uploadToCloudinary, validateFile as cloudinaryValidate } from "@/lib/cloudinary";
import formidable from "formidable";
import fs from "fs";
import { RateLimiterMemory } from "rate-limiter-flexible";

// Configure for Next.js API routes
export const config = {
  api: {
    bodyParser: false,
  },
};

const rateLimiter = new RateLimiterMemory({
  points: 20, // 20 requests
  duration: 60 * 15, // per 15 minutes
});

type UploadResponse = {
  success: boolean;
  uploads?: Array<{
    public_id: string;
    secure_url: string;
    original_filename: string;
    bytes: number;
  }>;
  error?: string;
  errors?: Array<{
    file: string;
    error: string;
  }>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<UploadResponse>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    await rateLimiter.consume(req.socket.remoteAddress || "unknown");
  } catch (error) {
    return res.status(429).json({ success: false, error: "Too many requests" });
  }

  try {
    const form = formidable({
      multiples: true,
      maxFiles: 5,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      filter: (part) => {
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];
        return allowedTypes.includes(part.mimetype || "");
      },
    });

    const [fields, files] = await form.parse(req);

    const fileObjects = Object.values(files).flat() as formidable.File[];
    if (fileObjects.length === 0) {
      return res.status(400).json({ success: false, error: "No files uploaded" });
    }

    if (fileObjects.length > 5) {
      return res.status(400).json({
        success: false,
        error: "Too many files. Maximum 5 files allowed.",
      });
    }

    const uploadResults = [];
    const errors = [];

    for (const file of fileObjects) {
      try {
        // Validate file
        const stats = fs.statSync(file.filepath);
        const fileInfo = {
          size: stats.size,
          type: file.mimetype || "",
        };

        const validation = cloudinaryValidate(fileInfo);
        if (!validation.isValid) {
          errors.push({
            file: file.originalFilename || "unknown",
            error: validation.error || "Invalid file",
          });
          continue;
        }

        // Upload to Cloudinary
        const result = await uploadToCloudinary(file.filepath, "kl-recycling/uploads");

        uploadResults.push({
          public_id: result.public_id,
          secure_url: result.secure_url,
          original_filename: file.originalFilename || "",
          bytes: result.bytes,
        });

        // Clean up temp file
        fs.unlinkSync(file.filepath);
      } catch (uploadError) {
        console.error("Upload error:", uploadError);
        errors.push({
          file: file.originalFilename || "unknown",
          error: uploadError instanceof Error ? uploadError.message : "Upload failed",
        });

        // Try to clean up temp file
        try {
          fs.unlinkSync(file.filepath);
        } catch (cleanupError) {
          console.warn("Failed to cleanup temp file:", cleanupError);
        }
      }
    }

    if (uploadResults.length === 0 && errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: "All uploads failed",
        errors,
      });
    }

    return res.status(200).json({
      success: true,
      uploads: uploadResults,
      ...(errors.length > 0 && { errors }),
    });
  } catch (error) {
    console.error("Form parsing error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to process upload",
    });
  }
}
