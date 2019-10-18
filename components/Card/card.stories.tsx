import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './index'
import ManChart from '@illustrations/WomenTrash'

const styles = {
	maxWidth: `900px`,
	display: `flex`,
	margin: '0 auto',
	padding: '30px',
	justifyContent: `space-around`
}

storiesOf('Card', module).add('Default', () => (
	<div className="BNDSB-page-wrapper">
		<div style={styles}>
			<Card maxWidth={350}>
				<ManChart />
			</Card>
			<Card>Hi there</Card>
			<Card>Hi there</Card>
		</div>
	</div>
))
