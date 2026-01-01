import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "./separator.js"

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Separator />,
}
