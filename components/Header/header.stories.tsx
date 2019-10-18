import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '@components/Button'

const button = <Button onClick={action('clicked')}>Sign Up</Button>
const navItems = (
	<>
		<span>Hi</span>
		<span>secondary</span>
	</>
)

storiesOf('Header', module).add('Default', () => (
	<div className="BNDSB-wrapper">
		{/* <Header navItems={navItems} btn={button} /> */}
	</div>
))
