window.addEventListener("load", function () {
	const filter = document.querySelector("#searchBox");
	const items = document.querySelectorAll(".products li");
	// to display no of items found
	const heading = this.document.querySelector(".heading");
	const foundITems = this.document.querySelector(".foundItems");

	filter.addEventListener("input", function () {
		let val = this.value.toLowerCase();
		let count = 0;
		// defaults
		foundITems.innerText = "";

		for (const item of items) {
			let i = item.innerText.toLowerCase();
			if (i.indexOf(val) === -1) {
				item.classList.add("hide");
				count++;
			} else {
				item.classList.remove("hide");
			}
			// if nothing is found;
			if (count > 0) {
				foundITems.innerText = `${items.length - count} items found`;
				foundITems.style.color = "hsl(80, 50%, 27%)";
			}
		}
	});
});
