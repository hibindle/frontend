import styled from 'styled-components'
import { Props } from './index'
import { padding } from 'polished'

const SCCardBase = styled.article<Props>(({ theme, maxWidth }) => ({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	border: `1px solid ${theme.palette.brandBlackLight}`,
	borderRadius: theme.variables.borderRadiusBase,
	boxShadow: theme.variables.cardShadow,
	...padding(
		theme.variables.whitespaceSmallLess,
		theme.variables.whitespaceLargeBase
	),
	backgroundColor: theme.palette.brandWhite,
	maxWidth: maxWidth ? `${maxWidth}px` : 'none'
}))

export default SCCardBase
