/*
#__ Hoisting in Javascript __#

   -Hoisting is JavaScript's default behavior of moving declarations to the top
   -Hoisting in Javascript is a mechanism where variables and functions declaration are moved
    on the top of their scope before the code execution
    
   -Using a const and let variable before it is declared, is a syntax errror, so the code will 
    simply not run.

*/

console.log(myName);
var myName;
myName = 'Ankit singh';