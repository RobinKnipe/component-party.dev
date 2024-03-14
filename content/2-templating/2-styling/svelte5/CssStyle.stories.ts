import type { Meta, StoryObj } from "@storybook/svelte";
import CssStyle from "./CssStyle.svelte";

const meta = {
  title: "Svelte5/2-templating/2-styling",
  component: CssStyle,
  tags: ["autodocs"],
} satisfies Meta<CssStyle>;

export default meta;

/**
 * # Various CSS options...
 *
 * - from a standard CSS file imported in the svelte component script (`import ./CssStyle.css`)
 * - using the HTML inline `style` attribute
 * - from the standard svelte component level `style` tag
 */
export const CssStyleExample: StoryObj<typeof meta> = {};
