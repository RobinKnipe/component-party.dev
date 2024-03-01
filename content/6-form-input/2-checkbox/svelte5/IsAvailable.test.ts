import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import IsAvailable from "./IsAvailable.svelte";

test("checkbox input updates propagate to p tag contents", async () => {
  const user = userEvent.setup();

  render(IsAvailable);
  const p = screen.getByText("I am unavailable");
  const checkbox = screen.getByText("Is available");

  await user.click(checkbox);
  expect(p.textContent).toBe("I am available");

  await user.click(checkbox);
  expect(p.textContent).toBe("I am unavailable");
});
