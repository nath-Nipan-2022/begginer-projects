const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

const cityInput = document.querySelector("#citySearch");
const weatherReportContent = document.querySelector(
	".weather__report .content"
);

// on search submit
cityInput.addEventListener("change", (event) => {
	clearTimeout(timer);
	timer = setTimeout(() => {
		fetchData(event.target.value);
		event.target.value = "";
	}, 100);
});

// on links click
document.querySelector(".navLinks").addEventListener("click", function (e) {
	fetchData(e.target.innerText);
});

let city = "Mumbai";
let timer = 0;

// function fetchData
const fetchData = async (query) => {
	if (!query) return;

	let q = query.charAt(0).toUpperCase() + query.slice(1);

	const baseUrl = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?";

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "6072f43cacmsh9137db65744c8afp1452a3jsn1d4b9e8dbefc",
			"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	};

	try {
		showLoading(q);

		const response = await fetch(`${baseUrl}city=${q}`, options);
		const data = await response.json();

		showReport({ ...data, city: q });
	} catch (error) {
		console.error("oh no! error", error);
		alert("Error fetching data: " + error.message);
	}
};

const titles = [
	"Temperature",
	"Humidity",
	"Cloud %",
	"Feels like",
	"Minimum",
	"Maximum",
	"Wind Degrees",
	// "Wind Speed",
];

function showLoading(city) {
	weatherReportContent.innerHTML = `
	<article>
		<div>
			<span>City</span>
			<span>${city}</span>
		</div>

		${titles
			.map((t) => {
				return `<div><span>${t}</span>
				<p><span class="loader"></span></p></div>`;
			})
			.join("")}
	</article>
	`;
}

function showReport(data) {
	const {
		city,
		temp,
		min_temp,
		max_temp,
		feels_like,
		wind_speed,
		humidity,
		cloud_pct,
	} = data;

	if (temp || humidity) {
		weatherReportContent.innerHTML = `
	<article>
		 <div>
			<span>City</span>
			<span>${city}</span>
		  </div>
		 <div>
			<span>${titles[0]}</span>
			<span>${temp}&degC</span>
		</div>
		<div>
			<span>${titles[1]}</span>
			<span>${feels_like}&degC</span>
		</div>
		<div>
			<span>${titles[2]}</span>
			<span>${min_temp}&degC</span>
		</div>
		 <div>
			<span>${titles[3]}</span>
			<span>${max_temp}&degC</span>
		</div>
		 <div>
			<span>${titles[4]}</span>
			<span>${humidity}</span>
		</div>
		 <div>
			<span>${titles[5]}</span>
			<span>${cloud_pct}</span>
		</div>
		 <div>
			<span>${titles[6]}</span>
			<span>${wind_speed}</span>
		</div>
	</article>
	`;
	}
}

// default
window.addEventListener("load", () => fetchData(city));

document.body.onclick = (e) => {
	if (
		(e.target === cityInput || menu.contains(e.target)) &&
		!navbar.classList.contains("active")
	) {
		navbar.classList.add("active");
	} else if (e.target !== cityInput) {
		navbar.classList.remove("active");
	}
};
