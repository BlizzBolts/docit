import { expect, describe, beforeEach, afterEach, it } from "vitest";
import { cleanup } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "../src/index";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  // render(<Header title=""/>);
});

describe("Box Component", () => {
  it("exists", () => {
    // expect(screen.getByText("Button")).toBeDefined();
  });
});
