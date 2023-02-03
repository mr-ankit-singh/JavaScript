//#__ Maths Objects in Javascript __#

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// Property

// 1) Math.PI 🙋‍♂️
// Gives the value of PI
console.log(Math.PI) 

// 2) Math.round() 🙋‍♂️
// return the value rounded to its nearest integer
let num = 10.2356
console.log(Math.round(num))

// 3) Math.pow() 🙋‍♂️
// Math.pow(x,y) return thevalue of x to the power of y
console.log(Math.pow(2 , 6))

// 4) Math.sqrt() 🙋‍♂️
// return the square of value
console.log(Math.sqrt(9))

// 5) Math.abs() 🙋‍♂️
// Math.abs(x) return the absolute(+ve) value of x
console.log(Math.abs(-89))
console.log(Math.abs(-8.9))

// 6) Math.ceil() 🙋‍♂️
//Math.ceil(x)	Returns x rounded up to its nearest integer
console.log(Math.ceil(-4.1))
console.log(Math.ceil(11.2))
console.log(Math.ceil(11.5))

// 7) Math.floor()🙋‍♂️
//Math.floor(x) returns the value of x rounded down to its nearest integer
console.log(Math.floor(-4.1))
console.log(Math.floor(11.2))
console.log(Math.floor(11.5))

// 8) Math.trunc()🙋‍♂️
//Math.trunc(x) returns the integer part of x
console.log(Math.trunc(-4.1))
console.log(Math.trunc(1.2))
console.log(Math.trunc(90.5))

// 9) Math.min() and Math.max()🙋‍♂️
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log(Math.max(0, 150, 30, 20, -8, -200))

// 10) Math.random()🙋‍♂️
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random()) // return number b/w 0 to 1
console.log(Math.random()*10) // return number b/w 1 to 10 but in decimal form
console.log(Math.floor(Math.random()*10)) // return number b/w 0 to 9


// 11) Math.exp()🙋‍♂️
//exp(x)  Returns the value of Ex
console.log(Math.exp(0))
console.log(Math.exp(10))


// 12) Math.log()🙋‍♂️
//log(x)  Returns the natural logarithm (base E) of x
console.log(Math.log(1))
