import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
   fontFamily: 'IBM Plex Sans', sans-serif!important;
  }
`

export default GlobalStyle
