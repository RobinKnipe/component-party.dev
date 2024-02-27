import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.svelte";

test("clicking the +1 button updates the counter", async () => {
  const user = userEvent.setup();

  render(Counter);
  expect(screen.getByText("Counter: 0"));

  await user.click(screen.getByRole("button", { name: "+1" }));
  expect(screen.getByText("Counter: 1"));

  await user.click(screen.getByRole("button", { name: "+1" }));
  await user.click(screen.getByRole("button", { name: "+1" }));
  expect(screen.getByText("Counter: 3"));
});
