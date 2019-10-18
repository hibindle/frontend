import styled from 'styled-components'
import { padding } from 'polished'

const SCInput = styled.input(({ theme }) => ({
	border: `1px solid ${theme.palette.brandBlack}`,
	borderRadius: theme.variables.borderRadiusBase,
	...padding(theme.variables.whitespaceSmall, theme.variables.whitespaceSmall)
}))

export { SCInput }
