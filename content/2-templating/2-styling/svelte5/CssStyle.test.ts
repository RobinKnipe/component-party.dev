import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import CssStyle from "./CssStyle.svelte";

test("inline styles", () => {
  render(CssStyle);
  expect(screen.getByText("I am a button").getAttribute("style")).toBe(
    "font-size: 10rem;"
  );
});

test("CSS class styles", () => {
  const { container } = render(CssStyle);
  console.log(container.parentElement.outerHTML);
  expect(container.ownerDocument.head.children.length).toBeGreaterThan(0);
});
