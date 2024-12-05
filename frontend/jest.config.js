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
          outputDirectory: "./frontned",
          outputName: "junit.xml",
        },
      ],
    ],
  };
  
