import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import InputHello from "./InputHello.svelte";

test("typing in the input updates the p tag contents", async () => {
  const user = userEvent.setup();

  render(InputHello);
  const p = screen.getByText("Hello World");
  const input = screen.getByDisplayValue("Hello World");

  await user.clear(input);
  expect(p.textContent).toBe("");

  await user.type(input, "some text");
  expect(p.textContent).toBe("some text");
});
