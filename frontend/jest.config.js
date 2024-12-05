module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    testEnvironment: "jsdom",
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputDirectory: "./test-results",
          outputName: "test.xml",
        },
      ],
    ],
  };
  