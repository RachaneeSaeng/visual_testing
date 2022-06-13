import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const welcomeText = screen.getByText(/Visual Testing/i);
  expect(welcomeText).toBeInTheDocument();
});
