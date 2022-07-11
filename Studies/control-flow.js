/* 
 * CONTROL-FlOW:
 * 0. The control flow is the order in which the computer executes statements in a script. Code is run in order from the first line in the 
 * file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as 
 * conditionals and loops. For example, imagine a script used to validate user data from a webpage form. The script submits validated data, 
 * but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a conditional 
 * structure or if...else, so that different code executes depending on whether the form is complete or not. A typical script in JavaScript 
 * or PHP (and the like) includes many control structures, including conditionals, loops and functions. Parts of a script may also be set to 
 * execute when events occur. Control flow means that when you read a script, you must not only read from start to finish but also look at 
 * program structure and how it affects order of execution.
 */ 
if (field==empty) {
    promptUser();
} else {
    submitForm();
}
 /* 
 * For example, the above excerpt might be inside a function that runs when the user clicks the Submit button for 
 * the form. The function could also include a loop, which iterates through all of the fields in the form, checking 
 * each one in turn. Looking back at the code in the if and else sections, the lines promptUser and submitForm 
 * could also be calls to other functions in the script. As you can see, control structures can dictate complex 
 * flows of processing even with only a few lines of code.
 * 
 * A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports 
 * two conditional statements: if...else and switch.
 */

// 1. If //

// The "IF" statement uses the keyword "IF" follow by a condition. if the condition is true, the proceeding code
// will run. The condition can be any boolean value / boolean expression.

// For Example:
if (condition = true) {
    code will run here;
};

// 2. Else-if //

// The "ELSE-IF" statement will allow you to chain conditional statements with the key-word "ELSE-IF". If the previous
// "IF" statement returned false, then the "ELSE-IF" statement will be reached. Then, similar to the "IF" statement, if the
// "ELSE-IF" statement returns true, the proceeding code will run.

// For Example:
if (condition = false) {
    code skipped;
}
else if (conition = false) {
    code skipped;
}
else if (condition = true) {
    code will run here;
};

// 3. Else //

// The "ELSE" statement will be the final "default" statement at the end of the control-flow. If none of the previous 
// "IF" or "ELSE-IF" statements were met, then this final code will be met. This can also be useful for catching errors.

// For Example:
if (condition = false) {
    code skipped;
}
else if (conition = false) {
    code skipped;
}
else if (condition = false) {
    code skipped;
}
else {
    code will run here;
};

// 4. Switch //

// A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a 
// case label. If a match is found, the program executes the associated statement.

// For Example:
switch (expression) {
  case label_1:
    statements_1;
    break;
  case label_2:
    statements_2;
    break;
  default:
    statements_default;
}

// JavaScript evaluates the above switch statement as follows:

// The program first looks for a case clause with a label matching the value of expression and then transfers control 
// to that clause, executing the associated statements.
// If no matching label is found, the program looks for the optional default clause:
// If a default clause is found, the program transfers control to that clause, executing the associated statements.
// If no default clause is found, the program resumes execution at the statement following the end of switch.
// (By convention, the default clause is written as the last clause, but it does not need to be so.)