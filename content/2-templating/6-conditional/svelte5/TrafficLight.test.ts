import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import TrafficLight from "./TrafficLight.svelte";
import userEvent from "@testing-library/user-event";

test("the second input should be focused by the $effect", async () => {
  const user = userEvent.setup();

  render(TrafficLight);
  screen.getByText("Light is: green");
  const p = screen.getByText("You must");
  expect(p.textContent).toBe("You must GO");

  await user.click(screen.getByRole("button", { name: "Next light" }));
  screen.getByText("Light is: orange");
  expect(p.textContent).toBe("You must STOP");

  await user.click(screen.getByRole("button", { name: "Next light" }));
  screen.getByText("Light is: red");
  expect(p.textContent).toBe("You must WAIT");

  await user.click(screen.getByRole("button", { name: "Next light" }));
  screen.getByText("Light is: green");
  expect(p.textContent).toBe("You must GO");
});
