import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { Header } from '../_shared'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
   font-family: 'IBM Plex Sans', sans-serif;
  }
`

const Layout = ({ children, title }) => (
	<>
		<GlobalStyle />
		<div>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,500,600|IBM+Plex+Sans:300,300i,400,400i,500,500i,600,600i&display=swap"
					rel="stylesheet"
				/>
				<title>{title}</title>
			</Head>
			<Header />
			{children}
		</div>
	</>
)
export default Layout
