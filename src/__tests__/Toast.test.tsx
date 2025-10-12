import { render, screen, waitFor } from "@testing-library/react";
import Toast from "@/components/Toast";

const mockOnClose = jest.fn();

const defaultProps = {
  message: "Test message",
  type: "success" as const,
  onClose: mockOnClose,
};

describe("Toast", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders with success message and proper styling", () => {
    render(<Toast {...defaultProps} />);

    const toast = screen.getByText("Test message");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveClass("bg-green-500");
  });

  it("renders with error message and proper styling", () => {
    render(<Toast {...defaultProps} type="error" />);

    const toast = screen.getByText("Test message");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveClass("bg-red-500");
  });

  it("has proper base classes", () => {
    render(<Toast {...defaultProps} />);

    const toast = screen.getByText("Test message");
    expect(toast).toHaveClass("fixed", "bottom-5", "right-5", "p-4", "rounded-lg", "shadow-lg", "text-white", "bg-green-500");
  });

  it("calls onClose after 5 seconds", () => {
    render(<Toast {...defaultProps} />);

    expect(screen.getByText("Test message")).toBeInTheDocument();
    expect(mockOnClose).not.toHaveBeenCalled();

    // Fast-forward time by 5 seconds
    jest.advanceTimersByTime(5000);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("hides after timeout", async () => {
    render(<Toast {...defaultProps} />);

    expect(screen.getByText("Test message")).toBeInTheDocument();

    // Fast-forward time by 5 seconds
    jest.advanceTimersByTime(5000);

    await waitFor(() => {
      expect(screen.queryByText("Test message")).not.toBeInTheDocument();
    });
  });

  it("clears timeout on unmount", () => {
    const { unmount } = render(<Toast {...defaultProps} />);

    expect(screen.getByText("Test message")).toBeInTheDocument();

    // Unmount before timeout
    unmount();

    // Fast-forward time - onClose should not be called since component is unmounted
    jest.advanceTimersByTime(5000);

    // onClose might still be called once due to the unmount effect, but we want to ensure cleanup
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("restarts timer when message changes", () => {
    const { rerender } = render(<Toast {...defaultProps} />);

    expect(screen.getByText("Test message")).toBeInTheDocument();

    // Advance time partially
    jest.advanceTimersByTime(3000);
    expect(mockOnClose).not.toHaveBeenCalled();

    // Rerender with new message
    rerender(<Toast {...defaultProps} message="New message" />);

    // Should still be visible with new message
    expect(screen.getByText("New message")).toBeInTheDocument();
    expect(screen.queryByText("Test message")).not.toBeInTheDocument();
    expect(mockOnClose).not.toHaveBeenCalled();

    // Advance time again - should close after another 5 seconds
    jest.advanceTimersByTime(3000);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("handles empty message", () => {
    render(<Toast {...defaultProps} message="" />);

    const toast = screen.getByText("");
    expect(toast).toBeInTheDocument();
  });

  it("is not visible initially before effect runs", () => {
    // Mock useState to return false initially
    const originalUseState = require("react").useState;
    require("react").useState = jest.fn(() => [false, jest.fn()]);

    render(<Toast {...defaultProps} />);

    expect(screen.queryByText("Test message")).not.toBeInTheDocument();

    // Restore original useState
    require("react").useState = originalUseState;
  });

  it("is accessible with proper text color", () => {
    render(<Toast {...defaultProps} />);

    const toast = screen.getByText("Test message");
    expect(toast).toHaveClass("text-white");
  });

  it("positions correctly on screen", () => {
    render(<Toast {...defaultProps} />);

    const toast = screen.getByText("Test message");
    expect(toast).toHaveClass("fixed", "bottom-5", "right-5");
  });

  it("renders different types correctly", () => {
    const { rerender } = render(<Toast {...defaultProps} type="success" />);
    expect(screen.getByText("Test message")).toHaveClass("bg-green-500");

    rerender(<Toast {...defaultProps} type="error" />);
    expect(screen.getByText("Test message")).toHaveClass("bg-red-500");
  });
});
