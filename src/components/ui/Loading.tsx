import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton, { SkeletonCard, SkeletonText, SkeletonHeading, SkeletonButton } from "./Skeleton";

interface LoadingProps {
  /** Whether content is loading */
  loading?: boolean;
  /** Loading component variant */
  variant?: "skeleton" | "spinner" | "pulse" | "dots" | "wave";
  /** Content to show when not loading */
  children: React.ReactNode;
  /** Loading content to show (overrides default variants) */
  loadingElement?: React.ReactNode;
  /** Delay before showing loading state (prevents flash) */
  delay?: number;
  /** Custom className for wrapper */
  className?: string;
  /** Whether to show overlay on top of content */
  overlay?: boolean;
  /** Size of spinner/dots variants */
  size?: "sm" | "md" | "lg";
  /** Custom message for loading state */
  message?: string;
  /** Text color for loading message */
  textColor?: string;
}

// Spinner Component
const Spinner: React.FC<{ size?: "sm" | "md" | "lg"; className?: string }> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${className}`} />;
};

// Dots Animation
const Dots: React.FC<{ size?: "sm" | "md" | "lg"; className?: string }> = ({ size = "md", className = "" }) => {
  const dotClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`bg-blue-600 rounded-full ${dotClasses[size]}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

// Wave Animation
const Wave: React.FC<{ size?: "sm" | "md" | "lg"; className?: string }> = ({ size = "md", className = "" }) => {
  const barClasses = {
    sm: "w-1",
    md: "w-1.5",
    lg: "w-2",
  };

  const heightClasses = {
    sm: "h-3",
    md: "h-5",
    lg: "h-7",
  };

  return (
    <div className={`flex space-x-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`bg-blue-600 ${barClasses[size]} ${heightClasses[size]}`}
          animate={{
            scaleY: [1, 0.3, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Pulse Animation
const Pulse: React.FC<{ size?: "sm" | "md" | "lg"; className?: string }> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <motion.div
      className={`bg-blue-600 rounded-full ${sizeClasses[size]} ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Content-Aware Loading Variants
const ContentSkeleton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Analyze children to provide appropriate skeleton
  const childCount = React.Children.count(children);

  if (childCount === 0) {
    return <SkeletonCard />;
  }

  // Simple heuristic for content type
  return (
    <div className="space-y-4">
      <SkeletonHeading width="60%" />
      <div className="space-y-2">
        <SkeletonText />
        <SkeletonText />
        <SkeletonText width="80%" />
      </div>
      <div className="flex space-x-2 pt-2">
        <SkeletonButton width="100px" />
        <SkeletonButton width="120px" />
      </div>
    </div>
  );
};

const Loading: React.FC<LoadingProps> = ({ loading = false, variant = "skeleton", children, loadingElement, delay = 100, className = "", overlay = false, size = "md", message, textColor = "text-gray-600" }) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setShowLoading(true), delay);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, [loading, delay]);

  // Render loading element based on variant
  const renderLoadingElement = () => {
    if (loadingElement) {
      return loadingElement;
    }

    switch (variant) {
      case "spinner":
        return (
          <div className="flex flex-col items-center space-y-3">
            <Spinner size={size} />
            {message && <p className={`text-center text-sm ${textColor}`}>{message}</p>}
          </div>
        );

      case "pulse":
        return (
          <div className="flex flex-col items-center space-y-3">
            <Pulse size={size} />
            {message && <p className={`text-center text-sm ${textColor}`}>{message}</p>}
          </div>
        );

      case "dots":
        return (
          <div className="flex flex-col items-center space-y-3">
            <Dots size={size} />
            {message && <p className={`text-center text-sm ${textColor}`}>{message}</p>}
          </div>
        );

      case "wave":
        return (
          <div className="flex flex-col items-center space-y-3">
            <Wave size={size} />
            {message && <p className={`text-center text-sm ${textColor}`}>{message}</p>}
          </div>
        );

      case "skeleton":
      default:
        return <ContentSkeleton>{children}</ContentSkeleton>;
    }
  };

  if (overlay) {
    return (
      <div className={`relative ${className}`}>
        {children}
        <AnimatePresence>
          {showLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
              {renderLoadingElement()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {showLoading ? (
        <motion.div key="loading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className={className}>
          {renderLoadingElement()}
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className={className}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Higher-order component for loading states
export const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>, loadingProps: Omit<LoadingProps, "children"> = {}) => {
  return React.forwardRef<any, P & { loading?: boolean }>((props, ref) => {
    const { loading, ...restProps } = props;
    return (
      <Loading loading={loading} {...loadingProps}>
        <WrappedComponent {...(restProps as P)} ref={ref} />
      </Loading>
    );
  });
};

export default Loading;
export { Spinner, Dots, Wave, Pulse };
