import type { Meta, StoryObj } from "@storybook/svelte";
import UserProfile from "./UserProfile.svelte";
import App from "./App.svelte";

const meta = {
  title: "Svelte5/4-component-composition/1-props",
  component: UserProfile,
  tags: ["autodocs"],
} satisfies Meta<UserProfile>;

export default meta;

export const PropsExample: StoryObj<typeof meta> = {
  args: {
    name: "Eponymous",
    age: 42,
    favouriteColors: ["red", "blue", "green"],
    isAvailable: false,
  },
  argTypes: {
    favouriteColors: {
      control: "multi-select",
      options: ["red", "blue", "green", "yellow", "purple", "orange"],
    },
  },
};

export const ComposedExample: StoryObj = {
  render: () => App,
  argTypes: {},
};
