import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import Name from "./Name.svelte";

test("name placeholder is populated from state", () => {
  render(Name);
  expect(screen.getByText("Hello John")).toBeDefined();
});
