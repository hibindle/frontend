import React from 'react'
import { camelCase } from 'lodash'
import { FieldWrap, SCLabel } from '../styles'
import { SCTextArea } from './styles'

export interface Props {
	name: string
	resizeable?: boolean
}

export const TextArea: React.FunctionComponent<Props> = ({
	name,
	resizeable = false
}) => {
	return (
		<FieldWrap>
			<SCLabel htmlFor={camelCase(name)}>{name}</SCLabel>
			<SCTextArea
				id={camelCase(name)}
				name={camelCase(name)}
				resizeable={resizeable}
			/>
		</FieldWrap>
	)
}

export default TextArea
