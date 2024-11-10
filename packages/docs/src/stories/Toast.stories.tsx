import { Box, Button, CheckboxProps, Toast, ToastProps } from '@anderson-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Form/Toast',
	component: Toast,
	decorators: [
		(Story) => {
			const [open, setOpen] = useState(false)
			return (
				<Box 
					as="label" 
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
				>
					<Button onClick={() => setOpen((state) => !state)}>Push Toast</Button>
					{Story({
						args: {
							open,
							title: 'Toast Title',
							description: 'Toast Title Description'
						}
					})}
				</Box>
			)
		}
	],
} as Meta<ToastProps>

export const Primary: StoryObj<CheckboxProps> = {}