import type { Meta, StoryObj } from "@storybook/react-vite"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent, SelectGroup } from "./select.js"
import React from "react"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue>Pick one</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="one">One</SelectItem>
          <SelectItem value="two">Two</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
