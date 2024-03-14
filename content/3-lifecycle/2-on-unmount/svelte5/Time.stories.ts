import type { Meta, StoryObj } from "@storybook/svelte";
import App from "./App.svelte";

const meta = {
  title: "Svelte5/3-lifecycle/2-on-unmount",
  component: App,
  tags: ["autodocs"],
} satisfies Meta<App>;

export default meta;

/**
 * # Tidy-up interval on unmount
 *
 * Click the Toggle button to remove the Time component and trigger the unmount
 * process, or add it back into the document again.
 */
export const OnUnmountExample: StoryObj<typeof meta> = {};
