import type { Meta, StoryObj } from "@storybook/svelte";
import DoubleCount from "./DoubleCount.svelte";

const meta = {
  title: "Svelte5/1-reactivity/3-computed-state",
  component: DoubleCount,
  tags: ["autodocs"],
} satisfies Meta<DoubleCount>;

export default meta;

export const ComputedStateExample: StoryObj<typeof meta> = {};
