import React from "react";
import { expect, describe, beforeEach, afterEach, it } from "vitest";
import { Box } from "../src/Box/index";
import { cleanup } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(<Box />);
});

describe("Box Component", () => {
  it("exists", () => {
    expect(screen.getByText("Button")).toBeDefined();
  });

  it("switch border when click FRAME node", () => {
    expect(screen.getByText("FRAME").className).contains("rounded_9999px");
    fireEvent.click(screen.getByText("Button"));
    expect(screen.getByText("FRAME").className).contains("rounded_0px");
  });
});
