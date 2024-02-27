import { render } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import InputFocused from "./InputFocused.svelte";

test("the second input should be focused by the $effect", async () => {
  const { container } = render(InputFocused);
  const focus = container.querySelector("input:focus");
  expect(focus).toBeDefined();
  expect(focus.getAttribute("value")).toBe("has focus");
});
