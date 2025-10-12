import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
  /** Border radius */
  borderRadius?: string | number;
  /** Animation duration in seconds */
  duration?: number;
  /** Number of skeleton lines (for text variants) */
  lines?: number;
  /** Spacing between multiple skeleton lines */
  lineSpacing?: string | number;
  /** Variant presets */
  variant?: "text" | "rectangle" | "circle" | "card" | "avatar";
  /** Custom className */
  className?: string;
  /** Custom style */
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "1rem", borderRadius = "4px", duration = 1.5, lines = 1, lineSpacing = "0.5rem", variant = "rectangle", className = "", style = {} }) => {
  // Predefined variants with intelligent defaults
  const getVariantProps = (variant: string) => {
    switch (variant) {
      case "text":
        return { height: "1rem", width: "100%", borderRadius: "4px" };
      case "circle":
        return { height: width || "2.5rem", width: width || "2.5rem", borderRadius: "50%" };
      case "avatar":
        return { height: "3rem", width: "3rem", borderRadius: "50%" };
      case "card":
        return { height: "200px", width: "100%", borderRadius: "8px" };
      case "rectangle":
      default:
        return { height, width, borderRadius };
    }
  };

  const variantProps = getVariantProps(variant);

  if (lines > 1) {
    // Multi-line skeleton for text blocks
    return (
      <div className={`space-y-[${lineSpacing}] ${className}`} style={style}>
        {Array.from({ length: lines }, (_, index) => {
          const lineWidth = index === lines - 1 ? "60%" : "100%"; // Last line shorter
          return (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]"
              style={{
                width: lineWidth,
                height: variantProps.height,
                borderRadius: variantProps.borderRadius,
              }}
              animate={{
                backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    );
  }

  // Single skeleton element
  return (
    <motion.div
      className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] ${className}`}
      style={{
        width: variantProps.width,
        height: variantProps.height,
        borderRadius: variantProps.borderRadius,
        ...style,
      }}
      animate={{
        backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Specialized Skeleton Components
export const SkeletonText: React.FC<Omit<SkeletonProps, "variant">> = (props) => <Skeleton {...props} variant="text" />;

export const SkeletonCircle: React.FC<Omit<SkeletonProps, "variant">> = (props) => <Skeleton {...props} variant="circle" />;

export const SkeletonAvatar: React.FC<Omit<SkeletonProps, "variant">> = (props) => <Skeleton {...props} variant="avatar" />;

export const SkeletonCard: React.FC<Omit<SkeletonProps, "variant">> = (props) => <Skeleton {...props} variant="card" />;

// Content-Specific Skeleton Components
export const SkeletonParagraph: React.FC<{ lines?: number; className?: string }> = ({ lines = 3, className = "" }) => <SkeletonText lines={lines} className={className} />;

export const SkeletonHeading: React.FC<{ width?: string; className?: string }> = ({ width = "70%", className = "" }) => <SkeletonText width={width} height="2rem" className={className} />;

export const SkeletonButton: React.FC<{ width?: string; className?: string }> = ({ width = "120px", className = "" }) => <SkeletonRect width={width} height="2.5rem" borderRadius="0.5rem" className={className} />;

export const SkeletonInput: React.FC<{ className?: string }> = ({ className = "" }) => <SkeletonRect height="2.5rem" width="100%" borderRadius="0.375rem" className={className} />;

// Export a generic SkeletonRect for completeness
export const SkeletonRect: React.FC<Omit<SkeletonProps, "variant">> = (props) => <Skeleton {...props} variant="rectangle" />;

export default Skeleton;
