import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  verbose: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
