const path = require('path')

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]]
		}
	})
	config.resolve.extensions.push(
		'.ts',
		'.tsx',
		'.js',
		'.json',
		'.png',
		'.gif',
		'.jpg',
		'.svg'
	)
	config.resolve.alias = {
		...config.resolve.alias,
		'@components': path.resolve(__dirname, '../components'),
		'@icons': path.resolve(__dirname, '../icons'),
		'@illustrations': path.resolve(__dirname, '../illustrations'),
		Typography: path.resolve(__dirname, '../Typography/index.tsx'),
		variables: path.resolve(__dirname, '../variables/index.ts'),
		'~': path.resolve(__dirname, '../')
	}
	return config
}
