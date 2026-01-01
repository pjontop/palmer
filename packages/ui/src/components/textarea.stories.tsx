import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "./textarea.js"

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Hello",
  },
}
