import type { Meta, StoryObj } from "@storybook/react-vite"
import { Combobox, ComboboxInput, ComboboxList, ComboboxItem, ComboboxContent, ComboboxTrigger } from "./combobox.js"
import React from "react"

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Search..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="one">One</ComboboxItem>
          <ComboboxItem value="two">Two</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
