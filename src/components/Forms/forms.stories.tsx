import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input, Select, TextArea } from './index'

const options = [
	{
		label: 'Isaac',
		value: 'isaac'
	},
	{
		label: 'Hazel',
		value: 'hazel'
	}
]

storiesOf('Forms', module).add('Inputs', () => (
	<div className="BNDSB-comp-wrapper">
		<Input type="text" name="First Name" />
		<Input type="email" name="Email" />
		<Select name="Location" options={options} />
		<TextArea name="Message" resizeable />
		<TextArea name="Complaint" />
	</div>
))
