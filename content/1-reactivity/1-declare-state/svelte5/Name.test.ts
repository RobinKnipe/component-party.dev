import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import Name from "./Name.svelte";

test("name placeholder is populated from state", () => {
  render(Name);
  screen.getByText("Hello John");
});
