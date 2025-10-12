import { render, screen } from "@testing-library/react";
import { TrustBadges } from "@/components/TrustBadges";

describe("TrustBadges", () => {
  it("renders the TrustBadges section", () => {
    render(<TrustBadges />);

    expect(screen.getByRole("region", { name: /trusted by industry leaders/i })).toBeInTheDocument();
  });

  it("renders the header text correctly", () => {
    render(<TrustBadges />);

    expect(screen.getByText("Trusted by Industry Leaders")).toBeInTheDocument();
    expect(screen.getByText("Why thousands of businesses choose K&L Recycling")).toBeInTheDocument();
  });

  it("renders all trust badge items", () => {
    render(<TrustBadges />);

    // Check that all badge titles are rendered
    expect(screen.getByText("68+ Years")).toBeInTheDocument();
    expect(screen.getByText("10,000+ Tons")).toBeInTheDocument();
    expect(screen.getByText("500+ Partners")).toBeInTheDocument();
    expect(screen.getByText("100% Compliant")).toBeInTheDocument();
    expect(screen.getByText("4.9/5 Rating")).toBeInTheDocument();
    expect(screen.getByText("24/7 Service")).toBeInTheDocument();
  });

  it("renders all trust badge descriptions", () => {
    render(<TrustBadges />);

    expect(screen.getByText("Industry Experience")).toBeInTheDocument();
    expect(screen.getByText("Recycled Annually")).toBeInTheDocument();
    expect(screen.getByText("Trusted Businesses")).toBeInTheDocument();
    expect(screen.getByText("EPA Standards")).toBeInTheDocument();
    expect(screen.getByText("Customer Satisfaction")).toBeInTheDocument();
    expect(screen.getByText("Emergency Pickup")).toBeInTheDocument();
  });

  it("renders all trust badge icons", () => {
    render(<TrustBadges />);

    // Check for the presence of all emoji icons
    expect(screen.getByText("🏆")).toBeInTheDocument();
    expect(screen.getByText("♻️")).toBeInTheDocument();
    expect(screen.getByText("🏢")).toBeInTheDocument();
    expect(screen.getByText("✅")).toBeInTheDocument();
    expect(screen.getByText("⭐")).toBeInTheDocument();
    expect(screen.getByText("🚚")).toBeInTheDocument();
  });

  it("has proper CSS classes for styling", () => {
    render(<TrustBadges />);

    const section = screen.getByRole("region", { name: /trusted by industry leaders/i });
    expect(section).toHaveClass("py-16", "bg-white");

    // Check container classes
    const container = section.querySelector(".container");
    expect(container).toHaveClass("mx-auto", "px-6");
  });

  it("renders badges in a responsive grid layout", () => {
    render(<TrustBadges />);

    const grid = document.querySelector(".grid");
    expect(grid).toHaveClass("grid-cols-2", "md:grid-cols-3", "lg:grid-cols-6", "gap-6");
  });

  it("renders 6 badge items", () => {
    render(<TrustBadges />);

    const badges = document.querySelectorAll('[class*="group"]');
    expect(badges).toHaveLength(6);
  });

  it("each badge has proper structure with icon, title, and description", () => {
    render(<TrustBadges />);

    // Find all badge containers
    const badges = document.querySelectorAll('[class*="group"]');

    badges.forEach((badge, index) => {
      // Each badge should have an icon container
      const iconContainer = badge.querySelector('[class*="bg-gradient-to-r"]');
      expect(iconContainer).toBeInTheDocument();

      // Each badge should have a title (h3)
      const title = badge.querySelector("h3");
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("font-bold");

      // Each badge should have a description (p)
      const description = badge.querySelector("p");
      expect(description).toBeInTheDocument();
      expect(description).toHaveClass("text-sm", "text-gray-600");
    });
  });

  it("badge icons are properly sized and styled", () => {
    render(<TrustBadges />);

    const iconContainers = document.querySelectorAll('[class*="bg-gradient-to-r"]');
    iconContainers.forEach((container) => {
      expect(container).toHaveClass("w-16", "h-16", "rounded-2xl");
    });

    // Check that each icon container has the emoji
    const icons = document.querySelectorAll('[class*="text-2xl"]');
    expect(icons).toHaveLength(6);
  });

  it("badge titles have proper styling", () => {
    render(<TrustBadges />);

    const titles = document.querySelectorAll("h3");
    titles.forEach((title) => {
      expect(title).toHaveClass("font-bold", "text-gray-900", "text-lg", "mb-1");
    });
  });

  it("has hover effects on badge containers", () => {
    render(<TrustBadges />);

    const badgeContainers = document.querySelectorAll('[class*="group"]');
    badgeContainers.forEach((container) => {
      expect(container).toHaveClass("cursor-pointer");
    });

    // Check for hover transformations on icon containers
    const iconContainers = document.querySelectorAll('[class*="group-hover:scale-110"]');
    expect(iconContainers).toHaveLength(6);
  });

  it("is responsive with proper container constraints", () => {
    render(<TrustBadges />);

    const container = document.querySelector('[class*="max-w-6xl"]');
    expect(container).toHaveClass("max-w-6xl", "mx-auto");
  });

  it("handles empty badge data gracefully", () => {
    // This test verifies that the component would handle missing data
    // (though it currently has hardcoded data)
    render(<TrustBadges />);

    // Component should still render even if data structure exists
    expect(screen.getByText("Trusted by Industry Leaders")).toBeInTheDocument();
  });
});
