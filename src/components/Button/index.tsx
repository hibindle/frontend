import React from 'react'
import { SCButton } from './styles'

export interface BtnProps {
	onClick?: any
	modifier?: string
}

const Button: React.FunctionComponent<BtnProps> = ({
	children,
	onClick,
	modifier
}) => {
	return (
		<SCButton modifier={modifier} onClick={onClick}>
			{children}
		</SCButton>
	)
}

export default Button
