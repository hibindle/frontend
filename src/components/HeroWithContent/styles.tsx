import styled from 'styled-components'
import { padding } from 'polished'
import { SCProps } from '.'

const handleImgDir = modifier => {
	switch (modifier) {
		case 'left':
			return {
				marginLeft: `auto`
			}

		case 'bottom':
			return {
				marginRight: `auto`,
				marginLeft: `auto`
			}

		default:
			return {
				marginRight: `auto`
			}
	}
}

const handleContentDir = modifier => {
	switch (modifier) {
		case 'left':
			return {
				left: 0
			}

		case 'bottom':
			return {
				bottom: 0,
				top: `auto`,
				transform: `translateY(50%)`
			}
		default:
			return {
				right: 0
			}
	}
}

export const SCHeroWithContent = styled('header')<SCProps>(() => ({
	display: `flex`,
	position: `relative`,
	alignitems: `center`,
	justifyContent: `center`,
	width: `100%`
}))

export const SCImageWrap = styled('img')<SCProps>(
	({ theme, contentPosition }) => ({
		width: theme.variables.grid10col,
		...handleImgDir(contentPosition)
	})
)

export const SCContentWrap = styled('div')<SCProps>(
	({ theme, contentPosition }) => ({
		position: `absolute`,
		width: `theme.variables.grid4col`,
		background: `theme.palette.brandWhite`,
		...padding(theme.variables.whitespaceSmallBase),
		borderRadius: theme.variables.borderRadiusLarge,
		top: `50%`,
		transform: `translateY(-50%)`,
		...handleContentDir(contentPosition)
	})
)
