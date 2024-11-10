import * as Tooltip from '@radix-ui/react-tooltip';
import { styled } from "../../styles";

export const IconButton = styled('button', {
	all: 'unset',
	
	fontFamily: 'inherit',
	borderRadius: '100%',
	height: '$10',
	width: '$10',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '$ignite700',
	backgroundColor: '$white',
	boxShadow: '0 $1 $3 $ignite500',
	userSelect: 'none',

	'&:hover': {
		backgroundColor: '$ignite300',

		'svg': {
			color: '$white',	
		}
	},

	'&:focus': {
		boxShadow: '0 0 0 2px $black'
	}
})

export const TooltipContainer = styled(Tooltip.Content, {
	backgroundColor: '$gray900',
	padding: '$3 $4',
	borderRadius: '$sm',
	border: 'none',
})

export const TooltipContent = styled('h1', {
	fontFamily: '$default',
	fontSize: '$sm',
	lineHeight: '$short',
	fontWeight: '$medium',
	color: '$gray100',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
	border: 'none',
	fill: '$gray900',
	width: '$4',
	height: '$2'	
})