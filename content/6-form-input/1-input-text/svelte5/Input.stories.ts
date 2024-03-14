import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import InputHello from "./InputHello.svelte";

const meta = {
  title: "Svelte5/5-form-input/1-input-text",
  component: InputHello,
  decorators: [withActions],
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["keydown input", "keyup input", "keypress input"],
    },
  },
} satisfies Meta<InputHello>;

export default meta;

export const Profile: StoryObj<typeof meta> = {};
