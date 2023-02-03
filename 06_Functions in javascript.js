/*
#__ JavaScript Functions __#

  -A JavaScript function is a block of code designed to perform a particular task.
  -A JavaScript function is executed when "something" invokes it (calls it).

  + JavaScript Function Syntax
    -A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
    -Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
    -The parentheses may include parameter names separated by commas:
      (parameter1, parameter2, ...)
    -The code to be executed, by the function, is placed inside curly brackets: {}

    + Syntax:
        function functionName(parameter1, parameter2, parameter3) {
          // code to be executed
        }
*/

function sum() {
  var a = 10,
    b = 10;
  var total = a + b;
  console.log(total);
}
sum();


/*------------------------- Interview Questions ------------------------------- */

// What is difference b/w Function Parameter and Function Argument
// Function parameter are the names listed in the function's definition
// Function Argument are the real values passed to the function

function sum(a,b){ // a,b are parameter
  var total = a+b;
  console.log(total)
}
sum(); // return NaN bcz it has no argument
sum(10 , 20);// 10 , 20 are arguments


/* 
Why Functions ?
 -You can re use code: Define the code once and use it many times
 -You can use the same code many times with differnt arguments,to produce differnt result

 or

 -A function is a group of reusable code which can be called anywhere in you program
 -This eliminte the need of writing the same code again and again
*/