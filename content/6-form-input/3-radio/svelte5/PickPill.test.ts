import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import IsAvailable from "./PickPill.svelte";

test("radio input group updates propagate to tag contents", async () => {
  const user = userEvent.setup();

  render(IsAvailable);
  const div = screen.getByText("Picked: red");

  await user.click(screen.getByLabelText("Blue pill"));
  expect(div.textContent).toBe("Picked: blue");

  await user.click(screen.getByLabelText("Red pill"));
  expect(div.textContent).toBe("Picked: red");
});
