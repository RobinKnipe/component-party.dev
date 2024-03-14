import type { Meta, StoryObj } from "@storybook/svelte";
import Name from "./Name.svelte";

const meta = {
  title: "Svelte5/1-reactivity/2-update-state",
  component: Name,
  tags: ["autodocs"],
} satisfies Meta<Name>;

export default meta;

export const UpdatedStateExample: StoryObj<typeof meta> = {};
