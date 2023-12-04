// selection
const accContainer = document.querySelector('.accordion-container');

const contents = [
	{
		header: 'accordion one',
		text: 'onesum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur neque tenetur assumenda minima quaerat odit voluptates hic! Aliquid consequuntur maxime explicabo nisi sint recusandae maiores, sed adipisci delectus quisquam veniam assumenda deserunt laudantium molestiae dolores minima id sapiente rerum voluptatem libero corrupti! Ad veritatis illo velit quo doloremque culpa aspernatur repellat molestiae dicta! Molestias deserunt unde sapiente id voluptate!',
	},
	{
		header: 'accordion two',
		text: 'twosum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur neque tenetur assumenda minima quaerat odit voluptates hic! Aliquid consequuntur maxime explicabo nisi sint recusandae maiores, sed adipisci delectus quisquam veniam assumenda deserunt laudantium molestiae dolores minima id sapiente rerum voluptatem libero corrupti! Ad veritatis illo velit quo doloremque culpa aspernatur repellat molestiae dicta! Molestias deserunt unde sapiente id voluptate!',
	},
	{
		header: 'accordion three',
		text: 'threesum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur neque tenetur assumenda minima quaerat odit voluptates hic! Aliquid consequuntur maxime explicabo nisi sint recusandae maiores, sed adipisci delectus quisquam veniam assumenda deserunt laudantium molestiae dolores minima id sapiente rerum voluptatem libero corrupti! Ad veritatis illo velit quo doloremque culpa aspernatur repellat molestiae dicta! Molestias deserunt unde sapiente id voluptate!',
	},
	{
		header: 'accordion four',
		text: 'foursum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur neque tenetur assumenda minima quaerat odit voluptates hic! Aliquid consequuntur maxime explicabo nisi sint recusandae maiores, sed adipisci delectus quisquam veniam assumenda deserunt laudantium molestiae dolores minima id sapiente rerum voluptatem libero corrupti! Ad veritatis illo velit quo doloremque culpa aspernatur repellat molestiae dicta! Molestias deserunt unde sapiente id voluptate!',
	},
	{
		header: 'accordion five',
		text: 'fivesum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur neque tenetur assumenda minima quaerat odit voluptates hic! Aliquid consequuntur maxime explicabo nisi sint recusandae maiores, sed adipisci delectus quisquam veniam assumenda deserunt laudantium molestiae dolores minima id sapiente rerum voluptatem libero corrupti! Ad veritatis illo velit quo doloremque culpa aspernatur repellat molestiae dicta! Molestias deserunt unde sapiente id voluptate!',
	},
];

toggleAccordion();

function toggleAccordion() {
	for (let acc of contents) {
		//create a new accordion
		const accordion = document.createElement('article');
		accordion.className = 'accordion';
		accordion.innerHTML = `
		<h2>
			<div class="outer">${acc.header}</div>
			<div class="inner"></div>
		</h2>`;

		// append the accordion
		accContainer.appendChild(accordion);

		let isOpened = false;
		const text = document.createElement('p');

		accordion.children[0].onclick = () => {
			isOpened = !isOpened;
			text.classList.toggle('text');
			accordion.classList.toggle('active');

			if (isOpened) {
				text.innerHTML = acc.text;
				accordion.appendChild(text);
			} else {
				accordion.removeChild(text);
			}
		};
	}
}

addLightOnHeader = () => {
	accContainer.onmousemove = (e) => {
		for (const h of document.querySelectorAll('.accordion h2')) {
			const rect = h.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			h.style.setProperty('--x', `${x}px`);
			h.style.setProperty('--y', `${y}px`);
			h.classList.add('active');
		}
	};
};
addLightOnHeader();
