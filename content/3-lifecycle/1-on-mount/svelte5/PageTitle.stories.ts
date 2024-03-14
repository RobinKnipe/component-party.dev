import type { Meta, StoryObj } from "@storybook/svelte";
import PageTitle from "./PageTitle.svelte";

const meta = {
  title: "Svelte5/3-lifecycle/1-on-mount",
  component: PageTitle,
} satisfies Meta<PageTitle>;

export default meta;

export const OnMountExample: StoryObj<typeof meta> = {};
