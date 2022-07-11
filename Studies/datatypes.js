/* 
 * DATA TYPES:
 * 0. Data types basically specify what kind of data can be stored and manipulated within a program.
 * 1. There are six basic data types in JavaScript which can be divided into three main categories: primitive 
 * (or primary), complex (composite or reference), and special data types. String, Number, and Boolean are primitive data types. 
 * Object, Array, and Function (which are all types of objects) are composite data types. Whereas Undefined and Null 
 * are special data types. 
 * 2. Primitive data types can hold only one value at a time, whereas complex (composite) data types can hold
 * collections of values and more complex entities. 
 */

// 1. Number //
/*
The Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing floating-point 
numbers between 2^-1074 and 2^1024, but can only safely store integers in the range -(2^53 − 1) to 2^53 − 1. Values 
outside of the range from Number.MIN_VALUE to Number.MAX_VALUE are automatically converted to either +Infinity or 
-Infinity, which behave similarly to mathematical infinity, but with some slight differences.

The number type has only one integer with multiple representations: 0 is represented as both -0 and +0 
(where 0 is an alias for +0). In practice, there is almost no difference between the different representations; 
for example, +0 === -0 is true. However, you are able to notice this when you divide by zero:
> 42 / +0
Infinity
> 42 / -0
-Infinity
*/

var total = 0;
var previousTotal = 10;
console.log(total); // 0 would be logged to the console

var sum = total + previousTotal;
console.log(sum); // 10 would be logged to the console

sum = 10 * 20 / 3 + 5;
console.log(sum); // 71.66666666666667 would be logged to the console

//modulus//
var remainder = 20 % 3;
console.log(remainder); // 2 would be logged to the console

// order of operations //
sum = (1 + 3) * 5
console.log(sum); // 20 would be logged to the console

// 2. String //
/*
JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer
values. Each element in the String occupies a position in the String. The first element is at index 0, the next at
index 1, and so on. The length of a String is the number of elements in it.

JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.
*/

var firstName = 'John';
console.log(firstName.length);
// 3 would be logged to the console

var lastName = 'Fraboni';
console.log(lastName.length);
// 6 would be logged to the console

