import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CopyProvider } from '../copy2context'
import copy from '../copy/copy'
// import GlobalStyle from "../components/globalStyle";
import { theme } from '../themes/default'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={theme}>
				<CopyProvider copy={copy}>
					{/* <GlobalStyle /> */}
					<Component {...pageProps} />
				</CopyProvider>
			</ThemeProvider>
		)
	}
}
