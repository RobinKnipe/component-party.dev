import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import ColorSelect from "./ColorSelect.svelte";

test("select list updates propagate to tag contents", async () => {
  const user = userEvent.setup();

  render(ColorSelect);
  // initial value has been set correctly
  const select = screen.getByRole("combobox");
  const div = screen.getByText("blue things are the best!");

  // state changes successfully
  await user.selectOptions(select, ["red"]);
  expect(div.textContent).toBe("red things are the best!");

  // disabled states are not selectable
  await user.selectOptions(select, ["gray"]);
  expect(div.textContent).toBe("red things are the best!");
});
