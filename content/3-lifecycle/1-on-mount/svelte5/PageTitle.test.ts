import { render } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import PageTitle from "./PageTitle.svelte";

test("set paragraph text after initial rendering using onMount function $effect", () => {
  const { container } = render(PageTitle);
  expect(container.querySelector("p").textContent).toBe(
    "Page title is: some title"
  );
});
