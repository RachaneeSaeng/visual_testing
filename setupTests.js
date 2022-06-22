// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { configureToMatchImageSnapshot } from "jest-image-snapshot";
import "@testing-library/jest-dom/extend-expect";

const runVisualTests = process.env.VISUAL_TEST === "true";

if (runVisualTests) {
  // Make sure jest has enough time to capture the screenshots
  jest.setTimeout(10000);

  const toMatchImageSnapshot = configureToMatchImageSnapshot({
    comparisonMethod: "ssim",
    customDiffConfig: {
      ssim: "fast" //'bezkrovny'
    }
  });
  expect.extend({ toMatchImageSnapshot });
} else {
  // mockup image snapshort library to increase running time
  jest.mock("jsdom-screenshot");

  const toMatchImageSnapshot = () => ({
    message: () => "",
    pass: true
  });

  expect.extend({ toMatchImageSnapshot });
}
