import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>XY</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <Avatar.Fallback>SM</Avatar.Fallback>
      </Avatar>
      <Avatar size="md">
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar>
      <Avatar size="lg">
        <Avatar.Fallback>LG</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar color="default">
        <Avatar.Fallback>DF</Avatar.Fallback>
      </Avatar>
      <Avatar color="accent">
        <Avatar.Fallback>AC</Avatar.Fallback>
      </Avatar>
      <Avatar color="success">
        <Avatar.Fallback>SC</Avatar.Fallback>
      </Avatar>
      <Avatar color="warning">
        <Avatar.Fallback>WR</Avatar.Fallback>
      </Avatar>
      <Avatar color="danger">
        <Avatar.Fallback>DG</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <Avatar.Image
          alt="User avatar"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop"
        />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image
          alt="User avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop"
        />
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image
          alt="User avatar"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop"
        />
        <Avatar.Fallback>MK</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image
          alt="Broken image"
          src="https://invalid-url-to-show-fallback.com/image.jpg"
        />
        <Avatar.Fallback>NA</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {/* Custom size with Tailwind classes */}
      <Avatar className="size-16">
        <Avatar.Fallback>XL</Avatar.Fallback>
      </Avatar>

      {/* Square avatar */}
      <Avatar className="rounded-lg">
        <Avatar.Fallback className="rounded-lg">SQ</Avatar.Fallback>
      </Avatar>

      {/* Gradient border */}
      <Avatar className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-0.5">
        <div className="size-full rounded-full bg-background p-0.5">
          <Avatar.Fallback className="border-none">GB</Avatar.Fallback>
        </div>
      </Avatar>

      {/* Status indicator */}
      <div className="relative">
        <Avatar>
          <Avatar.Fallback>ON</Avatar.Fallback>
        </Avatar>
        <span className="absolute right-0 bottom-0 size-3 rounded-full bg-green-500 ring-2 ring-background" />
      </div>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {/* Basic avatar group */}
      <div className="flex -space-x-2">
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback>KW</Avatar.Fallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback>EC</Avatar.Fallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback>MB</Avatar.Fallback>
        </Avatar>
      </div>

      {/* Avatar group with counter */}
      <div className="flex -space-x-2">
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback>KW</Avatar.Fallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback>EC</Avatar.Fallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <Avatar.Fallback className="text-xs">+5</Avatar.Fallback>
        </Avatar>
      </div>
    </div>
  ),
};
