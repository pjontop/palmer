import type { Meta, StoryObj } from "@storybook/react-vite"
 
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./command.js"

const meta: Meta<typeof Command> = {
    title: "Components/Command",
    component: Command,
    tags: ["autodocs"],
    parameters: {
        featured: true,
        docs: {
            description: {
                component: "Command component for building command palettes and searchable dropdowns.",
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Command>