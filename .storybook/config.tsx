import React, { useContext } from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyle'
import './storybook.css'
import Theme from '../src/theme'
import { ThemeProvider } from 'styled-components'
const req = require.context('..', true, /.stories.tsx$/)

function loadStories() {
	req.keys().forEach(req)
}

addDecorator(story => (
	<ThemeProvider theme={Theme}>
		<>
			<GlobalStyle />
			{story()}
		</>
	</ThemeProvider>
))

configure(loadStories, module)
