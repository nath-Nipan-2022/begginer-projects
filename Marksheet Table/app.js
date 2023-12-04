const selector = (query) => {
	return document.querySelector(query);
};

const selectScoreType = selector("#select");
const h4 = selector("h4");
const table = selector("table");
const tbody = selector("tbody");
const btn = selector("#cta");

// variables
let scoresIndex = 0;
let order;

btn.addEventListener("click", () => getScores(scoresIndex));

const scores = [
	{
		id: 0,
		english: 80,
		bengali: 66,
		mathematics: 90,
		socialScience: 78,
		science: 86,
	},
	{
		id: 1,
		english: 72,
		psychology: 85,
		mathematics: 90,
		chemistry: 91,
		physics: 84,
	},
	{
		id: 2,
		organic: 75,
		inorganic: 65,
		physical: 73,
		physics: 70,
	},
	{
		id: 3,
		organic: 82,
		inorganic: 75,
		physical: 79,
		elective: 80,
	},
];

function getScores(scoresIndex) {
	table.classList.add("tableShow");

	order = null;
	sortMarks();
}

function sortMarks() {
	const markObj = scores[scoresIndex];
	let subs = Object.keys(markObj);
	let sum = 0;

	const arr = [...subs];

	if (order) {
		const reversed = order === "asc" ? 1 : -1;
		const sortedSubs = arr.sort((a, b) => {
			const valA = markObj[a];
			const valB = markObj[b];

			return (valA - valB) * reversed;
		});
		subs = sortedSubs;
	}

	if (order === "asc") {
		order = "desc";
		table.querySelector("th .icon").dataset.order = "desc";
	} else if (order === "desc") {
		order = null;
		table.querySelector("th .icon").dataset.order = "asc";
	} else {
		table.querySelector("th .icon").dataset.order = "";
		order = "asc";
	}

	tbody.innerHTML = "";

	for (let i = 0; i <= subs.length - 1; i++) {
		if (subs[i] !== "id") {
			sum += markObj[subs[i]];
			const row = document.createElement("tr");

			row.innerHTML = `<tr>
			<td>${subs[i]}</td>
			<td>${markObj[subs[i]]}</td>
			</tr>`;
			// append new row
			tbody.appendChild(row);
		}
	}

	selector("#percent").innerText = sum / (subs.length - 1) + "%";
}

function changeType() {
	table.classList.remove("tableShow");

	setTimeout(() => {
		scoresIndex = selectScoreType.value;
		getScores(scoresIndex);

		let text = selectScoreType.children[scoresIndex].innerText;
		h4.innerHTML = `Mark sheet of <span>${text}</span>`;
		table.classList.add("tableShow");
	}, 200);
}
selectScoreType.addEventListener("change", changeType);

// toggleTheme
const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
const html = document.documentElement;
html.setAttribute("data-theme", isDark ? "dark" : "");

const changeTheme = () => {
	const theme = html.dataset.theme;

	if (theme === "dark") {
		html.dataset.theme = "light";
	} else if (theme === "light") {
		html.dataset.theme = "dark";
	}
};
