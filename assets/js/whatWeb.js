alert('Bem vindo, ative a localização do seu aparelho!')


var target = document.getElementById('target');
var watchId;


if ('geolocation' in navigator) {
  document.getElementById('askButton').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, 'fetched');
    });
    watchId = navigator.geolocation.watchPosition(appendLocation);
  });
} else {
  target.innerText = 'Geolocation API not supported.';
}


const url = 'https://map-geocoding.p.rapidapi.com/json?latlng=40.714224%2C-73.961452';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '164206ff9fmsh2954e1ca7309153p16a87djsnd521d42505bc',
		'X-RapidAPI-Host': 'map-geocoding.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}