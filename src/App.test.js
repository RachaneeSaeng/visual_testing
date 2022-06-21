import React from "react";
import { render, screen } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";

import App from "./App";

const desktopViewport = { viewport: { width: 1280, height: 800 } };
const mobileViewport = { viewport: { width: 390, height: 800 } };

test("renders", async () => {
  render(<App />);
  expect(await generateImage(desktopViewport)).toMatchImageSnapshot();
  expect(await generateImage(mobileViewport)).toMatchImageSnapshot();
});
