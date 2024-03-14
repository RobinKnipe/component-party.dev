import type { Meta, StoryObj } from "@storybook/svelte";
import { withActions } from "@storybook/addon-actions/decorator";
import UserProfile from "./UserProfile.svelte";
import App from "./App.svelte";

const meta = {
  title: "Svelte5/4-component-composition/5-context",
  component: UserProfile,
  decorators: [withActions],
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} satisfies Meta<UserProfile>;

export default meta;

export const Profile: StoryObj<typeof meta> = {};

export const AppContext: StoryObj = {
  render: () => App,
  parameters: {
    docs: {
      canvas: {
        additionalActions: [
          {
            title: "Load page",
            onClick: (e) => {
              e.preventDefault();
              window.document.getElementsByTagName("iframe")[0].src = "";
            },
          },
        ],
      },
    },
  },
};
