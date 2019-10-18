import React from 'react'
import { storiesOf } from '@storybook/react'
import FAQ from './index'

const questions = [
	{
		title: 'hi',
		content: 'hi'
	}
]

storiesOf('FAQ', module).add('Default', () => (
	<div className="BNDSB-page-wrapper">
		<FAQ questions={questions} />
	</div>
))
