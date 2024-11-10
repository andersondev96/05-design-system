import * as TooltipReact from "@radix-ui/react-tooltip";
import { Plus } from "phosphor-react";
import { IconButton, TooltipArrow, TooltipContainer, TooltipContent } from "./styles";

export interface TooltipProps {
	content: string
	open?: boolean
}

export function Tooltip({ content, open }: TooltipProps) {
	return (
		<TooltipReact.Provider>
			<TooltipReact.Root open={open}>
				<TooltipReact.Trigger asChild>
					<IconButton>
						<Plus />
					</IconButton>
				</TooltipReact.Trigger>
				<TooltipReact.Portal>
					<TooltipContainer>
						<TooltipArrow colorInterpolation={'#fff'} color="#ffff" />
						<TooltipContent>{content}</TooltipContent>
					</TooltipContainer>
				</TooltipReact.Portal>
			</TooltipReact.Root>
		</TooltipReact.Provider>
	)
}

Tooltip.displayName = 'Tooltip'