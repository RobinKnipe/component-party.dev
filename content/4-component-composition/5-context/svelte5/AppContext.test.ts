import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App.svelte";

test("clicking the button changes the username and updates the contents", async () => {
  const user = userEvent.setup();

  render(App);
  screen.getByRole("heading", { name: "Welcome back, unicorn42" });
  screen.getByText("Username: unicorn42");

  await user.click(
    screen.getByRole("button", { name: "Update username to Jane" })
  );
  screen.getByRole("heading", { name: "Welcome back, Jane" });
  screen.getByText("Username: Jane");
});
