Here is a cheatsheet of JavaScript with examples in well-structured data:

## Variables

Variables are containers for storing data values. In JavaScript, there are three ways to declare a variable: using `var`, `let`, or `const`.

- `var` declares a variable that can be reassigned and has a function scope.
- `let` declares a variable that can be reassigned and has a block scope.
- `const` declares a variable that cannot be reassigned and has a block scope.

```javascript
var x = 10; // x can be changed later
let y = 20; // y can also be changed later
const z = 30; // z cannot be changed later
```

## Data Types

JavaScript has six primitive data types: `string`, `number`, `boolean`, `undefined`, `null`, and `symbol`. It also has one complex data type: `object`.

- A `string` is a sequence of characters enclosed by single or double quotes.
- A `number` is a numeric value that can be an integer or a decimal.
- A `boolean` is a logical value that can be either `true` or `false`.
- An `undefined` value is a variable that has not been assigned a value.
- A `null` value is a special value that represents the absence of any value.
- A `symbol` is a unique and immutable identifier that can be used as a property key of an object.
- An `object` is a collection of properties that are key-value pairs.

```javascript
let name = "Alice"; // string
let age = 25; // number
let isMarried = false; // boolean
let hobbies; // undefined
let pet = null; // null
let id = Symbol("id"); // symbol
let person = { name: "Alice", age: 25 }; // object
```

## Operators

JavaScript has various operators that perform different operations on values. Some of the common operators are:

- Arithmetic operators: perform mathematical calculations on numbers, such as `+`, `-`, `*`, `/`, and `%`.
- Assignment operators: assign values to variables, such as `=`, `+=`, `-=` and others.
- Comparison operators: compare two values and return a boolean, such as `==`, `===`, `<`, and others.
- Logical operators: combine two or more boolean values and return a boolean, such as `&&`, `||`, and `!`.
- Bitwise operators: perform bitwise operations on numbers, such as `&`, `|`, and others.

```javascript
let x = 10;
let y = 20;
x + y; // 30, addition
x - y; // -10, subtraction
x * y; // 200, multiplication
x / y; // 0.5, division
x % y; // 10, remainder

x = x + 10; // x is now 20, assignment
x += 10; // same as above, shorthand assignment

x == y; // false, equality comparison
x === y; // false, strict equality comparison
x < y; // true, less than comparison

x && y; // 20, logical and
x || y; // 10, logical or
!x; // false, logical not

x & y; // 0, bitwise and
x | y; // 30, bitwise or
```

## Control Structures

JavaScript has control structures that allow the execution of code blocks based on certain conditions or iterations. Some of the common control structures are:

- If statements: execute a code block if a condition is true, optionally with an else clause if the condition is false.
- Switch statements: execute a code block based on the value of an expression, with multiple cases and a default case.
- For loops: execute a code block for a specified number of times, with an initialization, a condition, and an update expression.
- While loops: execute a code block while a condition is true, with the condition checked before each iteration.
- Do while loops: execute a code block while a condition is true, with the condition checked after each iteration.

```javascript
let score = 80;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
} // B, if statement

let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Other day");
} // Monday, switch statement

for (let i = 0; i < 10; i++) {
  console.log(i);
} // 0 to 9, for loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} // 0 to 9, while loop

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10); // 0 to 9, do while loop
```

## Functions

Functions are blocks of code that can be defined and invoked to perform a specific task. In JavaScript, there are different ways to define and invoke functions.

- Function declarations: define a function with the `function` keyword, a name, and optional parameters.
- Function expressions: define a function as an expression and assign it to a variable.
- Arrow functions: define a function with the `=>` syntax, with optional parameters and a concise body.
- Function calls: invoke a function with its name and optional arguments.

```javascript
// function declaration
function add(a, b) {
  return a + b;
}

// function expression
let add = function (a, b) {
  return a + b;
};

// arrow function
let add = (a, b) => a + b;

// function call
add(10, 20); // 30
```

## Objects

Objects are collections of properties that are key-value pairs. In JavaScript, objects can be created and manipulated in various ways.

- Object literals: create an object with the `{}` syntax, with optional properties and values.
- Dot notation: access or modify a property of an object with the `.` operator and the property name.
- Bracket notation: access or modify a property of an object with the `[]` operator and the property name or expression.
- Object methods: define or invoke a function as a property of an object.

```javascript
// object literal
let person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// dot notation
person.name; // Alice
person.age = 26; // change age to 26

// bracket notation
person["name"]; // Alice
person["age"] = 26; // change age to 26

// object method
person.greet(); // Hello, Alice
```

