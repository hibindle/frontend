import React from 'react'
import Head from 'next/head'
import { Header } from 'bindle'

const Layout = ({ children, title }) => (
	<>
		<div>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,500,600|IBM+Plex+Sans:300,300i,400,400i,500,500i,600,600i&display=swap"
					rel="stylesheet"
				/>
				<title>{title}</title>
			</Head>
			<Header />
			{/* <Button>Hi</Button> */}
			{children}
		</div>
	</>
)
export default Layout
