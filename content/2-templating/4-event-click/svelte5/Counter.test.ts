import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.svelte";

test("clicking the +1 button updates the counter", async () => {
  const user = userEvent.setup();

  render(Counter);
  screen.getByText("Counter: 0");

  await user.click(screen.getByRole("button", { name: "+1" }));
  screen.getByText("Counter: 1");

  await user.click(screen.getByRole("button", { name: "+1" }));
  await user.click(screen.getByRole("button", { name: "+1" }));
  screen.getByText("Counter: 3");
});
