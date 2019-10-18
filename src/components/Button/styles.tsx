import styled from 'styled-components'
import { LinkProps } from './LinkAsButton'
import { BtnProps } from './index'
import { padding, margin } from 'polished'

type Props = LinkProps & BtnProps

const handleBtnType = (modifier, theme) => {
	switch (modifier) {
		case 'outline':
			return {
				color: theme.palette.brandRed,
				background: `transparent`,
				'&:hover': {
					background: theme.palette.brandRedLight,
					color: theme.palette.brandWhite
				}
			}

		case 'outlineBlack':
			return {
				color: theme.palette.brandBlack,
				borderColor: theme.palette.brandBlack,
				background: `transparent`,
				'&:hover': {
					background: theme.palette.brandBlack,
					color: theme.palette.brandWhite
				}
			}
		case 'black':
			return {
				color: theme.palette.brandWhite,
				background: theme.palette.brandBlack,
				'&:hover': {
					background: theme.palette.brandBlackLight
				}
			}
		default:
			return {
				color: theme.palette.brandWhite,
				background: theme.palette.brandRed,
				borderColor: theme.palette.brandRed,
				'&:hover': {
					background: theme.palette.brandRedDark
				}
			}
	}
}

const SCButton = styled.button<Props>(({ theme, modifier }) => ({
	display: `initial`,
	whiteSpace: `nowrap`,
	textAlign: `center`,
	verticalAlign: `bottom`,
	color: theme.palette.brandWhite,
	...padding(
		theme.variables.whitespaceSmallLess,
		theme.variables.whitespaceLargeBase
	),
	...margin(theme.variables.whitespaceSmallLess, null, null),
	border: `1px solid`,
	outline: `none`,
	borderRadius: theme.variables.borderRadiusXLarge,
	fontFamily: 'IBM Plex Mono',
	fontSize: theme.typography.eta,
	cursor: 'pointer',
	transition: 'backgroundColor 0.2s ease',
	...handleBtnType(modifier, theme),
	textDecoration: 'none'
}))

export { SCButton }
