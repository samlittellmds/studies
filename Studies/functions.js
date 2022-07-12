/*
 * FUNCTIONS:
 * 0. Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements 
 * that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there 
 * is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
 * In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from 
 * other objects is that functions can be called. In brief, they are Function objects.
 * 1. To return a value other than the default, a function must have a return statement that specifies the value to return. A function without a return statement 
 * will return a default value. In the case of a constructor called with the new keyword, the default value is the value of its this parameter. For all other functions, 
 * the default return value is undefined. The parameters of a function call are the function's arguments. Arguments may be passed by value (in the case of primitive values) 
 * or by reference (in the case of objects). This means that if a function reassigns a primitive type parameter, the value won't change outside the function. In the case of 
 * an object type parameter, if its properties are mutated, the change will impact outside of the function.
 * 2. There are two parts of a functions syntax: the declaration (function statement) and the call. The declaration defines a function with the specified parameters,
 * while the call provides the function with a given value and argument(s). The code inside a function is not executed when the function is defined, the code inside a function 
 * is executed when the function is called or "invoked". 
 * 3. Declared functions can also be assigned to a variable.
 * 4. Functions can take in inputs with their assigned parameters and return a value. The function can be invoked with arguments which then get passed through the function
 * per parameter(s).
 * 5. Functions are effected by hoisting, function declarations are hoisted to the top of their current scope, function expressions are not hoisted onto the beginning of the scope, 
 * but instead only put into memory when the function expression is invoked.
 * 6. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives 
 * you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
 */

// 1. Defining & Calling (Invoking) Functions // 

// Function declarations //
// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.
// For example, the following code defines a simple function named square:

function square(number) {
    return number * number;
  }
  
  // The function square takes one parameter, called number. The function consists of one statement that says to return the parameter of the function (that is, number) multiplied by itself. 
  // The statement return specifies the value returned by the function:
  
  return number * number;
  
  // Calling functions // 
  // Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.
  
  // Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows:
  
  square(5);
  
  // The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.
  
  // Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:
  
  console.log(square(5));
  /* ... */
  function square(n) { return n * n }
  
  // The scope of a function is the function in which it is declared (or the entire program, if it is declared at the top level).
  
  // The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function. The showProps() function 
  // (defined in Working with objects) is an example of a function that takes an object as an argument.
  
  // 2-3. Function Statements & Function Expressions // 
  
  // The function declaration (function statement) //
  
  // There is a special syntax for declaring functions:
  
  function name([param[, param[, ... param]]]) {
     statements
  }
  
  // name - The function name.
  // param - The name of an argument to be passed to the function.
  // statements - The statements comprising the body of the function.
  
  // The function expression (function expression) // 
  
  // A function expression is similar to and has the same syntax as a function declaration. A function expression may be a part of a larger expression. 
  // One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions. 
  // Function expressions are not hoisted onto the beginning of the scope, therefore they cannot be used before they appear in the code.
  
  // Here is an example of an anonymous function expression (the name is not used), while also assigning the function to a variable:
  
  var myFunction = function() {
      statements
  }
  
  // It is also possible to provide a name inside the definition in order to create a named function expression, while also assigning the function to a variable:
  
  var myFunction = function namedFunction() {
      statements
  }
  
  // 4. Parameters and Arguments //
  
  // Parameters are variables listed as a part of the function definition.
  // Arguments are values passed to the function when it is invoked.
  
  // Basic function with three parameters that logs the sum of all the parameters
  function argCheck(parameter1, parameter2, parameter3){
      console.log(parameter1 + parameter2 + parameter3);
    }
    
    // Function with extra arguments
    argCheck(1,2,3,4);
    // Logs 6 (1 + 2 + 3, ignores 4)
    
    // Function with missing arguments
    argCheck(1,2);
    // Logs NaN because by default if a corresponding argument is missing, it is set to undefined. 
    // parameter3 is assigned undefined and so 1+2+undefined = NaN
    
    // Note that, no error is thrown
  
    // 5. Function Hoisting //
  
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
  
  // Hoisting in terms of declarations and expressions // 
  
  // Function declarations
  // These are of the following form and are hoisted completely to the top. Now, we can understand why JavaScript enable us to invoke a function seemingly before declaring it.
  
  hoisted(); // Output: "This function has been hoisted."
  
  function hoisted() {
    console.log('This function has been hoisted.');
  };
  
  // Function expressions
  // Function expressions, however are not hoisted.
  
  expression(); //Output: "TypeError: expression is not a function
  
  var expression = function() {
    console.log('Will this work?');
  };
  
  // Let’s try the combination of a function declaration and expression.
  
  expression(); // Ouput: TypeError: expression is not a function
  
  var expression = function hoisting() {
    console.log('Will this work?');
  };
  // As we can see above, the variable declaration var expression is hoisted but it’s assignment to a function is not. Therefore, 
  // the intepreter throws a TypeError since it sees expression as a variable and not a function.
  
  // 6. Closure //
  
  // Consider the following code example:
  
  function makeFunc() {
    var name = 'Samuel';
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();
  
  /*
  Running this code has exactly the same effect as the previous example of the init() function above. What's different (and interesting) is that the displayName() inner function is returned from the 
  outer function before being executed.
  
  At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function 
  exist for just the duration of that function's execution. Once makeFunc() finishes executing, you might expect that the name variable would 
  no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.
  
  The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within 
  which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. 
  In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName 
  maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name 
  remains available for use, and "Samuel" is passed to alert.
  */