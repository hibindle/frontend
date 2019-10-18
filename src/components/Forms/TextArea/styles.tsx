import styled from 'styled-components'
import { Props } from './index'
import { padding } from 'polished'

const SCTextArea = styled.textarea<Props>(({ theme, resizeable }) => ({
	border: `1px solid ${theme.palette.brandBlack}`,
	borderRadius: theme.variables.borderRadiusBase,
	...padding(
		theme.variables.whitespaceSmall,
		theme.variables.whitespaceSmall
	),
	resize: resizeable ? 'both' : 'none'
}))

export { SCTextArea }
