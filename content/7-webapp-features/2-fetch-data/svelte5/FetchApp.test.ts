import { render, screen } from "@testing-library/svelte/svelte5";
import { expect, test, vi } from "vitest";
import App from "./App.svelte";

test("fetch data, show loading, display fetched data", async () => {
  const mockFetch = vi.spyOn(window, "fetch").mockResolvedValueOnce({
    json: () =>
      Promise.resolve({
        results: [
          {
            picture: { thumbnail: "mock-thumb" },
            name: { first: "mock", last: "lobster" },
          },
        ],
      }),
  } as Response);

  render(App);
  screen.getByText("Fetching users...");
  expect(mockFetch).toHaveBeenCalledOnce();

  await screen.findByText("mock lobster", {
    timeout: 5,
    interval: 1,
  });
});
