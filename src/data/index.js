import config from '../config/'

export function getMainMenu() {
	return require('./main-menu.json')
}

export function getRandomImage() {
	return config.apiUrl+'/random-destination-image?site='+config.site.slug
	/*
	let items = require('./home-images.json')
	let index = Math.floor(Math.random()*items.length)
	let item = items[index]
	console.log(item)
	return item
	*/
}

const strings  = require('./strings.json')
export { strings }