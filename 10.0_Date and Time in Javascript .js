/*
#__ Date and Time in Javascript __#

   + Creating Date Objects
     -Date objects are created with the new Date() constructor.

   + There are 4 ways to create a new date object:
      -new Date()
      -new Date(year, month, day, hours, minutes, seconds, milliseconds)
      -new Date(milliseconds)
      -new Date(date string)

*/

// a) new Date() 🙋‍♂️
// new Date() creates a new date object with the current date and time:

let currDate = new Date()
console.log(currDate)
// it give a perfect date and time in editer
console.log(new Date().toLocaleString()) // 5/8/2021, 1:28:37 PM
console.log(new Date().toString()) //  Sat May 08 2021 13:29:38 GMT+0530 (India Standard Time)

// Date.now()
// Return the numeric value corresponding to the current time  -- the number of millisecond elapsed 
// since jan 1,1970 00:00:00 UTC

console.log(Date.now())


// b) new Date(year, month, ...) 🙋‍♂️

// new Date(year, month, ...) creates a new date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.

var d = new Date(2021, 0, 5, 10, 33, 30, 0);
console.log(d.toLocaleString())
console.log(d.toString())

// c) new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string:

var d = new Date("October 13, 2021 11:13:00");
console.log(d)
console.log(d.toLocaleString())


// d) new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds

var d = new Date(0)
console.log(d)
console.log(d.toLocaleString())




