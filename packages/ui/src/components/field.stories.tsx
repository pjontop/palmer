import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldLabel, FieldContent } from "./field.js"
import React from "react"

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel>Label</FieldLabel>
      <FieldContent>Content</FieldContent>
    </Field>
  ),
}
