import { render } from "@testing-library/svelte/svelte5";
import { expect, test, vi } from "vitest";
import Time from "./Time.svelte";

test("register clean-up actions for when a component is destroyed/unmounted", () => {
  const clear = vi.spyOn(window, "clearInterval");
  const { container, unmount } = render(Time);
  expect(container.querySelector("p").textContent).toBe(
    `Current time: ${new Date().toLocaleTimeString()}`
  );

  unmount();
  expect(clear).toHaveBeenCalled();
});
