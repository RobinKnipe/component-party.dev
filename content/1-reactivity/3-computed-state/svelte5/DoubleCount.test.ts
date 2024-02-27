import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import DoubleCount from "./DoubleCount.svelte";

test("doubleCount placeholder is populated from derived state", () => {
  render(DoubleCount);
  expect(screen.getByText("20")).toBeDefined();
});
