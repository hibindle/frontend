import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { CopyProvider } from '../src/copy2context'
import copy from '../src/copy/copy'
import Theme from '../src/theme'
import GlobalStyle from '../src/GlobalStyle'
import { H1, H2, H3, H4, P } from 'Typography'

const Wrapper = props => <main style={{ padding: '20px', backgroundColor: 'tomato' }} {...props} />

const components = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	p: P,
	Wrapper
}

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={Theme}>
				<MDXProvider components={components}>
					<CopyProvider copy={copy}>
						<GlobalStyle />
						<Component {...pageProps} />
					</CopyProvider>
				</MDXProvider>
			</ThemeProvider>
		)
	}
}