## Arrays

Arrays are objects that store multiple values in a single variable. In JavaScript, arrays can be created and manipulated in various ways.

- Array literals: create an array with the `[]` syntax, with optional elements separated by commas.
- Array methods: use built-in methods to perform operations on arrays, such as `push`, `pop`, `slice`, and others.
- Array indexing: access or modify an element of an array with the `[i]` operator and the index `i`.
- Array length: get or set the length of an array with the `length` property.

```javascript
// array literal
let fruits = ["apple", "banana", "orange"];

// array methods
fruits.push("pear"); // add pear to the end of the array
fruits.pop(); // remove and return the last element of the array
fruits.slice(1, 3); // return a new array with elements from index 1 to 2

// array indexing
fruits[0]; // apple
fruits[1] = "berry"; // change banana to berry

// array length
fruits.length; // 3
fruits.length = 2; // remove the last element of the array
```

- `split()` and `join()`: These methods can be used to convert a string to an array and vice versa. The `split()` method takes a separator as an argument and returns an array of substrings that are separated by the separator. The `join()` method takes a separator as an argument and returns a string that is the concatenation of the array elements with the separator between them.

```javascript
let str = "Hello, world!";
let arr = str.split(", "); // ["Hello", "world!"]
let newStr = arr.join("-"); // "Hello-world!"
```

- `reverse()`: This method can be used to reverse the order of the elements in an array or the characters in a string. The `reverse()` method does not take any arguments and returns a new array or string with the reversed order.

```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.reverse(); // [5, 4, 3, 2, 1]
let str = "Hello";
let newStr = str.split("").reverse().join(""); // "olleH"
```

- `includes()`: This method can be used to check if an array or a string contains a certain element or substring. The `includes()` method takes a value as an argument and returns a boolean value indicating whether the value is found in the array or string.

```javascript
let arr = ["apple", "banana", "orange"];
let str = "I like fruits";
console.log(arr.includes("apple")); // true
console.log(arr.includes("pear")); // false
console.log(str.includes("fruit")); // true
console.log(str.includes("cake")); // false
```

## Strings

Strings are sequences of characters enclosed by single or double quotes. In JavaScript, strings can be created and manipulated in various ways.

- String literals: create a string with the `""` or `''` syntax, with optional escape sequences for special characters.
- String methods: use built-in methods to perform operations on strings, such as `toUpperCase`, `toLowerCase`, `indexOf`, and others.
- String concatenation: combine two or more strings into one string with the `+` operator.
- Template literals: create a string with the ``syntax, with optional expressions enclosed by`${}`.

```javascript
// string literal
let name = "Alice";
let greeting = "Hello\nWorld"; // use \n for newline

// string methods
name.toUpperCase(); // ALICE
name.toLowerCase(); // alice
name.indexOf("c"); // 2

// string concatenation
let fullName = name + " Smith"; // Alice Smith

// template literal
let message = `Hello, ${name}`; // Hello, Alice
```

## Sources:

This cheatsheet was created using information from the following web pages:

¹: [JavaScript (JS) Cheat Sheet Online](^1^)
²: [2023 JavaScript Cheatsheet | SheCodes](^2^)
³: [JavaScript Cheat Sheet - Opensource.com](^3^)
⁴: [JavaScript Cheat Sheet – A Basic Guide to JavaScript](^4^)

Source: Conversation with Bing, 11/9/2023
(1) JavaScript (JS) Cheat Sheet Online. https://htmlcheatsheet.com/js/.
(2) JavaScript (JS) Cheat Sheet Online. https://htmlcheatsheet.com/js/.
(3) 2023 JavaScript Cheatsheet | SheCodes. http://cheatsheets.shecodes.io/javascript.
(4) 2023 JavaScript Cheatsheet | SheCodes. http://cheatsheets.shecodes.io/javascript.
(5) JavaScript Cheat Sheet - Opensource.com. https://opensource.com/sites/default/files/gated-content/cheat_sheet_javascript-2021.7.19.pdf.
(6) JavaScript Cheat Sheet - Opensource.com. https://opensource.com/sites/default/files/gated-content/cheat_sheet_javascript-2021.7.19.pdf.
(7) JavaScript Cheat Sheet – A Basic Guide to JavaScript. https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/.
(8) JavaScript Cheat Sheet – A Basic Guide to JavaScript. https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/.
