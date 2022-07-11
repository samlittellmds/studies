/* 
 * LOOPS:
 * 0. Loops offer a quick and easy way to do something repeatedly. You can think of a loop as a computerized version of the game where you tell someone 
 * to take X steps in one direction, then Y steps in another. There are many different kinds of loops, but they all essentially do the same thing: they 
 * repeat an action some number of times. (Note that it's possible that number could be zero!) The various loop mechanisms offer different ways to determine 
 * the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.
 * 1. For Loops: When a for loop executes, the following occurs: The initializing expression (initialExpression), if any, is executed. This expression usually initializes 
 * one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables. The (conditionExpression) 
 * expression is evaluated. If the value of conditionExpression is true, the loop statements execute. Otherwise, the for loop terminates. 
 * (If the conditionExpression expression is omitted entirely, the condition is assumed to be true.) The statement executes. To execute multiple statements, 
 * use a block statement ({ ... }) to group those statements.
 * Example: for ([initialExpression]; [conditionExpression]; [incrementExpression])
 *                             { statement }
 * 2. A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows: If the condition becomes false, 
 * statement within the loop stops executing and control passes to the statement following the loop. The condition test occurs before statement in the loop is executed. 
 * If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement 
 * following while. To execute multiple statements, use a block statement ({ ... }) to group those statements.
 * Example: while (condition) 
 *           { statement } 
 * 3. The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. 
 * Example: for (variable in object)
 *               { statement }
 */

// 1. For Loop //

// A for loop
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
// OUTPUT:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4

// A for loop which loops through an array, but in reverse!
var arr = [1, 2, 3, 4, 5];
 
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
// OUTPUT:
// 5 
// 4 
// 3 
// 2 
// 1

// 2. While Loop // 

// The following while loop iterates as long as n is less than 3:

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

// With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:

/*
After the first pass: n = 1 and x = 1
After the second pass: n = 2 and x = 3
After the third pass: n = 3 and x = 6
After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.
*/

// Avoid infinite loops. Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate! 
// The statements in the following while loop execute forever because the condition never becomes false:

// Infinite loops are bad!
while (true) {
  console.log('Hello, world!');
}

// 3. For...in Loop //

// The for...in loop below iterates over all of the object's enumerable, non-Symbol properties and logs a string of the property names and their values.

const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