var name1 = 'Fraboni';
console.log(name1[0]);
// F would be logged to the console
console.log(name1(name1.length - 1);
// i would be logged to the console

var myString = "hello!"
console.log(myString.slice(0, 2)); 
// he would be logged to the console
console.log(myString.charAt(0).toUpperCase() + myString.slice(1));
// Hello! would be logged to the console

// 3. Boolean //
/*
A Boolean is a logical data type that can have only the values true or false.
*/
var isCool = true;
console.log(isCool);
// true would be logged to the console

isCool = false;
console.log(isCool);
// false would be logged to the console

var bool = 6 > 5;
console.log(bool);
// true would be logged to the console

var bool = 6 < 5;
console.log(bool);
// false would be logged to the console

// Everything With a "Value" is True
// Examples:

100

3.14

-15

"Hello"

"false"

7 + 1 + 3.14

// Everything Without a "Value" is False
// Examples:

// The Boolean value of 0 (zero) is false:
let x = 0;
Boolean(x);

// The Boolean value of -0 (minus zero) is false:
let x = -0;
Boolean(x);

// The Boolean value of "" (empty string) is false:
let x = "";
Boolean(x);

// The Boolean value of undefined is false:
let x;
Boolean(x);

// The Boolean value of null is false:
let x = null;
Boolean(x);

// The Boolean value of false is (you guessed it) false:
let x = false;
Boolean(x);

// The Boolean value of NaN is false:
let x = 10 / "Hallo";
Boolean(x);

// 4. Array //
/*
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items 
under a single variable name, and has members for performing common array operations.
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
 - JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are 
undesirable, use typed arrays instead.)
 - JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as 
indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
 - JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, 
and so on — and the last element is at the value of the array's length property minus 1.
*/

// 'fruits' array created using array literal notation
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2 would be logged to the console

const fruits1 = ['Apple', 'Banana'];
const fruitsString = fruits1.join(', ');
console.log(fruitsString);
// "Apple, Banana" would be logged to the console

const fruits2 = ['Apple', 'Banana'];

// The index of an array's first element is always 0.
fruits2[0]; // Apple

// The index of an array's second element is always 1.
fruits2[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
fruits2[fruits2.length - 1]; // Banana

// Using a index number larger than the array's length
// returns 'undefined'.
fruits2[99]; // undefined

// 5. Object //
/*
The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more 
complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
*/
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(object1);
  // { a: 'somestring', b: 42, c: false } would be logged to the console
  console.log(object1.a);
  // somestring would be logged to the console
  console.log(object1['b']);
  // 42 would be logged to the console
  console.log(Object.keys(object1));
  // ["a", "b", "c"] would be logged to the console

// 6. Function //
/*
Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a 
procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a 
function, it should take some input and return an output where there is some obvious relationship between the 
input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
*/

function add(a, b) { // declare function
    return a + b; // body of function (do something)
  }
  console.log(add(6, 5)); // 11 would be logged to the console

  // 7. Undefined //
  /*
  The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.
  Undefined is a primitive value automatically assigned to variables that have just been declared, or to formal 
  arguments for which there are no actual arguments.
  */

var x; //create a variable but assign it no value

console.log("x's value is ", x) // logs "x's value is undefined"

// 8. Null //
/*
The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values 
and is treated as falsy for boolean operations. The value null is written with a literal: null. Null is not an 
identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of 
identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where 
an object can be expected but no object is relevant.
*/
// foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined

// foo is known to exist now but it has no type or value:
const foo = null;
foo; //null

// When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators,
// as the former performs type-conversion.

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true

// 9. NaN //
/*
The global NaN property is a value representing Not-A-Number.

NaN is a property of the global object. In other words, it is a variable in global scope.

The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a 
non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use
NaN in a program.

There are five different types of operations that return NaN:
1. Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
2. Math operation where the result is not a real number (e.g. Math.sqrt(-1))
3. Operand of an argument is NaN (e.g. 7 ** NaN)
4. Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
5. Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)
*/

// Testing against NaN
// NaN compares unequal (via ==, !=, ===, and !==) to any other value -- including to another NaN value. 
// Use Number.isNaN() or isNaN() to most clearly determine whether a value is NaN. Or perform a self-comparison: 
// NaN, and only NaN, will compare unequal to itself.

NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
Number.isNaN(NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true

// However, do note the difference between isNaN() and Number.isNaN(): the former will return true if the value is 
// currently NaN, or if it is going to be NaN after it is coerced to a number, while the latter will return true 
// only if the value is currently NaN:

isNaN('hello world');        // true
Number.isNaN('hello world'); // false

// For the same reason, using a bigint value will throw an error with isNaN() and not with `Number.isNaN():

isNaN(1n);        // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false

// Additionally, some array methods cannot find NaN, while others can.

let arr = [2, 4, NaN, 12];
arr.indexOf(NaN);                      // -1 (false)
arr.includes(NaN);                     // true
arr.findIndex(n => Number.isNaN(n));   // 2

// 10. Infinity and -Infinity //
/*
Infinity is a property of the global object. In other words, it is a variable in global scope.
The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than 
any other number. This value behaves slightly differently than mathematical infinity; see Number.POSITIVE_INFINITY 
for details. As defined by the ECMAScript 5 specification, Infinity is read-only 
(implemented in JavaScript 1.8.5 / Firefox 4).

The number type has only one integer with multiple representations: 0 is represented as both -0 and +0 
(where 0 is an alias for +0). In practice, there is almost no difference between the different representations; 
for example, +0 === -0 is true. However, you are able to notice this when you divide by zero:
> 42 / +0
Infinity
> 42 / -0
-Infinity
*/

console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
console.log(1 / 0             ); /* Infinity */

// 11. Primitve vs. Complex (Copy vs. Reference) //
/*
JavaScript has two different types of values:
1. Primitive values
2. Reference values
Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.

Stack and heap memory
When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: 
stack and heap.

Static data is the data whose size is fixed at compile time. Static data includes:

Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
Reference values that refer to objects.
Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space
to the static data and store it on the stack.
*/

// A REFERENCE // value allows you to add, change, or delete properties at any time. For example:

let person = {
    name: 'John',
    age: 25,
  };
  
  // add the ssn property
  person.ssn = '123-45-6789';
  
  // change the name
  person.name = 'John Doe';
  
  // delete the age property
  delete person.age;
  
  
  console.log(person); // would log { name: 'John Doe', ssn: '123-45-6789' } to the console

// Unlike a reference value, a primitive value cannot have properties. This means that you cannot add a property to 
// a primitive value. JavaScript allows you to add a property to a primitive value. However, it won’t take any effect. 
// For example:

let name = 'John';
name1.alias = 'Knight';

console.log(name1.alias); // would log undefined to the console

// In this example, we add the alias property to the name primitive value. But when we access the alias property
// via the name primitive value, it returns undefined.

// COPYING values //
// When you assign a primitive value from one variable to another, the JavaScript engine creates a copy of that value
// and assigns it to the variable. For example:

let age = 25;
let newAge = age;

// In this example:
// First, declare a new variable age and initialize its value with 25.
// Second, declare another variable newAge and assign the age to the newAge variable.
// Behind the scene, the JavaScript engine creates a copy of the primitive value 25 and assign it to the newAge 
// variable.

// On the stack memory, the newAge and age are separate variables. If you change the value of one variable, 
// it won’t affect the other.
// For example:

let age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge); // 25 26 will be logged to the console

// When you assign a reference value from one variable to another, the JavaScript engine creates a reference so that 
// both variables refer to the same object on the heap memory. This means that if you change one variable, it’ll affect 
// the other.
// For example:

let person = {
    name: 'John',
    age: 25,
  };
  
  let member = person;
  
  member.age = 26;
  
  console.log(person); // { name: 'John', age: 26 } would be logged to the console
  console.log(member); // { name: 'John', age: 26 } would be logged to the console
  
  // Javascript has two types of values: primitive values and reference values.
  // You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
  // Copying a primitive value from one variable to another creates a separate value copy. It means that changing the 
  // value in one variable does not affect the other.
  // Copying a reference from one variable to another creates a reference so that two variables refer to the same 
  // object. This means that changing the object via one variable reflects in another variable.



