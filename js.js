const path = require('path')
const fs = require('fs')
const changeTime = require('change-file-time')

const directoryPath = path.join(__dirname, 'JPG_Tintin_test');
console.log(directoryPath)

let fileTimer = (file, timer) => {
	// setTimeout(() => {
		// let newName = file
		// 				.replace('_Image_0001.jpg', '.jpg')
		// 				.replace('Page_', '')
		// console.log(newName)
		let oldPath = `${directoryPath}/${file}`
		let newPath = `${directoryPath}/tintin_${file}`

		fs.rename(oldPath, newPath, err => err)
		changeTime(newPath, err => err)

		console.log(newPath)
	// }, timer * 0)
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




