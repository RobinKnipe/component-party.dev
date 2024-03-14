import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import Name from "./Name.svelte";

test("name state is updated before rendering", () => {
  render(Name);
  screen.getByText("Hello Jane");
});
