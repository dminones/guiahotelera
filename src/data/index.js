export function getMainMenu() {
	return require('./main-menu.json')
}

export function getRandomImage() {
	let items = require('./home-images.json')
	let index = Math.floor(Math.random()*items.length)
	let item = items[index]
	console.log(item)
	return item
}