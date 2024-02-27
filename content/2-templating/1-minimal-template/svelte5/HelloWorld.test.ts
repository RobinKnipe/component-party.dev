import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test } from "vitest";
import HelloWorld from "./HelloWorld.svelte";

test("basic content template", () => {
  render(HelloWorld);
  expect(screen.getByText("Hello world")).toBeDefined();
});
