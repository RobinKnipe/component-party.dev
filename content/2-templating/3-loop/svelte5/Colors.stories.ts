import type { Meta, StoryObj } from "@storybook/svelte";
import Colors from "./Colors.svelte";

const meta = {
  title: "Svelte5/2-templating/3-loop",
  component: Colors,
  tags: ["autodocs"],
} satisfies Meta<Colors>;

export default meta;

export const LoopExample: StoryObj<typeof meta> = {};
