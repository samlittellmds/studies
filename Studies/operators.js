/*
 * OPERATORS: 
 * 0. Operators act on our data, like assign them to a variable or comparing them, or include them in 
 * arithmetic operations.
 * 1. Operators are classed by what they do and how many operands they require. Operands are the values
 * that operators act on. Unary operators only work with one value, binary with two, and ternary with three.
 * 2. Some types of operators are: Assignment, Comparison, Arithmetic, Logical, String, Conditional, and
 * Unary.
 */

// 1. Assignment Operator //
/* 
The simple assignment operator (=) is used to assign a value to a variable. The assignment operation evaluates 
to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple
variables.
*/
let x = 2;
const y = 3;

console.log(x);
// expected output: 2

console.log(x = y + 1); // 3 + 1
// expected output: 4

console.log(x = x * y); // 4 * 3
// expected output: 12

/* 
The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result
to the variable. The types of the two operands determine the behavior of the addition assignment operator. 
Addition or concatenation is possible.
*/
let a = 2;
let b = 'hello';

console.log(a += 3); // addition
// expected output: 5

console.log(b += ' world'); // concatenation
// expected output: "hello world"

/* The subtraction assignment operator (-=) subtracts the value of the right operand from a variable and assigns 
the result to the variable.
*/
let a = 2;

console.log(a -= 3);
// expected output: -1

console.log(a -= 'Hello');
// expected output: NaN

// 2. Comparison Operators //
/* 
A comparison operator compares its operands and returns a logical value based on whether the comparison is true. 
The operands can be numerical, string, logical, or object values. Strings are compared based on standard 
lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, 
JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results 
in comparing the operands numerically. The sole exceptions to type conversion within comparisons involve the 
=== and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt 
to convert the operands to compatible types before checking equality. 
*/

// Equal (==) Returns true if the operands are equal.
const var1 = 3;
3 == var1; // true
"3" == var1; // true
3 == '3'; // true

// Not equal (!=) Returns true if the operands are not equal.	
const var1 = 3;
const var2 = 4;
var1 != 4 // true 
var2 != "3" // true

// Strict equal (===) Returns true if the operands are equal and of the same type.
const var1 = 3;
3 === var1 // true

// Strict not equal (!==) Returns true if the operands are of the same type but not equal, or are of different type.
const var1 = 3;
var1 !== "3" // true
3 !== '3' // true

// Greater than (>) Returns true if the left operand is greater than the right operand.
const var1 = 3;
const var2 = 4;
var2 > var1 // true
"12" > 2 // true

// Greater than or equal (>=) Returns true if the left operand is greater than or equal to the right operand.	
const var1 = 3;
const var2 = 4;
var2 >= var1 // true
var1 >= 3 // true

// Less than (<) Returns true if the left operand is less than the right operand.	
const var1 = 3;
const var2 = 4;
var1 < var2 // true
"2" < 12 // true

// Less than or equal (<=) Returns true if the left operand is less than or equal to the right operand.	
const var1 = 3;
const var2 = 4;
var1 <= var2 // true
var2 <= 5 // true

// 3. Arithmetic Operators //
/* 
An arithmetic operator takes numerical values (either literals or variables) as their operands and returns
a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication
(*), and division (/). These operators work as they do in most other programming languages when used with floating 
point numbers (in particular, note that division by zero produces Infinity).  
*/

// +	Addition Operator
var add = 1 + 2;
console.log(add); // 3

// -	Subtraction Operator
var sub = 4 - 1;
console.log(sub); // 3

// *	Multiplication Operator
var mult = 5 * 4;
console.log(mult); // 20

// /	Division Operator
var div = 20 / 4;
console.log(div); // 5

// %	Modulus (Remainder) Binary operator. Returns the integer remainder of dividing the two operands.
var rem = 2 % 2;
console.log(rem); // 0

// ++	Increment Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value 
// of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding 
// one.
var x = 4;
x--;
console.log(x); // 3

// --	Decrement Unary operator. Subtracts one from its operand. The return value is analogous to that for the 
// increment operator.
var x = 4;
x++;
console.log(x); // 5

// 4. Logical Operators //
/* 
Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. 
However, the && and || operators actually return the value of one of the specified operands, so if these operators
are used with non-Boolean values, they may return a non-Boolean value. The logical operators are described in the 
following table.
*/

// Logical AND (&&) Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with 
// Boolean values, && returns true if both operands are true; otherwise, returns false.
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false

// Logical OR  (||)	Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with
// Boolean values, || returns true if either operand is true; if both are false, returns false.
ar o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat

// Logical NOT (!)	Returns false if its single operand that can be converted to true; otherwise, returns true.
var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !'Cat'; // !t returns false

