import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import ColorSelect from "./ColorSelect.svelte";

const meta = {
  title: "Svelte5/5-form-input/4-select",
  component: ColorSelect,
  decorators: [withActions],
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["change select"],
    },
  },
} satisfies Meta<ColorSelect>;

export default meta;

export const Profile: StoryObj<typeof meta> = {};
