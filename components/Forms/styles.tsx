import styled from 'styled-components'
import { padding } from 'polished'

const SCLabel = styled.label(({ theme }) => ({
	border: `1px`,
	position: `absolute`,
	background: theme.palette.brandWhite,
	left: `10px`,
	top: `-9px`,
	fontSize: theme.typography.iota,
	...padding(0, theme.variables.whitespaceSmall)
}))

const FieldWrap = styled('div')(({}) => ({
	display: `flex`,
	position: `relative`
}))

export { FieldWrap, SCLabel }
