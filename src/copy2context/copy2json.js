const yaml = require('js-yaml')
const fs = require('fs')
const copyDir = 'copy'
let output = null
try {
	fs.readdir(copyDir, (err, files) => {
		if (err) {
			console.error(`Sorry! Couldn't read files`)
			console.error(err)
			return
		}

		files.forEach(file => {
			const yamlData = yaml.safeLoad(
				fs.readFileSync(`${copyDir}/${file}`, 'utf8')
			)
			const prefix = file.split('.')[0]
			const newObject = { [prefix]: yamlData }
			output = { ...output, ...newObject }
		})
		const exportedObject = `export default ${JSON.stringify(
			output,
			null,
			4
		)}`

		fs.writeFileSync(`copy/copy.js`, exportedObject)
	})
} catch (e) {
	console.log(e)
}
