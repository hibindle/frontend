import React from 'react'
import StyledFooter from './styles'

interface Props {
	children?: any
}

export const Footer: React.FunctionComponent<Props> = ({ children }) => {
	return <StyledFooter>{children}</StyledFooter>
}

export default Footer
