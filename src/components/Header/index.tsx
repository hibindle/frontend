import React from 'react'
import { SCHeader, SCHeaderContent } from './styles'
import Logo from '@icons/Logo'

interface Props {
	navItems: any
	btn: any
}

const Header: React.FunctionComponent<Props> = ({ navItems, btn }) => {
	return (
		<SCHeader>
			<Logo width={'300px'} />
			<SCHeaderContent>
				{navItems} {btn}
			</SCHeaderContent>
		</SCHeader>
	)
}

export default Header
