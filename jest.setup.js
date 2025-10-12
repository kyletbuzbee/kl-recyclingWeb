// jest.setup.js

// Optional: configure or set up a testing framework before each test.
import "@testing-library/jest-dom";

// Mock framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");
  const FramerMotionMock = ({ children, ...props }) => {
    return React.createElement("div", props, children);
  };

  return {
    motion: FramerMotionMock,
    AnimatePresence: FramerMotionMock,
    animate: FramerMotionMock,
    useMotionValue: () => ({ get: () => 0, set: () => {} }),
    useTransform: () => 0,
    useSpring: () => ({ get: () => 0, set: () => {} }),
    useAnimation: () => ({
      start: () => Promise.resolve(),
      stop: () => {},
      set: () => {},
    }),
  };
});
