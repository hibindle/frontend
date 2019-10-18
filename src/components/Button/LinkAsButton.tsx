import React from 'react'
import { SCButton } from './styles'

export interface LinkProps {
	href?: string
	modifier?: string
}

const LinkAsButton: React.FunctionComponent<LinkProps> = ({
	children,
	href,
	modifier
}) => {
	return (
		<SCButton as="a" modifier={modifier} href={href}>
			{children}
		</SCButton>
	)
}

export default LinkAsButton
