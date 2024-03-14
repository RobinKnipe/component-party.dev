import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import Counter from "./Counter.svelte";

const meta = {
  title: "Svelte5/2-templating/4-event-click",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
  decorators: [withActions],
} satisfies Meta<Counter>;

export default meta;

export const ClickableExample: StoryObj<typeof meta> = {};
