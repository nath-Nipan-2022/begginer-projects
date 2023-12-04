const navbar = document.querySelector(".navbar"),
  navLinks = document.querySelector(".navLinks"),
  menu = document.querySelector(".menu"),
  cityInputForm = document.querySelector("form"),
  weatherReportContent = document.querySelector(".weather__report .content");

// on search submit
cityInputForm.addEventListener("submit", function (e) {
  e.preventDefault();

  fetchData(this.elements[0].value);
  this.elements[0].value = "";
});

// on links click
navLinks.addEventListener("click", function (e) {
  fetchData(e.target.dataset.text);
});

let city = "Agartala";
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
    alert("Something went wrong!" + error.message);
  }
};

const titles = {
  city: "City",
  humidity: "Humidity",
  min_temp: "Minimum",
  max_temp: "Maximum",
  feels_like: "Feels like",
  wind_speed: "Wind Speed",
  wind_degrees: "Wind Degrees",
  cloud_pct: "Cloud %",
};

function showLoading(city) {
  weatherReportContent.innerHTML = `<article><div><span class="loader"></span></div></article>`;
}

function showReport(data) {
  const cards = Object.keys(titles).map(
    (item) =>
      `<div><span>${titles[item]}</span><span>${data[item]}</span></div>`
  );

  weatherReportContent.innerHTML = `<article>${cards.join("")}</article>`;
}

// default
window.addEventListener("load", () => fetchData(city));

document.body.onclick = (e) => {
  if (!navbar.contains(e.target) && !menu.contains(e.target)) {
    navbar.classList.remove("active");
    return;
  }

  navbar.classList.toggle("active");
};
