const path = require('path')

module.exports = {
	webpack: (config, { dev }) => {
		config.resolve.alias['bindle'] = `@bindle/library`
		if (dev) {
			config.resolve.alias['bindle'] = path.join(__dirname, '_shared')
		}
		return config
	}
}
