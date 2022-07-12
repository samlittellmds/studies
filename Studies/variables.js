/* 
 * VARIABLES:
 * 0. To hold data in memory during a program, we can store this data in variables. Variables can be given names and
 * point to the to values of a particular data type, like numbers, strings, arrays etc. Variables are referred to as
 * "variables" because their values can be changed.
 * 1. To create a variable we use the keywords var, let, or const, followed by a name.
 * 2. There are 2 phases of using variables: declaration and intialization (or assignment). Once a vairiable
 * is assigned, it can be later re-assigned.
 */

// 1. declaration //
// At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything.
var myAge;
console.log(myAge); // prints undefined to the console.

// 2. initialization or assignment //
// When you assign a value to an undeclared variable.
myAge = 34;
console.log(myAge); // prints 34 to the console.

// 3. Re-assignment //
// Changing or updating the value of a previously assigned variable
myAge = 35;
console.log(myAge); // prints 35 to the console.

/*
 * HOISTING:
 * 0. JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
 * variables or classes to the top of their scope, prior to execution of the code.
 * 1. Hoisting allows functions to be safely used in code before they are declared.
 * 2. Variable and class declarations are also hoisted, so they too can be referenced before they are declared. 
 * Note that doing so can lead to unexpected errors, and is not generally recommended.
 */

// 1. Function Hoisting //
// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
// The result of the code above is: "My cat's name is Tiger"
// Without hoisting you would have to write the same code like this:
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");
// The result of the code above is the same: "My cat's name is Tiger"

// 2. Variable Hoisting //
// Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.

// The same thing happens if we declare and initialize the variable in the same line.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.

// If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. 
// Trying to read the variable before it is initialized results in ReferenceError exception.

console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num = 6; // Initialization

// Note however that initialization also causes declaration (if not already declared). 
// The code snippet below will work, because even though it isn't hoisted, 
// the variable is initialized and effectively declared before it is used.

a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'

// 3. Let and Const Hoisting //
// Variables declared with let and const are also hoisted but, unlike var, 
// are not initialized with a default value. An exception will be thrown if a 
// variable declared with let or const is read before it is initialized.

console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization

// Note that it is the order in which code is executed that matters, not the order in which 
// it is written in the source file. The code will succeed provided the line that initializes 
// the variable is executed before any line that reads it.

// 4. Class Hoisting //
// An important difference between function declarations and class declarations is that while functions 
// can be called in code that appears before they are defined, classes must be defined before they can be 
// constructed. Code like the following will throw a ReferenceError:

const p = new Rectangle(); // Throws a ReferenceError

class Rectangle {}

// This occurs because while the class is hoisted its values are not initialized.

// let and const behave differently than var with BLOCK SCOPE //
// The let and const keywords provide block-scoping. The var keyword does not.
// That means that if you declare a variable with var, then use var to declare another variable with same name 
// inside a block scope, the original variable will be updated. If you use let or const, a new variable contained 
// within the block scope is created.

// Example below:

var sandwich = 'tuna';
let drink = 'soda';

if (true) {

	// drink is in the block scope, but sandwich is not
	var sandwich = 'turkey';
	let drink = 'water';

	// logs "turkey"
	console.log(sandwich);

	// logs "water"
	console.log(drink);

}

// logs "turkey"
console.log(sandwich);

// logs "soda"
console.log(drink);