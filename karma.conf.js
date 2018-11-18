module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
      { pattern: "**/*.test.js", type: "module", included: true },
      { pattern: "**/*.js", type: "module", included: false }
    ],
    exclude: [],
    preprocessors: {},
    reporters: ["spec"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome", "Firefox", "Edge"],
    singleRun: true,
    concurrency: Infinity
  });
};
