import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputGroup, InputGroupInput, InputGroupButton, InputGroupAddon } from "./input-group.js"
import React from "react"

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Type..." />
      <InputGroupAddon>
        <InputGroupButton>Go</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
