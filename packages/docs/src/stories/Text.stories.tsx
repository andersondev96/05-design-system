import { Text, TextProps } from '@anderson-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Typography/Text',
	component: Text,

	args: {
		size: 'md',
		children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur molestias architecto quod harum aspernatur labore, magnam neque fugit rem debitis ex fuga deserunt repudiandae at. Culpa perferendis voluptatem expedita hic.'
	},
	argTypes: {
		size: {
			options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
			control: {
				type: 'inline-radio',
			}
		},
	}
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Customtag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	}
}