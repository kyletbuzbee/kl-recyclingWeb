import { render, screen } from "@testing-library/react";
import Skeleton, { SkeletonText, SkeletonCircle, SkeletonAvatar, SkeletonCard, SkeletonParagraph, SkeletonHeading, SkeletonButton, SkeletonInput, SkeletonRect } from "@/components/ui/Skeleton";

// Mock framer-motion for this specific test
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe("Skeleton", () => {
  it("renders with default props", () => {
    render(<Skeleton />);

    const skeleton = screen.getByTestId ? screen.getByTestId("skeleton") : screen.getByText("", { selector: 'div[style*="width: 100%"]' }) || document.querySelector(".bg-gradient-to-r");
    expect(skeleton).toBeInTheDocument();
  });

  it("renders with custom width and height", () => {
    render(<Skeleton width="200px" height="20px" />);

    const skeleton = document.querySelector('[style*="width: 200px"]');
    expect(skeleton).toHaveStyle({ width: "200px", height: "20px" });
  });

  it("renders with custom border radius", () => {
    render(<Skeleton borderRadius="10px" />);

    const skeleton = document.querySelector('[style*="border-radius: 10px"]');
    expect(skeleton).toHaveStyle({ borderRadius: "10px" });
  });

  it("renders multiple lines for text skeleton", () => {
    render(<Skeleton variant="text" lines={3} />);

    // Should have 3 skeleton lines inside a container
    const container = document.querySelector(".space-y-\\[0\\.5rem\\]");
    const skeletonLines = container?.querySelectorAll("[animate]");
    expect(skeletonLines).toHaveLength(3);
  });

  it("renders circle variant correctly", () => {
    render(<Skeleton variant="circle" width="50px" />);

    const skeleton = document.querySelector('[style*="width: 50px"]');
    expect(skeleton).toHaveStyle({
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    });
  });

  it("renders avatar variant", () => {
    render(<Skeleton variant="avatar" />);

    const skeleton = document.querySelector('[style*="width: 3rem"]');
    expect(skeleton).toHaveStyle({
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
    });
  });

  it("renders card variant", () => {
    render(<Skeleton variant="card" />);

    const skeleton = document.querySelector('[style*="width: 100%"][style*="height: 200px"]');
    expect(skeleton).toHaveStyle({
      width: "100%",
      height: "200px",
      borderRadius: "8px",
    });
  });

  it("renders with custom className", () => {
    render(<Skeleton className="custom-skeleton" />);

    const skeleton = document.querySelector(".custom-skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  it("applies custom style", () => {
    const customStyle = { backgroundColor: "red", margin: "10px" };
    render(<Skeleton style={customStyle} />);

    // Find element with custom background color
    const skeleton = document.querySelector('[style*="background-color: red"]');
    expect(skeleton).toHaveStyle(customStyle);
  });
});

describe("Specialized Skeleton Components", () => {
  it("SkeletonText renders with text variant", () => {
    render(<SkeletonText />);

    const skeleton = document.querySelector('[style*="height: 1rem"]');
    expect(skeleton).toHaveStyle({
      height: "1rem",
      width: "100%",
      borderRadius: "4px",
    });
  });

  it("SkeletonCircle renders circle variant", () => {
    render(<SkeletonCircle />);

    const skeleton = document.querySelector('[style*="border-radius: 50%"]');
    expect(skeleton).toHaveStyle({
      borderRadius: "50%",
    });
  });

  it("SkeletonAvatar renders avatar variant", () => {
    render(<SkeletonAvatar />);

    const skeleton = document.querySelector('[style*="width: 3rem"]');
    expect(skeleton).toHaveStyle({
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
    });
  });

  it("SkeletonCard renders card variant", () => {
    render(<SkeletonCard />);

    const skeleton = document.querySelector('[style*="height: 200px"]');
    expect(skeleton).toHaveStyle({
      width: "100%",
      height: "200px",
      borderRadius: "8px",
    });
  });
});

describe("Content-Specific Skeleton Components", () => {
  it("SkeletonParagraph renders multiple lines", () => {
    render(<SkeletonParagraph lines={2} />);

    const skeletonLines = document.querySelectorAll('[style*="height: 1rem"]');
    expect(skeletonLines).toHaveLength(2);
  });

  it("SkeletonHeading renders with larger height", () => {
    render(<SkeletonHeading />);

    const skeleton = document.querySelector('[style*="height: 2rem"]');
    expect(skeleton).toHaveStyle({
      height: "2rem",
      width: "70%",
    });
  });

  it("SkeletonButton renders with button dimensions", () => {
    render(<SkeletonButton />);

    const skeleton = document.querySelector('[style*="width: 120px"]');
    expect(skeleton).toHaveStyle({
      width: "120px",
      height: "2.5rem",
      borderRadius: "0.5rem",
    });
  });

  it("SkeletonInput renders with input dimensions", () => {
    render(<SkeletonInput />);

    const skeleton = document.querySelector('[style*="width: 100%"]');
    expect(skeleton).toHaveStyle({
      width: "100%",
      height: "2.5rem",
      borderRadius: "0.375rem",
    });
  });

  it("SkeletonRect is alias for rectangle variant", () => {
    render(<SkeletonRect width="150px" height="30px" />);

    const skeleton = document.querySelector('[style*="width: 150px"]');
    expect(skeleton).toHaveStyle({
      width: "150px",
      height: "30px",
    });
  });
});
