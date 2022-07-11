/*
 * STRING MANIPULATION: 
 * 0. A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. 
 * Each character in a JavaScript string can be accessed by an index number, and all strings have methods 
 * and properties available to them.
 * Each of the characters in a string correspond to an index number, starting with 0.
 * To demonstrate, we will create a string with the value How are you?.
 *      H	o	w		a	r	e		y	o	u	?
 *      0	1	2	3	4	5	6	7	8	9	10	11
 * The first character in the string is H, which corresponds to the index 0. The last character is ?, which corresponds
 * to 11. The whitespace characters also have an index, at 3 and 7.
 * Being able to access every character in a string gives us a number of ways to work with and manipulate strings.
 * 1. Operators can be used on strings and have differenct effects. Some operators will combine strings, or even compare
 * two strings, returning a boolean value. Some simply return NaN.
 * 2. Methods can be used on strings either to return information about the string, or to manipulate and change the string.
 * 3. Properties can give us information about the length of a string.
 */

// 1. Operators //

// The same + operator you use for adding two numbers can be used to concatenate two strings. 
const str = 'Hello' + ' ' + 'World';
console.log(str); // 'Hello World'

// or

let str = 'Hello';
str += ' ';
str += 'World';
console.log(str); // 'Hello World'

// To determine whether two strings are equal, you can use the strict equality operator ===. It returns false if the strings are 
// different and true, if they’re the same.
const s1 = 'learn';
const s2 = 'today';

console.log(s1 === 'learn');  // true
console.log(s1 === s2);       // false

// If you need to find which of two strings is longer, then the operators “greater than” and “lower than” won’t suit you well. 
// They compare the characters of a string in alphanumeric order one by one and consider the length of the strings in the very end.
const s1 = 'javascript';
const s2 = 'node.js';

console.log(s1 > s2); // false

//or

const s1 = 'javascript';
const s2 = 'node.js';

console.log(s1.length > s2.length); // true

// Some operators simply return NaN, and don't provide much use when applied to strings.

console.log("Hello" * "World!")  // logs NaN

// 2. Methods //
/*
The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first 
occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring 
at an index greater than or equal to the specified number.

Syntax:
indexOf(searchString)
indexOf(searchString, position)
*/

'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 0) // returns 0
'hello world'.indexOf('', 3) // returns 3
'hello world'.indexOf('', 8) // returns 8
'hello world'.indexOf('', 11) // returns 11
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11

// The indexOf() method is case sensitive. For example, the following expression returns -1:

'Blue Whale'.indexOf('blue')  // returns -1

// When checking if a specific substring occurs within a string, the correct way to check is test whether the return value is -1:

'Blue Whale'.indexOf('Blue') !== -1  // true; found 'Blue' in 'Blue Whale'
'Blue Whale'.indexOf('Bloe') !== -1  // false; no 'Bloe' in 'Blue Whale'

// The following example sets count to the number of occurrences of the letter e in the string str:

const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
  count++
  position = str.indexOf('e', position + 1)
}

console.log(count)  // displays 4

/*
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

Syntax
slice(beginIndex)
slice(beginIndex, endIndex)
*/

// The following example uses slice() to create a new string:

let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""

// The following example uses slice() with negative indexes.

let str = 'The morning is upon us.'
str.slice(-3)      // returns 'us.'
str.slice(-3, -1)  // returns 'us'
str.slice(0, -1)   // returns 'The morning is upon us'
console.log(str.slice(-11, 16)) // => "is u"
console.log(str.slice(11, -7)) // => " is u"
console.log(str.slice(-5, -1)) // => "n us"

/*
The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

The toLowerCase() method returns the calling string value converted to lower case.

Syntax
toUpperCase()

Syntax
toLowerCase()
*/

console.log('alphabet'.toUpperCase()); // 'ALPHABET'
console.log('ALPHABET'.toLowerCase()); // 'alphabet'

/*
The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

Syntax
charAt(index)
*/

const anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");

// These lines display the following:
// The character at index 0   is 'B'
// The character at index 1   is 'r'
// The character at index 2   is 'a'
// The character at index 3   is 'v'
// The character at index 4   is 'e'
// The character at index 999 is ''

/*
The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

Syntax
charAt(index)
*/

'Blue Whale'.includes('blue')  // returns false

// or

const str = 'To be, or not to be, that is the question.'
console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true

/*
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement
can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

Syntax
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)
*/

// The following example will set newString to 'abc - 12345 - #$*%':

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%

// or simply used:

var string = "hello"
console.log(string.replace('hel', 'hi')) // will log "hilo"

// 3. PROPERTIES //

/*
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
*/

var string = "hello"

console.log(string.length) // logs 5, the length of the string "hello"

console.log(string[string1.length-1]) // logs 'o' the value at the last index of "hello"

// or

let x = 'Samuel';
let empty = '';

console.log(x + ' is ' + x.length + ' code units long');
/* "Samuel is 6 code units long" */

console.log('The empty string has a length of ' + empty.length);
// expected output: "The empty string has a length of 0"