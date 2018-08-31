const path = require('path')
const fs = require('fs')
const changeTime = require('change-file-time')

const directoryPath = path.join(__dirname, 'JPG_Asterix_test');
console.log(directoryPath)

let fileTimer = (file, timer, length) => {
	setTimeout(() => {
		let newName = file.replace('Page_', '').replace('_Image_0001', '')

		let oldPath = `${directoryPath}/${file}`
		let newPath = `${directoryPath}/${newName}`

		fs.rename(oldPath, newPath, err => err)
		changeTime(newPath, err => err)

		console.log(`${timer + 1} of ${length}`)

	}, timer * 1000)
}

fs.readdir(directoryPath, function (err, files) {
	if(err) {
		console.log(err)
		return
	}

	files.forEach((file, index) => {
		fileTimer(file, index, files.length)
	})

})
