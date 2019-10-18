import React from 'react'
import { SCFAQWrapper } from './styles'
import SingleFAQ, { FAQProps } from './singleFAQ'

export interface Props {
	questions: Array<FAQProps>
}

const FAQ: React.FunctionComponent<Props> = ({ questions }) => {
	return (
		<SCFAQWrapper>
			{questions.map(q => (
				<SingleFAQ title={q.title} content={q.content} />
			))}
		</SCFAQWrapper>
	)
}

export default FAQ
