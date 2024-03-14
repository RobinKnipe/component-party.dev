import type { Meta, StoryObj } from "@storybook/svelte";
import App from "./App.svelte";

const meta = {
  title: "Svelte5/7-webapp-features/2-fetch-data",
  component: App,
  tags: ["autodocs"],
} satisfies Meta<App>;

export default meta;

export const LoadFromFetch: StoryObj<typeof meta> = {};
