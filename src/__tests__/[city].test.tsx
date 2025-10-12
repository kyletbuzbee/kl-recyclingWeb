// c:\KL Web Dev\KLofficialWebsite1\src\pages\locations\[city].test.tsx
import { render, screen } from "@testing-library/react";
import CityPage, { getStaticPaths, getStaticProps } from "../pages/locations/[city]";
import { locationsData, type LocationData } from "../data/locations";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  city: string;
}

// Mock the data to ensure tests are predictable
jest.mock("../data/locations", () => ({
  locationsData: {
    acme: {
      city: "Acme",
      summary: "Summary for Acme.",
      benefits: "Benefits for Acme.",
      contact: {
        address: "123 Acme St",
        phone: "123-456-7890",
        phoneHref: "tel:123-456-7890",
      },
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
      materials: ["Steel", "Copper"],
      coordinates: {
        lat: 38.3667,
        lng: -98.7667,
      },
    },
    "houston-county": {
      city: "Houston County",
      summary: "Summary for Houston County.",
      benefits: "Benefits for Houston County.",
      contact: {
        address: "456 Houston Ave",
        phone: "987-654-3210",
        phoneHref: "tel:987-654-3210",
      },
      hours: "Mon-Sat 8-6",
      materials: ["Aluminum", "Brass"],
      coordinates: {
        lat: 31.3189,
        lng: -95.4561,
      },
    },
  },
}));

describe("CityPage", () => {
  it("renders location not found when location is not provided", () => {
    // Suppress console.error from React for this test
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    render(<CityPage location={null as any} citySlug="invalid" />);
    expect(screen.getByText("Location not found.")).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });

  it("renders the page for a specific city", () => {
    const acmeLocation: LocationData = locationsData.acme;
    render(<CityPage location={acmeLocation} citySlug="acme" />);

    // Check for the main heading
    expect(screen.getByRole("heading", { name: /Scrap Metal Recycling in Acme/i })).toBeInTheDocument();

    // Check for some details
    expect(screen.getByText("123 Acme St")).toBeInTheDocument();
    expect(screen.getByText("Copper")).toBeInTheDocument();
  });

  describe("getStaticPaths", () => {
    it("should return the correct paths", async () => {
      const paths = await getStaticPaths({});
      expect(paths).toEqual({
        paths: [{ params: { city: "acme" } }, { params: { city: "houston-county" } }],
        fallback: false,
      });
    });
  });

  describe("getStaticProps", () => {
    it("should return props for a valid city", async () => {
      const context: GetStaticPropsContext<IParams> = {
        params: { city: "acme" },
      };
      const response = await getStaticProps(context);
      expect(response).toEqual({
        props: {
          location: locationsData.acme,
          citySlug: "acme",
        },
      });
    });

    it("should return notFound for an invalid city", async () => {
      const context: GetStaticPropsContext<IParams> = {
        params: { city: "nonexistent" },
      };
      const response = await getStaticProps(context);
      expect(response).toEqual({
        notFound: true,
      });
    });
  });
});
