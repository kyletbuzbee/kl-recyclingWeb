import { render, screen } from "@testing-library/react";
import AboutPage from "../pages/about";

describe("AboutPage", () => {
  it("renders the main heading", () => {
    render(<AboutPage />);

    const heading = screen.getByRole("heading", {
      name: /East Texas' Trusted Scrap Metal Leader/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
