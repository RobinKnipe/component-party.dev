import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import AnswerButton from "./AnswerButton.svelte";
import App from "./App.svelte";

const meta = {
  title: "Svelte5/4-component-composition/2-emit-to-parent",
  component: App,
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<App>;

export default meta;

export const ParentApp: StoryObj<typeof meta> = {};

export const ChildComponent: StoryObj = {
  render: () => ({
    Component: AnswerButton,
    props: {
      onYes: () => window.alert("Yes clicked"),
      onNo: () => window.alert("No clicked"),
    },
  }),
  argTypes: {
    onYes: { action: "clicked" },
    onNo: { action: "clicked" },
  },
};
