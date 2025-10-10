import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
}

// Upload file to Cloudinary (for server-side API routes)
export const uploadToCloudinary = async (
  filePathOrBuffer: string | Buffer,
  folder = "kl-recycling/uploads",
  options: {
    transformation?: any[];
    quality?: string | number;
    format?: string;
    width?: number;
    height?: number;
  } = {},
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      folder,
      resource_type: "auto",
      quality: options.quality || "auto",
      format: options.format || "auto",
      transformation: options.transformation || [],
      max_bytes: 10 * 1024 * 1024, // 10MB limit
      ...options,
    } as any; // Type assertion to bypass strict typing

    cloudinary.uploader.upload(filePathOrBuffer as any, uploadOptions, (error, result) => {
      if (error) {
        reject(error);
      } else if (result) {
        resolve(result as CloudinaryUploadResult);
      } else {
        reject(new Error("Upload failed"));
      }
    });
  });
};

// Delete file from Cloudinary
export const deleteFromCloudinary = async (publicId: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

// Generate optimized URL for images
export const getOptimizedImageUrl = (
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string | number;
    format?: string;
  } = {},
): string => {
  const { width, height, quality = "auto", format = "auto" } = options;

  const transformations = [{ width, height, crop: "fill" }, { quality }, { format }].filter(Boolean);

  return cloudinary.url(publicId, {
    transformation: transformations,
  });
};

// Upload multiple files
export const uploadMultipleToCloudinary = async (
  files: (string | Buffer)[],
  folder = "kl-recycling/uploads",
  options: {
    transformation?: any[];
    quality?: string | number;
    format?: string;
  } = {},
): Promise<CloudinaryUploadResult[]> => {
  const uploadPromises = files.map((file) => uploadToCloudinary(file, folder, options));
  return Promise.all(uploadPromises);
};

// Validate file before upload
export const validateFile = (file: { size: number; type: string }): { isValid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];

  if (file.size > maxSize) {
    return { isValid: false, error: "File size exceeds 10MB limit" };
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: "File type not supported. Please upload images (JPEG, PNG, WebP), PDF, DOC, DOCX, or TXT files.",
    };
  }

  return { isValid: true };
};

export default cloudinary;
