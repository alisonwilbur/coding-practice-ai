import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  collectCoverageFrom: [
    "**/*.ts",
    "!**/*.test.ts",
    "!**/*.config.ts",
    "!**/node_modules/**",
  ],
};

export default config;
