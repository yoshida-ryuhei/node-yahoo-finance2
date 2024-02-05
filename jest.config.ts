import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest/presets/default-esm",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/tests-modules/",
  ],
  modulePathIgnorePatterns: ["<rootDir>/tests-modules"],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "(.*)\\.ts$": "$1",
  },
  /*
  reporters: [
    '<rootDir>/tests/reporter.ts',
    '<rootDir>/tests/summary-reporter.ts',
  ],
  */
};

export default config;
