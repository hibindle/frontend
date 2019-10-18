import React from 'react'
import { H3 } from 'Typography'
import IconTextWrap from './styles'

export interface Props {
	text: string
	icon: React.ReactNode
}

const IconText: React.FunctionComponent<Props> = ({ text, icon }) => {
	return (
		<IconTextWrap>
			<H3>{text}</H3>
			{icon}
		</IconTextWrap>
	)
}

export default IconText
