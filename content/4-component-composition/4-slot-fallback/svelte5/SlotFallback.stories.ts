import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import FunnyButton from "./FunnyButton.svelte";
import App from "./App.svelte";

const meta = {
  title: "Svelte5/4-component-composition/4-slot-fallback",
  component: FunnyButton,
  decorators: [withActions],
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} satisfies Meta<FunnyButton>;

export default meta;

export const RenderFallback: StoryObj<typeof meta> = {};

export const SpecifyChildren: StoryObj<typeof meta> = {
  render: () => ({
    props: {
      children: "Some child contents",
    },
  }),
};

export const AppWrapper: StoryObj = {
  render: App,
};
