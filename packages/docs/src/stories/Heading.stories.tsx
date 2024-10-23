import { Heading, HeadingProps } from '@anderson-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Typography/Heading',
	component: Heading,

	args: {
		children: 'Custom title',
		size: 'md',
	},

	argTypes: {
		size: {
			options: ['sm','md','lg','2xl','4xl','5xl','6xl'],
			control: {
				type: 'inline-radio',
			}
		},
	},
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const Customtag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
		size: 'md',
	},
	parameters: {
		docs: {
			description: {
				story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
			}
		}
	}
}