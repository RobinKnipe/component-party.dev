import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import FunnyButton from "./FunnyButton.svelte";
import App from "./App.svelte";

const meta = {
  title: "Svelte5/4-component-composition/3-slot",
  component: App,
  decorators: [withActions],
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} satisfies Meta<App>;

export default meta;

export const ParentApp: StoryObj<typeof meta> = {};

export const RenderChildren: StoryObj = {
  render: () => ({
    Component: FunnyButton,
    props: {
      children: "Ho to create a snippet!?!?",
    },
  }),
};
