/* eslint-disable react/display-name */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ServicesPage from "@/pages/services";

// Mock framer-motion for testing
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock next/dynamic
jest.mock("next/dynamic", () => {
  return (importFn: any) => {
    if (importFn.toString().includes("ServiceModal")) {
      return () => <div data-testid="service-modal">Service Modal</div>;
    }
    return importFn;
  };
});

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    query: "",
  })),
}));

// Mock AOS library
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

describe("ServicesPage", () => {
  // eslint-disable-next-line react/display-name
  function ServicesTestComponent() {
    return <ServicesPage />;
  }

  it("renders the services page correctly", () => {
    render(<ServicesTestComponent />);

    // Check that the main heading is rendered
    expect(screen.getByText("Industrial Scrap Management Solutions")).toBeInTheDocument();

    // Check that the hero subtitle is rendered
    expect(screen.getByText(/Professional-grade recycling services/)).toBeInTheDocument();

    // Check that CTA buttons are present
    expect(screen.getByText("Get Free Quote")).toBeInTheDocument();
    expect(screen.getByText("Find Location")).toBeInTheDocument();
  });

  it("renders service category sections", () => {
    render(<ServicesPage />);

    // Check that service categories are rendered
    expect(screen.getByText("Service Categories")).toBeInTheDocument();
    expect(screen.getByText("Industrial Services")).toBeInTheDocument();
    expect(screen.getByText("Demolition & Construction")).toBeInTheDocument();
    expect(screen.getByText("Public Services")).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<ServicesPage />);

    // Check that individual services are listed
    expect(screen.getByText("Industrial Scrap Management")).toBeInTheDocument();
    expect(screen.getByText("Demolition & C&D Debris")).toBeInTheDocument();
    expect(screen.getByText("Roll-Off Container Services")).toBeInTheDocument();
    expect(screen.getByText("Mobile Car Crushing & On-Site Processing")).toBeInTheDocument();
    expect(screen.getByText("Public Drop-Off Services")).toBeInTheDocument();
  });

  it("renders pricing information section", () => {
    render(<ServicesPage />);

    // Check pricing section
    expect(screen.getByText("Competitive Pricing")).toBeInTheDocument();
    expect(screen.getByText("Copper")).toBeInTheDocument();
    expect(screen.getByText("Aluminum")).toBeInTheDocument();
    expect(screen.getByText("Steel")).toBeInTheDocument();
    expect(screen.getByText("Brass")).toBeInTheDocument();
  });

  it("opens service modal when service card is clicked", () => {
    render(<ServicesPage />);

    // Find a service card and click it
    const serviceCard = screen.getByText("Industrial Scrap Management").closest("div");
    fireEvent.click(serviceCard!);

    // Check that modal is rendered
    expect(screen.getByTestId("service-modal")).toBeInTheDocument();
  });

  it("includes operational details for demolition and mobile crushing services", () => {
    render(<ServicesPage />);

    // Check that operational services are featured
    expect(screen.getByText("Mobile Car Crushing & On-Site Processing")).toBeInTheDocument();
    expect(screen.getByText("Demolition & C&D Debris")).toBeInTheDocument();

    // Check that operational flags are present in the data (via text content)
    expect(screen.getByText("OSHA-compliant handling")).toBeInTheDocument();
    expect(screen.getByText("All permits and environmental compliance handled")).toBeInTheDocument();
  });

  it("renders call-to-action section", () => {
    render(<ServicesPage />);

    // Check final CTA section
    expect(screen.getByText("Get Free Quote")).toBeInTheDocument();
    expect(screen.getByText("Find Location")).toBeInTheDocument();
  });
});
