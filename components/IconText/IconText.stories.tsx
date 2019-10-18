import React from 'react'
import { storiesOf } from '@storybook/react'
import IconText from './index'
import Plus from '@icons/Plus'
import Minus from '@icons/Minus'

const styles = {
	maxWidth: `900px`,
	display: `flex`,
	margin: '0 auto',
	padding: '30px',
	justifyContent: `space-around`
}

storiesOf('IconText', module).add('Default', () => (
	<div className="BNDSB-page-wrapper">
		<div style={styles}>
			<IconText text={'Isaac Martin'} icon={<Plus />} />
			<IconText text={'Isaac Martin'} icon={<Plus />} />
			<IconText text={'Isaac Martin'} icon={<Minus />} />
		</div>
	</div>
))
