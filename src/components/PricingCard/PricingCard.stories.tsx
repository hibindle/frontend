import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PricingCard from '@components/PricingCard'
import Button from '@components/Button'
import ManChart from '@illustrations/ManChart'

const CardButton = <Button onClick={action('clicked')}>Sign Up Now</Button>

const data = {
	price: '$49.95',
	features: ['Isaacs Home Cooking', 'Hazels beauty lessons'],
	title: 'The Home Dog'
}

storiesOf('Pricing Card', module).add('Default', () => (
	<div className="BNDSB-story-wrapper">
		<PricingCard
			maxWidth={250}
			illustration={<ManChart />}
			button={CardButton}
			data={data}
		/>
	</div>
))
