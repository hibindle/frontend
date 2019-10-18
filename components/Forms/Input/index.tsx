import React from 'react'
import { camelCase } from 'lodash'
import { SCInput } from './styles'
import { FieldWrap, SCLabel } from '../styles'

export interface Props {
	type: string
	name: string
	placeholder?: string
}

export const Input: React.FunctionComponent<Props> = ({
	type,
	name,
	placeholder
}) => {
	return (
		<FieldWrap>
			<SCInput
				id={camelCase(name)}
				type={type}
				name={camelCase(name)}
				placeholder={placeholder}
			/>
			<SCLabel htmlFor={camelCase(name)}>{name}</SCLabel>
		</FieldWrap>
	)
}

export default Input
