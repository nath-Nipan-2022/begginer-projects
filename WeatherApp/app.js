let city;
// on search submit
document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	city = this.elements[0].value;
	fetchData(city);
});

// on links click
document.querySelector(".navLinks").addEventListener("click", function (e) {
	city = e.target.innerText;
	fetchData(city);
});

// function fetchData 
const fetchData = async (city = "Agartala") => {
	const baseUrl = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?";

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "6072f43cacmsh9137db65744c8afp1452a3jsn1d4b9e8dbefc",
			"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	};
	// fetch the data
	try {
		const response = await fetch(`${baseUrl}city=${city}`, options);
		const data = await response.json();
		
		weatherReport({ ...data, city });
	} catch (error) {
		console.error("oh no! error", error);
		alert("something went wrong");
	}
};

function weatherReport(data) {
	const { humidity, temp, feels_like, city } = data;
	let weatherReport = document.querySelector(".weather-report");

	let output = `
  <h2>City: <span class="fade" >${city}</span></h2>
  <h2>Temperature: <span class="fade" >${temp}&deg;C</span></h2>
  <h2>Feels Like: <span class="fade" >${feels_like}&deg;C</span></h2>
  <h2>Humidity: <span class="fade" >${humidity}%</span></h2>
  <figure class="fade">
					<img src="./weather.png" alt="---" width="100" />
	</figure>
  `;

	weatherReport.innerHTML = output;
	// remove the fade animation
	weatherReport.classList.add("fade");
	setTimeout(() => {
		weatherReport.classList.remove("fade");
	}, 500);
}

// default
window.addEventListener("load", () => fetchData());
