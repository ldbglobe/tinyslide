import Tinyslide from './Tinyslide.class.js';

//******************************************************************
// TINYSLIDE AUTOMATIC INSTANCIER 😎
//******************************************************************
window.TINYSLIDE_INSTANCES= {};

const domElements = document.querySelectorAll('.tinyslide')
domElements.forEach(function(domElement){
	let tinyslide = new Tinyslide(domElement)
	tinyslide.init()

	window.TINYSLIDE_INSTANCES[tinyslide.getId()] = tinyslide;
})

window.addEventListener('resize', function(){
	Object.entries(window.TINYSLIDE_INSTANCES).forEach(function([id,tinyslide]){
		tinyslide.redraw();
	});
});