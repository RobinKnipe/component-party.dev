import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App.svelte";

test("clicking the +1 button updates the counter", async () => {
  const user = userEvent.setup();

  render(App);
  screen.getByText("😀");

  await user.click(screen.getByRole("button", { name: "NO" }));
  screen.getByText("😥");

  await user.click(screen.getByRole("button", { name: "YES" }));
  screen.getByText("😀");
});
