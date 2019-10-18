import React from 'react'
import CardBase from './styles'

export interface Props {
	maxWidth?: number
}

const Card: React.FunctionComponent<Props> = ({ children, maxWidth }) => {
	return <CardBase maxWidth={maxWidth}> {children}</CardBase>
}

export default Card
