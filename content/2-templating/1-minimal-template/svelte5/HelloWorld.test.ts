import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import HelloWorld from "./HelloWorld.svelte";

test("basic content template", () => {
  render(HelloWorld);
  screen.getByText("Hello world");
});
