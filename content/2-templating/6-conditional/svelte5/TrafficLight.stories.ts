import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import TrafficLight from "./TrafficLight.svelte";

const meta = {
  title: "Svelte5/2-templating/6-conditional",
  component: TrafficLight,
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
  decorators: [withActions],
} satisfies Meta<TrafficLight>;

export default meta;

export const ConditionalExample: StoryObj<typeof meta> = {};
