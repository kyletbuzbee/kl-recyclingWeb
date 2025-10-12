import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ServiceModal from "@/components/ServiceModal";
import { Service } from "@/types";

// Mock service data
const mockService: Service = {
  id: "test-service",
  title: "Test Scrap Metal Service",
  description: "A comprehensive testing service for scrap metal processing",
  image: "/test-image.jpg",
  details: ["Detail 1", "Detail 2"],
  content: "<p>This is detailed content about the service.</p>",
  icon: "icon-path",
  benefits: ["Benefit 1", "Benefit 2"],
};

const mockProps = {
  isOpen: true,
  onClose: jest.fn(),
  service: mockService,
};

describe("ServiceModal", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders modal when isOpen is true and service is provided", () => {
    render(<ServiceModal {...mockProps} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Scrap Metal Service")).toBeInTheDocument();
    expect(screen.getByText("This is detailed content about the service.")).toBeInTheDocument();
  });

  it("does not render modal when isOpen is false", () => {
    render(<ServiceModal {...mockProps} isOpen={false} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("does not render modal when service is null", () => {
    render(<ServiceModal {...mockProps} service={null} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(<ServiceModal {...mockProps} />);

    const closeButton = screen.getByLabelText("Close modal");
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when backdrop is clicked", () => {
    render(<ServiceModal {...mockProps} />);

    // Find the backdrop by its classes since it doesn't have a test id
    const backdrop = document.querySelector(".backdrop-blur-sm");
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(mockProps.onClose).toHaveBeenCalledTimes(1);
    }
  });

  it("calls onClose when Escape key is pressed", () => {
    render(<ServiceModal {...mockProps} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when other keys are pressed", () => {
    render(<ServiceModal {...mockProps} />);

    fireEvent.keyDown(document, { key: "Enter" });

    expect(mockProps.onClose).not.toHaveBeenCalled();
  });

  it("renders service content as HTML", () => {
    render(<ServiceModal {...mockProps} />);

    const contentElement = screen.getByText("This is detailed content about the service.");
    expect(contentElement.tagName).toBe("P");
  });

  it("renders Get a Quote link", () => {
    render(<ServiceModal {...mockProps} />);

    const quoteLink = screen.getByRole("link", { name: /Get a Quote/i });
    expect(quoteLink).toBeInTheDocument();
    expect(quoteLink).toHaveAttribute("href", "/contact#quote-tool");
  });

  it("prevents modal content click from closing modal", () => {
    render(<ServiceModal {...mockProps} />);

    const modalContent = screen.getByText("Test Scrap Metal Service").closest("div");
    if (modalContent) {
      fireEvent.click(modalContent);
      expect(mockProps.onClose).not.toHaveBeenCalled();
    }
  });

  it("handles service without benefits gracefully", () => {
    const serviceWithoutBenefits: Service = {
      ...mockService,
      benefits: undefined,
    };

    render(<ServiceModal {...mockProps} service={serviceWithoutBenefits} />);

    expect(screen.getByText("Test Scrap Metal Service")).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<ServiceModal {...mockProps} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby", "modal-title");

    expect(screen.getByLabelText("Close modal")).toBeInTheDocument();
  });
});
