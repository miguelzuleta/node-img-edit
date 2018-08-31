const path = require('path')
const fs = require('fs')
const changeTime = require('change-file-time')

const directoryPath = path.join(__dirname, 'JPG_Mafalda');
console.log(directoryPath)

let fileTimer = (file, timer) => {
	// Quino - Toda Mafalda_Page_001_Image_0001
	setTimeout(() => {
		let newName = file
						.replace('Quino - Toda Mafalda_Page_', 'mafalda_')
						.replace('_Image_0001', '')

		let oldPath = `${directoryPath}/${file}`
		let newPath = `${directoryPath}/${newName}`

		fs.rename(oldPath, newPath, err => err)
		changeTime(newPath, err => err)

		console.log(newPath)

	}, timer * 61000)
}

fs.readdir(directoryPath, function (err, files) {
	if(err) {
		console.log(err)
		return
	}

	files.reverse().forEach((file, index) => {
		fileTimer(file, index)
	})

})




