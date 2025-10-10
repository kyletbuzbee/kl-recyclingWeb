import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "blue" | "white" | "gray" | "electric";
  className?: string;
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

const LoadingSpinner = ({ size = "md", color = "blue", className = "", text, fullScreen = false, overlay = false }: LoadingSpinnerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Prevent flash of spinner on quick loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sizes = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colors = {
    blue: "border-royal-blue-200 border-t-royal-blue-600",
    white: "border-white/20 border-t-white",
    gray: "border-gray-200 border-t-gray-600",
    electric: "border-electric-blue-200 border-t-electric-blue-600",
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`
          ${sizes[size]} 
          ${colors[color]}
          border-4 rounded-full animate-spin
          transition-all duration-300
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />
      {text && <p className={`mt-3 font-medium ${color === "white" ? "text-white" : "text-gray-600"} transition-all duration-300 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>{text}</p>}
    </div>
  );

  if (fullScreen) {
    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">{spinner}</div>;
  }

  if (overlay) {
    return <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-[1px] rounded-lg">{spinner}</div>;
  }

  return spinner;
};

// Pulse loader variant
export const PulseLoader = ({ size = "md", color = "blue", className = "" }: Pick<LoadingSpinnerProps, "size" | "color" | "className">) => {
  const sizeClasses = {
    xs: "w-1 h-1",
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
    xl: "w-4 h-4",
  };

  const colorClasses = {
    blue: "bg-royal-blue-600",
    white: "bg-white",
    gray: "bg-gray-600",
    electric: "bg-electric-blue-600",
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`
            ${sizeClasses[size]}
            ${colorClasses[color]}
            rounded-full animate-pulse
          `}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  );
};

// Skeleton loader
export const SkeletonLoader = ({ className = "", lines = 1 }: { className?: string; lines?: number }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="loading-skeleton rounded-lg h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner;
