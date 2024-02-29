import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import App from "./App.svelte";

test("clicking the +1 button updates the counter", async () => {
  render(App);
  screen.getByRole("button", { name: "Click me!" });
});
