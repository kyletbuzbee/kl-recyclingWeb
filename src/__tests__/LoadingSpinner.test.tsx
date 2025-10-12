import { render, screen, waitFor } from "@testing-library/react";
import LoadingSpinner, { PulseLoader, SkeletonLoader } from "../components/LoadingSpinner";

describe("LoadingSpinner", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders with default props", () => {
    render(<LoadingSpinner />);

    const spinner = document.querySelector('[class*="animate-spin"]');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("w-8", "h-8", "border-royal-blue-200", "border-t-royal-blue-600");
  });

  it("renders with custom size variants", () => {
    const sizes = {
      xs: "w-4 h-4",
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-12 h-12",
      xl: "w-16 h-16",
    };

    Object.entries(sizes).forEach(([size, classes]) => {
      const { unmount } = render(<LoadingSpinner size={size as any} />);
      const spinner = document.querySelector('[class*="animate-spin"]');

      classes.split(" ").forEach((className) => {
        expect(spinner).toHaveClass(className);
      });

      unmount();
    });
  });

  it("renders with custom color variants", () => {
    const colors = {
      blue: "border-royal-blue-200 border-t-royal-blue-600",
      white: "border-white/20 border-t-white",
      gray: "border-gray-200 border-t-gray-600",
      electric: "border-electric-blue-200 border-t-electric-blue-600",
    };

    Object.entries(colors).forEach(([color, classes]) => {
      const { unmount } = render(<LoadingSpinner color={color as any} />);
      const spinner = document.querySelector('[class*="animate-spin"]');

      classes.split(" ").forEach((className) => {
        expect(spinner).toHaveClass(className);
      });

      unmount();
    });
  });

  it("renders with custom text", () => {
    render(<LoadingSpinner text="Loading..." />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("text has proper styling for different colors", () => {
    const { rerender } = render(<LoadingSpinner text="Loading..." color="blue" />);
    expect(screen.getByText("Loading...")).toHaveClass("text-gray-600");

    rerender(<LoadingSpinner text="Loading..." color="white" />);
    expect(screen.getByText("Loading...")).toHaveClass("text-white");
  });

  it("renders as full screen overlay", () => {
    render(<LoadingSpinner fullScreen />);

    const overlay = document.querySelector('[class*="fixed inset-0"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("bg-white/80", "backdrop-blur-sm");
  });

  it("renders as component overlay", () => {
    render(<LoadingSpinner overlay />);

    const overlay = document.querySelector('[class*="absolute inset-0"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("bg-black/10", "backdrop-blur-[1px]");
  });

  it("applies custom className", () => {
    render(<LoadingSpinner className="custom-spinner" />);

    const container = document.querySelector('[class*="custom-spinner"]');
    expect(container).toBeInTheDocument();
  });

  it("is initially invisible to prevent flash", () => {
    render(<LoadingSpinner />);

    const spinner = document.querySelector('[class*="animate-spin"]');
    expect(spinner).toHaveClass("opacity-0");
  });

  it("becomes visible after delay", () => {
    render(<LoadingSpinner />);

    const spinner = document.querySelector('[class*="animate-spin"]');

    // Initially invisible
    expect(spinner).toHaveClass("opacity-0");

    // After 100ms delay, becomes visible
    jest.advanceTimersByTime(100);
    expect(spinner).toHaveClass("opacity-100");
  });

  it("text visibility is delayed", () => {
    render(<LoadingSpinner text="Loading..." />);

    const text = screen.getByText("Loading...");

    // Initially invisible with transform
    expect(text).toHaveClass("opacity-0", "translate-y-2");

    // After delay, becomes visible
    jest.advanceTimersByTime(250); // 100ms delay + transition
    expect(text).toHaveClass("opacity-100", "translate-y-0");
  });
});

describe("PulseLoader", () => {
  it("renders with default props", () => {
    const { container } = render(<PulseLoader />);

    const dots = container.querySelectorAll('[class*="animate-pulse"]');
    expect(dots).toHaveLength(3);
  });

  it("renders with custom sizes", () => {
    const sizes = {
      xs: "w-1 h-1",
      sm: "w-1.5 h-1.5",
      md: "w-2 h-2",
      lg: "w-3 h-3",
      xl: "w-4 h-4",
    };

    Object.entries(sizes).forEach(([size, classes]) => {
      const { unmount } = render(<PulseLoader size={size as any} />);

      classes.split(" ").forEach((className) => {
        const dots = document.querySelectorAll(`[class*="animate-pulse"]`);
        dots.forEach((dot) => {
          expect(dot).toHaveClass(className);
        });
      });

      unmount();
    });
  });

  it("renders with custom colors", () => {
    const colors = {
      blue: "bg-royal-blue-600",
      white: "bg-white",
      gray: "bg-gray-600",
      electric: "bg-electric-blue-600",
    };

    Object.entries(colors).forEach(([color, className]) => {
      const { unmount } = render(<PulseLoader color={color as any} />);

      const dots = document.querySelectorAll(`[class*="animate-pulse"]`);
      dots.forEach((dot) => {
        expect(dot).toHaveClass(className);
      });

      unmount();
    });
  });

  it("has staggered animation delays", () => {
    render(<PulseLoader />);

    const dots = document.querySelectorAll('[style*="animation-delay"]');

    // Check that each dot has different animation delay
    expect(dots[0]).toHaveStyle({ animationDelay: "0s" });
    expect(dots[1]).toHaveStyle({ animationDelay: "0.15s" });
    expect(dots[2]).toHaveStyle({ animationDelay: "0.3s" });
  });

  it("applies custom className", () => {
    render(<PulseLoader className="custom-loader" />);

    const container = document.querySelector(".custom-loader");
    expect(container).toBeInTheDocument();
  });
});

describe("SkeletonLoader", () => {
  it("renders with single line by default", () => {
    const { container } = render(<SkeletonLoader />);

    const skeletons = container.querySelectorAll('[class*="loading-skeleton"]');
    expect(skeletons).toHaveLength(1);
  });

  it("renders with multiple lines", () => {
    const { container } = render(<SkeletonLoader lines={3} />);

    const skeletons = container.querySelectorAll('[class*="loading-skeleton"]');
    expect(skeletons).toHaveLength(3);
  });

  it("has proper shimmer animation styling", () => {
    const { container } = render(<SkeletonLoader />);

    const skeleton = container.querySelector('[class*="loading-skeleton"]');
    expect(skeleton).toHaveStyle({
      backgroundSize: "200% 100%",
    });
    expect(skeleton).toHaveStyle({
      animation: "shimmer 1.5s infinite",
    });
  });

  it("has proper skeleton styling", () => {
    const { container } = render(<SkeletonLoader />);

    const skeleton = container.querySelector('[class*="loading-skeleton"]');
    expect(skeleton).toHaveClass("loading-skeleton", "rounded-lg", "h-4", "bg-gradient-to-r", "from-gray-200", "via-gray-300", "to-gray-200");
  });

  it("container has proper spacing between lines", () => {
    const { container } = render(<SkeletonLoader lines={2} />);

    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass("space-y-3");
  });

  it("applies custom className", () => {
    const { container } = render(<SkeletonLoader className="custom-skeleton" />);

    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass("custom-skeleton");
  });
});
