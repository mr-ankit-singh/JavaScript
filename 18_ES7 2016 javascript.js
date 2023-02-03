// 1: JavaScript Array.prototype.includes

// ECMAScript 2016 introduced Array.prototype.includes to arrays.
// This allows us to check if an element is present in an array
const mycolor = ['red' , 'blue' , 'green' , 'orange' , 'yellow' , 'black']
const isPresent = mycolor.includes('red')
console.log(isPresent)

// 2: Exponentiation Operator

// The exponentiation operator (**) raises the first operand to the power of the second operand.
let x = 5;
let z = x ** 2; 
console.log(z)
// x ** y produces the same result as Math.pow(x, y)
let y = 5;
let p = Math.pow(x,2); 
console.log(p) 

// 3: Exponentiation Assignment

// The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.

let d = 5;
d **= 2; 
console.log(d)