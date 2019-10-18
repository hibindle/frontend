import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { HeroWithContent } from '@components/HeroWithContent'
import { H2, P } from 'Typography'
import Button from '@components/Button'

const content = (
	<div>
		<H2>Join us today</H2>
		<P>We need you or we will die a horrible horrible death</P>
		<Button onClick={action('clicked')}>Submit Now</Button>
	</div>
)

const imgUrl = `https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80`

storiesOf('Hero With Content', module)
	.add('Content Right', () => (
		<div className="BNDSB-hero-wrapper">
			<HeroWithContent
				contentPosition="right"
				content={content}
				image={imgUrl}
			></HeroWithContent>
		</div>
	))
	.add('Content Left', () => (
		<div className="BNDSB-hero-wrapper">
			<HeroWithContent
				contentPosition="left"
				content={content}
				image={imgUrl}
			></HeroWithContent>
		</div>
	))
	.add('Content Bottom', () => (
		<div className="BNDSB-hero-wrapper">
			<HeroWithContent
				contentPosition="bottom"
				content={content}
				image={imgUrl}
			></HeroWithContent>
		</div>
	))
