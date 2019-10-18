import styled from 'styled-components'
interface TypeProps {
	color?: string
}

const sharedTypeStyles = (color, theme) => {
	return {
		color: color ? theme.palette[color] : theme.palette.copyDark,
		fontFamily: 'IBM Plex Sans'
	}
}

const H1 = styled('h1')<TypeProps>(({ theme, color }) => ({
	fontSize: theme.typography.giga,
	...sharedTypeStyles(color, theme)
}))

const H2 = styled('h2')<TypeProps>(({ theme, color }) => ({
	fontSize: theme.typography.kilo,
	...sharedTypeStyles(color, theme)
}))

const H3 = styled('h3')<TypeProps>(({ theme, color }) => ({
	fontSize: theme.typography.giga,
	...sharedTypeStyles(color, theme)
}))

const H4 = styled('h4')<TypeProps>(({ theme, color }) => ({
	fontSize: theme.typography.kilo,
	...sharedTypeStyles(color, theme)
}))

const P = styled('p')<TypeProps>(({ theme, color }) => ({
	fontSize: theme.typography.zeta,
	...sharedTypeStyles(color, theme),
	textAlign: `left`
}))

const Bold = styled(P)<TypeProps>(() => ({
	fontWeight: 500
}))

const Light = styled(P)<TypeProps>(() => ({
	fontWeight: 300
}))

const A = styled('a')<TypeProps>(({ theme, color }) => ({
	fontSize: theme.typography.zeta,
	...sharedTypeStyles(color, theme),
	borderBottom: `2px solid ${theme.palette.brandRed}`
}))

export { H1, H2, H3, H4, P, Bold, Light, A }
