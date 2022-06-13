import React from "react";
import { render, screen } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";

import App from "./App";

test("renders", async () => {
  render(<App />);
  const welcomeText = screen.getByText(/Visual Testing/i);
  expect(welcomeText).toBeInTheDocument();

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});
