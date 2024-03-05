import type { Meta, StoryObj } from "@storybook/svelte";
import HelloWorld from "./HelloWorld.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Svelte5/2-templating/1-minimal-template",
  component: HelloWorld,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
} satisfies Meta<HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TemplateExample: Story = {};
