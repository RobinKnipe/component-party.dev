import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import IsAvailable from "./IsAvailable.svelte";

const meta = {
  title: "Svelte5/5-form-input/1-checkbox",
  component: IsAvailable,
  decorators: [withActions],
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["mousedown input", "mouseup input", "click input"],
    },
  },
} satisfies Meta<IsAvailable>;

export default meta;

export const Profile: StoryObj<typeof meta> = {};
