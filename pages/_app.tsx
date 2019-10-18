import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CopyProvider } from '../src/copy2context'
import copy from '../src/copy/copy'
import Theme from '../src/theme'
import GlobalStyle from '../src/GlobalStyle'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={Theme}>
				<CopyProvider copy={copy}>
					<GlobalStyle />
					<Component {...pageProps} />
				</CopyProvider>
			</ThemeProvider>
		)
	}
}
