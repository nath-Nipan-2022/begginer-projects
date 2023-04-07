const display = document.querySelector(".display");
const digits = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operation]");
const deleteBtn = document.querySelector("[data-delete]");
const clearBtn = document.querySelector("[data-clear]");
const equalBtn = document.querySelector("[data-equals]");

// lets define the needed variables
let num1 = 0;
let num2 = 0;
let display2 = '';
let whatOperation = "";
let operator = "";
let isOperationStart = false;

// outputting the digits..
digits.forEach((btn) => {
	btn.addEventListener("click", function () {
		//Firstly every digits will be displayed
		display.innerText += this.innerText;

		if (!isOperationStart) {
			num1 = parseFloat(display.innerText);
		} else if (isOperationStart) {
			display2 += this.innerText;
			num2 = parseFloat(display2);
		}
	});
});
// operators..
operators.forEach((operation) => {
	operation.addEventListener("click", () => {
		isOperationStart = true;
		whatOperation = operation;
		operator = operation.innerText;
		display.innerText = num1 + operator;
	});
});
// Equals to?
equalBtn.addEventListener("click", () => {
	let output = calculate();
	display.innerText = output;
	// if first value isn't inputted
	num1 = output;
	num2 = 0;
	display2 = '';
	isOperationStart = false;
});
// calculate function..
let calculate = () => {
	if (!isOperationStart) {
		return num1;
	}
	switch (whatOperation) {
		case operators[3]:
			return num1 + num2;
		case operators[2]:
			return num1 - num2;
		case operators[1]:
			return num1 * num2;
		default:
			return num1 / num2;
	}
};
// clear..
clearBtn.addEventListener("click", () => {
	reset();
});
// reset function..
function reset() {
	display.innerText = "";
	num1 = 0;
	num2 = 0;
	display2 = '';
	isOperationStart = false;
	whatOperation = "";
}

// delete..
deleteBtn.addEventListener("click", () => {
	correct();
});
// correct function..
function correct() {
	if (!isOperationStart) {
		let output = sliceNums(num1);
		num1 = parseFloat(output) || "";
		// 0 is incase num1 = 'NaN';
		display.innerText = num1;
	} else if (isOperationStart) {
		let output = sliceNums(num2);
		num2 = parseFloat(output) || "";
		display.innerText = num1 + operator + num2;
	}
}
// sliceNums function..
function sliceNums(num) {
	let remains = num.toString();
	let slicedNum = remains.slice(0, remains.length - 1);
	// It will delete the last digit 👆
	return slicedNum;
}
