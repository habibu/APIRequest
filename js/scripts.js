//Constant to add oour DOM objects to the front-end
	const app = document.getElementById('top');
	const logo = document.createElement('img');
		logo.source = 'logo.png';

	const container = document.createElement('div');
		container.setAttribute('class', 'container');

	app.appendChild(logo);
	app.appendChild(container);

//A variable to make a request via Http Request
	var request = new XMLHttpRequest();

//Open the connection, using GET to request on the URL endpoint

	request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
	request.onload = function() {
// Data access and manufulation fo JSON start here
		var data = JSON.parse(this.response);

		//verify the HttpRequest response
		if(request.status >= 200 && request.status < 400) {		
			data.forEach(movie => {
				const card = document.createElement('div');
				card.setAttribute('class', 'card');
				
				const h1 = document.createElement('h1');
				h1.textContent = movie.title;

				const p = document.createElement('p');
				movie.description = movie.description.substring(0, 300);
				p.textContent = `${movie.description}`;

				container.appendChild(card);
				card.appendChild(h1);
				card.appendChild(p);
			 
			});
		}else{
			const errorMessage = document.createElement('marquee');
			errorMessage.textContent = 'Oh no!, it is not working (:';
			app.appendChild(errorMessage);
		}
	}
// send the request

	request.send();
