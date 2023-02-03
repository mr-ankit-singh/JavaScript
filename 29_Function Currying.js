/*
#__ Function Currying __#

    - Currying is a technique of evaluating function with multiple arguments, 
      into sequence of functions with single argument.
    - In other words, when a function, instead of taking all arguments at one time, 
      takes the first one and return a new function that takes the second one 
      and returns a new function which takes the third one, and so forth, 
      until all arguments have been fulfilled.

    + Uses of currying function
      a) It helps to avoid passing same variable again and again.
      b) It is extremely useful in event handling. 

   + syntax:
       function Myfunction(a) {
          return (b) => {
             return (c) => {
               return a * b * c
               }
              }
           }
*/

// sum(num10 (num2)(num3)

//1st mtd
function sum(num1){
    return function(num2){
        return function(num3){
            console.log(num1 + num2 + num3)
        }
    }
}
sum (5)(2)(6)
//2nd mtd
const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3)
sum (5)(2)(6)