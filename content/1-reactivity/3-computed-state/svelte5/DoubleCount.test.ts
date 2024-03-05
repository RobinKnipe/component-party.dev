import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import DoubleCount from "./DoubleCount.svelte";

test("doubleCount placeholder is populated from derived state", () => {
  render(DoubleCount);
  screen.getByText("20");
});
