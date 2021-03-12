function icon(){
	let widthscreen = window.screen.width;
	let heightscreen = window.screen.height;
	alert(`Ширина экрана ${widthscreen} пикселей. Высота экрана ${heightscreen} пикселей.`);
}

let butactive = document.querySelector('.but');

butactive.addEventListener('click', icon);