const path = require('path')

module.exports = {
	webpack: config => {
		config.module.rules.push({
			test: /\.stories.tsx$/,
			loader: 'ignore-loader'
		})
		config.resolve.alias['@components'] = path.join(__dirname, 'components')
		config.resolve.alias['@illustrations'] = path.join(
			__dirname,
			'illustrations'
		)
		config.resolve.alias['@icons'] = path.join(__dirname, 'icons')
		config.resolve.alias['Typography'] = path.join(
			__dirname,
			'Typography/index.tsx'
		)
		config.resolve.alias['variables'] = path.join(
			__dirname,
			'variables/index.ts'
		)
		return config
	}
}
