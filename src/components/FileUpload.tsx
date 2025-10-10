import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload, FiFile, FiX } from "react-icons/fi";

interface FileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number; // in bytes
  accept?: string;
  errors?: string[];
}

export default function FileUpload({
  files,
  onFilesChange,
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024, // 10MB
  accept = "image/*,.pdf,.doc,.docx,.txt",
  errors = [],
}: FileUploadProps) {
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      const newErrors: string[] = [];

      // Validate accepted files
      if (files.length + acceptedFiles.length > maxFiles) {
        newErrors.push(`You can only upload up to ${maxFiles} files`);
      }

      // Check file sizes
      acceptedFiles.forEach((file) => {
        if (file.size > maxSize) {
          newErrors.push(`${file.name} is too large. Maximum size is ${maxSize / 1024 / 1024}MB`);
        }
      });

      // Handle rejected files
      rejectedFiles.forEach(({ file, errors }) => {
        errors.forEach((error: any) => {
          if (error.code === "file-too-large") {
            newErrors.push(`${file.name} is too large. Maximum size is ${maxSize / 1024 / 1024}MB`);
          } else if (error.code === "file-invalid-type") {
            newErrors.push(`${file.name} has an invalid file type.`);
          }
        });
      });

      setUploadErrors(newErrors);

      // Only add files if no errors
      if (newErrors.length === 0) {
        const validFiles = acceptedFiles.filter((file) => file.size <= maxSize);
        const totalFiles = [...files, ...validFiles];
        onFilesChange(totalFiles.slice(0, maxFiles));
      }
    },
    [files, maxFiles, maxSize, onFilesChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.split(",").reduce((acc, curr) => {
      const clean = curr.trim();
      if (clean.startsWith(".")) {
        return { ...acc, [clean]: [] };
      }
      return { ...acc, [clean]: [] };
    }, {}),
    maxSize,
    multiple: maxFiles > 1,
  });

  const removeFile = (indexToRemove: number) => {
    const newFiles = files.filter((_, index) => index !== indexToRemove);
    onFilesChange(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"} ${errors.length > 0 || uploadErrors.length > 0 ? "border-red-300" : ""}`}>
        <input {...getInputProps()} />
        <FiUpload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-900 mb-2">{isDragActive ? "Drop your files here" : "Upload Files"}</p>
        <p className="text-sm text-gray-500 mb-4">Drag & drop files here, or click to select files</p>
        <div className="text-xs text-gray-400 space-y-1">
          <p>Supported formats: Images, PDF, DOC, DOCX, TXT</p>
          <p>
            Maximum {maxFiles} files, up to {maxSize / 1024 / 1024}MB each
          </p>
        </div>
      </div>

      {/* Display Upload Errors */}
      {(uploadErrors.length > 0 || errors.length > 0) && (
        <div className="space-y-1">
          {[...uploadErrors, ...errors].map((error, index) => (
            <p key={index} className="text-sm text-red-600 flex items-center">
              <span className="text-red-500 mr-1">•</span>
              {error}
            </p>
          ))}
        </div>
      )}

      {/* Display Selected Files */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Selected Files:</h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <FiFile className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button type="button" onClick={() => removeFile(index)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <FiX className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="text-xs text-gray-500 text-center">
        {files.length} of {maxFiles} files selected
      </div>
    </div>
  );
}
