import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Button from '@components/Button'
import links from '../data/navItems'


const HeaderButton = <Button onClick={() => console.warn('button click')}>Learn More</Button>

const navItems = links.map(item => <Link href={item.link}>{item.title}</Link>)

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
			<Header navItems={navItems} btn={HeaderButton} />
			{children}
		</div>
	</>
)
export default Layout
