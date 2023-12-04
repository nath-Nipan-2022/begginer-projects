const d = document;
const calculator = {
	display: d.querySelector(".display"),
	digits: d.querySelectorAll("[data-number]"),
	operators: d.querySelectorAll("[data-operator]"),
	deleteBtn: d.querySelector("[data-delete]"),
	clearBtn: d.querySelector("[data-clear]"),
	equalBtn: d.querySelector("[data-equals]"),
};

let num1 = 0;
let num2 = 0;
let hasOperation = "";
let timesOfOperation = 0;
let operator = "";
// operation started or not
let isStarted = false;

function updateDisplay() {
	calculator.display.innerText = num1 + operator + (num2 || "");
}

calculator.digits.forEach((digit) => {
	digit.onclick = (e) => {
		const numValue = e.target.dataset.number;

		if (!isStarted) {
			num1 = parseFloat(num1 + numValue);
		} else {
			num2 = parseFloat(num2 + numValue);
		}
		updateDisplay();
	};
});

calculator.operators.forEach((opr) => {
	opr.onclick = () => {
		// timesOfOperation++;
		operator = opr.dataset.operator;

		// const output = calculate();
		// if (timesOfOperation > 1) {
		// num1 = output;
		// calculator.display.innerText = output + operator;
		// num2 = 0;
		// } else {
		isStarted = true;
		hasOperation = opr;
		updateDisplay();
		// }
	};
});

// calculate result
calculator.equalBtn.addEventListener("click", displayResults);

function displayResults() {
	const result = calculate();
	reset();
	// if first value isn't inputted
	num1 = result;
	updateDisplay();
}

function calculate() {
	const { operators } = calculator;
	if (!isStarted) {
		return num1;
	}
	switch (hasOperation) {
		case operators[0]:
			return num1 / num2;
		case operators[1]:
			return num1 * num2;
		case operators[2]:
			return num1 - num2;
		default:
			return num1 + num2;
	}
}

const reset = () => {
	num1 = 0;
	num2 = 0;
	hasOperation = "";
	timesOfOperation = 0;
	operator = "";
	isStarted = false;
	calculator.display.innerHTML = "";
};
calculator.clearBtn.onclick = reset;

calculator.deleteBtn.onclick = () => {
	if (!isStarted) {
		num1 = sliceIt(num1);
	} else if (num2 === 0) {
		operator = sliceIt(operator);
		isStarted = false;
	} else {
		num2 = sliceIt(num2);
	}
	updateDisplay();
	console.log({ num1: num1, num2: num2 });
};

function sliceIt(num) {
	const numArr = [...num.toString()];
	numArr.splice(numArr.length - 1, 1); // this will remove last digit

	let output = parseFloat(numArr.join(""));
	if (isNaN(output)) {
		output = 0;
	}
	return output;
}

window.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		displayResults();
	}
});
