import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Button } from "./button.js";
import { ArrowUp, ArrowUpRight, Circle } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    featured: true,
    docs: {
      description: {
        component: "Displays a button or a component that looks like a button.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Button variant="outline" size="icon-sm" aria-label="Up small">
        <ArrowUp />
      </Button>
      <Button variant="outline" size="icon" aria-label="Up">
        <ArrowUpRight />
      </Button>
      <Button variant="outline" size="icon-lg" aria-label="Up large">
        <Circle />
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button variant="outline" size="sm">
      <ArrowUpRight className="-ml-1 mr-2" /> New Branch
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button size="sm" variant="outline" disabled>
      {/* spinner has inline-block sizing; add margin to separate */}
      <svg aria-hidden viewBox="0 0 24 24" className="animate-spin size-4 mr-2 inline-block" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-20" />
        <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      Submit
    </Button>
  ),
};
