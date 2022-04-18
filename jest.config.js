module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  cacheDirectory: "./tmp/cache/jest",
  testMatch: ["**/__tests__/?(*.)test.[jt]s?(x)"],
  globals: {
    "ts-jest": { tsconfig: "./tsconfig.json" },
  },
};
