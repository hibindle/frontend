import React, { useState } from 'react'
import { SCFAQ, FAQContent, FAQTitle } from './styles'
import Plus from '@icons/Plus'
import Minus from '@icons/Minus'

export interface FAQProps {
	title: string
	content: string
}

const FAQ: React.FunctionComponent<FAQProps> = ({ title, content }) => {
	const [isOpen, setOpen] = useState(false)
	const icon = isOpen ? <Plus /> : <Minus />

	return (
		<SCFAQ onClick={() => setOpen(!isOpen)}>
			<FAQTitle>
				{title}
				{icon}
			</FAQTitle>
			{isOpen && <FAQContent>{content}</FAQContent>}
		</SCFAQ>
	)
}

export default FAQ
