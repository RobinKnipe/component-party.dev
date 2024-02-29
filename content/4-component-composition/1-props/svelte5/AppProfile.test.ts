import { render, screen } from "@testing-library/svelte/svelte5";
import { test } from "vitest";
import UserProfile from "./UserProfile.svelte";
import App from "./App.svelte";

test("use a component inside another and pass props from parent to child", () => {
  render(App);
  screen.getByText("My name is John!");
  screen.getByText("My age is 20!");
  screen.getByText("My favourite colors are green, blue, red!");
  screen.getByText("I am available");
});

test("provide props to component directly", () => {
  render(UserProfile, {
    name: "Peter",
    age: 49,
    favouriteColors: ["yellow", "mauve"],
  });
  screen.getByText("My name is Peter!");
  screen.getByText("My age is 49!");
  screen.getByText("My favourite colors are yellow, mauve!");
  screen.getByText("I am not available");
});
