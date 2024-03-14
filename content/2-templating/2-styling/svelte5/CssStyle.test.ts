import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import CssStyle from "./CssStyle.svelte";

test("inline styles", () => {
  render(CssStyle);
  expect(screen.getByText("I am a button").getAttribute("style")).toBe(
    "font-size: 10rem;"
  );
});
