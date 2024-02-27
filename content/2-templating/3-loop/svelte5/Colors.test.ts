import { render } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import Colors from "./Colors.svelte";

test("loops over the colors array and renders the items into a list", () => {
  const { container } = render(Colors);
  const listItems = container.querySelectorAll("li");
  expect(listItems).toHaveLength(3);
  expect(listItems[0].textContent).toBe("red");
  expect(listItems[1].textContent).toBe("green");
  expect(listItems[2].textContent).toBe("blue");
});
