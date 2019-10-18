import React from 'react'
import { H4 } from 'Typography'
import SingleTextGroupWrap from './styles'

export interface Props {
	title: string
	content: string
}

const TextGroup: React.FunctionComponent<Props> = ({ title, content }) => {
	return (
		<SingleTextGroupWrap>
			<H4>{title}</H4>
			{content}
		</SingleTextGroupWrap>
	)
}

export default TextGroup
