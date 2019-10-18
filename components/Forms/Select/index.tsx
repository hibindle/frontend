import React from 'react'
import { camelCase } from 'lodash'
import { FieldWrap } from '../styles'
import { SCSelect, SCOption } from './styles'

interface OptionProps {
	value: string
	label: string
	id?: string
}

export interface Props {
	name: string
	options: Array<OptionProps>
}

export const Select: React.FunctionComponent<Props> = ({ name, options }) => {
	return (
		<FieldWrap>
			<SCSelect id={camelCase(name)} name={camelCase(name)}>
				{options.map(option => (
					<SCOption value={option.value}>{option.label}</SCOption>
				))}
			</SCSelect>
		</FieldWrap>
	)
}

export default Select
