import { DefaultTheme } from 'styled-components'
import { palette } from './palette'
import { variables } from './variables'
import { typography } from './typography'

export const theme: DefaultTheme = {
	variables,
	palette,
	typography
}

export default theme

export { palette, variables, typography }
