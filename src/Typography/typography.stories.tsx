import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, P, Bold, Light, A } from 'Typography'

storiesOf('Typography', module).add('Type', () => (
	<div className="BNDSB-wrapper">
		<H1>H1 Hi there</H1>
		<H2>H2 Hi there</H2>
		<Bold>This is some bold paragraph text</Bold>
		<P>This is some regular paragraph text</P>
		<Light>This is some light paragraph text</Light>
		<A>This is an inline link</A>
	</div>
))
