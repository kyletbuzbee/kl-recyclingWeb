const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

module.exports = createJestConfig({
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text-summary", "lcov"],
  collectCoverageFrom: ["src/components/**/*.{ts,tsx}", "src/pages/**/*.{ts,tsx}", "!src/pages/_*.{ts,tsx}", "!**/node_modules/**", "!**/*.d.ts"],
});
