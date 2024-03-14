import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import PickPill from "./PickPill.svelte";

const meta = {
  title: "Svelte5/5-form-input/3-radio",
  component: PickPill,
  decorators: [withActions],
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["mousedown input", "mouseup input", "click input"],
    },
  },
} satisfies Meta<PickPill>;

export default meta;

export const Profile: StoryObj<typeof meta> = {};
