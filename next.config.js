const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
})

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	webpack: config => {
		if (config.resolve.plugins) {
			config.resolve.plugins.push(new TsconfigPathsPlugin())
		} else {
			config.resolve.plugins = [new TsconfigPathsPlugin()]
		}
		config.resolve.alias['copy'] = path.join(__dirname, './src/copy')

		return config
	}
})
