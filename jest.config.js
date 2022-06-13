module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["./setupTests.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  }
};
