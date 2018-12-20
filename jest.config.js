module.exports = {
  roots: ["<rootDir>/src"],
  setupTestFrameworkScriptFile: "<rootDir>setupTests.js",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
