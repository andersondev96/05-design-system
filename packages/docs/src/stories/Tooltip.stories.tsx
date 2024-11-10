import { Box, CheckboxProps, Tooltip, TooltipProps } from '@anderson-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Form/Tooltip',
	component: Tooltip,
	args: {
		content: 'Add to library'
	},
} as Meta<TooltipProps>

export const Primary: StoryObj<CheckboxProps> = {
	decorators: [
		(Story) => {
			return (
				<Box 
					as="div" 
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
				>
					{Story()}
				</Box>
			)
		}
	],
}