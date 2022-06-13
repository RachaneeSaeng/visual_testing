module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["./setupTests.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.css$": "jest-transform-scss",
    "^.+\\.scss$": "jest-transform-scss"
  }
};