// 5. String Operators //
/* 
In addition to the comparison operators, which can be used on string values, the concatenation operator (+) 
concatenates two string values together, returning another string that is the union of the two operand strings.
*/

console.log('my ' + 'string'); // console logs the string "my string".

// The shorthand assignment operator += can also be used to concatenate strings.
// For example:
var mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.

// 6. Conditional Operator (Ternary) //
/* 
The conditional operator is the only JavaScript operator that takes three operands. The operator can have one 
of two values based on a condition. The syntax is: condition ? val1 : val2
*/

// If condition is true, the operator has the value of val1. Otherwise it has the value of val2. 
// You can use the conditional operator anywhere you would use a standard operator.

// For example:

var status = (age >= 18) ? 'adult' : 'minor';

// This statement assigns the value "adult" to the variable status if age is eighteen or more. Otherwise, it assigns 
// the value "minor" to status.

// 7. Unary Operator //
/* 
A unary operation is an operation with only one operand. The typeof operator returns a string indicating the type
of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned. 
The parentheses are optional.
*/

// typeOF //
// Suppose you define the following variables:

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

// The typeof operator returns the following results for these variables:

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"

// For the keywords true and null, the typeof operator returns the following results:

typeof true; // returns "boolean"
typeof null; // returns "object"

// For a number or string, the typeof operator returns the following results:

typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"

// For property values, the typeof operator returns the type of value the property contains:

typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"

// For methods and functions, the typeof operator returns results as follows:

typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"

// For predefined objects, the typeof operator returns results as follows:

typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"

// + (Unary Plus)//
/*
This operator precedes the operand and converts the operator into the final output with the required number. 
It converts the string containing numbers, Boolean values, and any type of null into the final number. 
It will include numbers like integer, float, hexadecimal, etc. In terms of JavaScript, it can be said that the
 Unary plus basically attempts to convert any expression to a number.

Note: Unary operator will return value only if the object it has contains the valueOf key and that function, 
in turn, return any of the values as mentioned above.
*/

function M_Unary_Typ(p) {
    this.number = p;
    }
    M_Unary_Typ.prototype.valueOf = function() {
    return this.number;
    };
    const obj_1 = new M_Unary_Typ(9);
    console.log(obj_1 + 3); 
    // 12 would be printed to the console

// - (Unary Negation) //
/*
It also works in a similar fashion as Unary plus with a mere difference that it includes the operand preceded with 
the operand and then converts the unary plus operand with the same function which makes the value as negated.
In short performing unary negation and unary plus on top of unary negation makes the value negated with same 
function as non-numbers. This program demonstrates the Unary Negation operation which gives the negative value once 
applied with the value of the key.
*/

function negtion_func(s) {
    this.nm = s;
    }
    negtion_func.prototype.valueOf = function() {
    return this.nm;
    };
    const obj1 = new negtion_func(true);
    const obj2 = new negtion_func(15);
    console.log(obj1 + 3 -20);
    console.log(obj2 + 3 -20);
    // -16 would be printed to the console
    // -2 would be printed to the console

// ! (Logical Not) //
/*
Logical Not operator comes with the fact that it comes before the operand and converts the operand into its 
boolean equivalent before converting it into boolean equivalent and negating the value. This program demonstrates 
the Logical Not(!) unary operator which returns the output with logical not.
*/
function M_negtion_func(z) {
    this.nm = z;
    }
    M_negtion_func.prototype.valueOf = function() {
    return this.nm;
    };
    const obj1 = new M_negtion_func(!false);
    const obj2 = new M_negtion_func(!"-3");
    console.log(obj1, !false );
    console.log(obj2, !"-3");
    // true would be printed to the console
    // false would be printed to the console

// ++ (Increment) // (See also: Arithmetic operators)

/*
The increment is also one type of unary operand which makes use of operators and operands where the operator adds 
one to its operand and then returns the result as its value. Further, this operator can be categorized as two types 
namely Postfix and Prefix. In postfix, the operator comes after the operand thus returning the value before performing
any increment. In prefix, the operator comes before the operand thus returning the value after prefixing the value.
*/ 
let q = 15;
++q;
console.log(q);
// 16 would be printed to the console

// -- (Decrement)// (See also: Arithmetic operators)

/*
The decrement operator subtracts value from one of its operands and returns a value before performing a postfix 
while performing decrement operation. Performing prefixing before it returns a value and then decrementing makes 
it different. This program demonstrates the Decrement unary operator which decrements the value of the prefixed 
value of the considered variable.
*/
var k = 5
k = --k
console.log(k);
// 4 would be printed to the console

