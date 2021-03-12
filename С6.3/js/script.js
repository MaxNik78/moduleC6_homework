//Маркеры выполнения задания не удалял, закоментировал.

let ccc;

function funchat(){
	ccc = 1;
	let text = document.querySelector('.chatinput').value;
	//console.log("1", text);

	if (text == false){
		ccc = 0;
		text = 'Введите текст';
	}

	//console.log("1.1", text);

	function chatnewuser(aaa) {
		let user = document.createElement("p");
		user.style.marginLeft='248px';
		user.style.width='180px';
		user.style.height='20px';
		user.style.padding='10px';
		user.style.background='white';
		user.style.borderStyle='solid';
		user.style.borderColor='#bbd8ed';
		user.style.borderRadius='10px';
		user.innerHTML = aaa;
		output.appendChild(user);
	};
	chatnewuser(text);

	if (ccc == 0){
		//console.log("1.2", text);
		return;
	}

	function chatnewecho(bbb) {
		let echo = document.createElement("p");
		echo.style.width='180px';
		echo.style.height='20px';
		echo.style.padding='10px';
		echo.style.background='white';
		echo.style.borderStyle='solid';
		echo.style.borderColor='#bbd8ed';
		echo.style.borderRadius='10px';
		echo.innerHTML = bbb;
		output.appendChild(echo);
	};

	let websocket;

	websocket = new WebSocket('wss://echo.websocket.org/');
	//console.log("2", websocket);

	function chatecho() {
		websocket.send(text);
		//console.log("3", text);
		websocket.onmessage = function(evt) {
			chatnewecho(evt.data);
			//console.log("4", evt);
			websocket.close();
			//console.log("5", websocket);
			websocket = null;
			//console.log("6", websocket);
		};
	};

//Вставил паузу 5 секунд чтобы успело произойти подклычение.
	setTimeout(chatecho, 5000);
}

function fungeolok(){
	
}

let output = document.getElementById("output");

let mapLink = document.querySelector('#map-link');

let chat = document.querySelector('.click-chat');

chat.addEventListener('click', funchat);

let geolok = document.querySelector('.click-geolok');

const error = () => {
	status.textContent = 'Невозможно получить ваше местоположение';
}

//Основные стили прписаны в CSS, сдесь добавлена только видимость. 
const success = (position) => {
	console.log('position', position);
	const latitude  = position.coords.latitude;
	const longitude = position.coords.longitude;
	mapLink.style.display='block';
	mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	mapLink.textContent = 'Гео-локация';
}

geolok.addEventListener('click', () => {
	mapLink.href = '';
	mapLink.textContent = '';

	if (!navigator.geolocation) {
	} else {
    navigator.geolocation.getCurrentPosition(success, error);
	}
});