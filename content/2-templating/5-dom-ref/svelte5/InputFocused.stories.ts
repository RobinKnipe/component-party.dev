import type { Meta, StoryObj } from "@storybook/svelte";
import InputFocused from "./InputFocused.svelte";

const meta = {
  title: "Svelte5/2-templating/5-dom-ref",
  component: InputFocused,
  tags: ["autodocs"],
} satisfies Meta<InputFocused>;

export default meta;

export const FocusableExample: StoryObj<typeof meta> = {};
