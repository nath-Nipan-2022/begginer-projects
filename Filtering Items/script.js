const searchBox = document.getElementById("searchBox");
const heading = document.querySelector(".heading");
const itemsNum = document.querySelector(".items-no");
const listContainer = document.querySelector("ul");

const items = [
	"Apple",
	"Pineapple",
	"Watermelon",
	"Avocado",
	"Guava",
	"Pomegranates",
	"Graphs",
	"Almonds",
	"Cashews",
	"Orange",
	"Banana",
	"Kiwi",
	"Papaya",
	"Mango",
	"Strawberries",
	"Cucumber",
	"Jackfruit",
	"Walnuts",
];

window.addEventListener("load", () => {
	showList(items);
	searchBox.addEventListener("input", handleItemSearch);
});

function handleItemSearch(e) {
	const value = e.target.value;
	let count = 0;
	listContainer.innerHTML = "";

	const filteredItems = items.filter((item) =>
		item.toLowerCase().includes(value.toLowerCase())
	);

	const length = filteredItems.length;

	if (length === items.length) {
		showList(filteredItems);
		itemsNum.innerHTML = "";
	} else {
		showList(filteredItems, "bold");
		itemsNum.innerHTML = `${length} item${length > 1 ? "s" : ""} found`;
	}
}

function showList(lists, fontWeight = "") {
	for (const item of lists) {
		const listElem = document.createElement("li");
		listElem.innerText = item;
		listElem.className = fontWeight;

		listContainer.append(listElem);
	}
}
