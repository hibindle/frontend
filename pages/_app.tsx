import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CopyProvider } from '../copy2context'
import copy from '../copy/copy'
import { Theme, GlobalStyle } from "@bindle/library"


export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={Theme} >
				<CopyProvider copy={copy}>
					<GlobalStyle />
					<Component {...pageProps} />
				</CopyProvider>
			</ThemeProvider>
		)
	}
}
