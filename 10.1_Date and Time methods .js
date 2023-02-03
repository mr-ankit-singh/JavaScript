/*
#__ JavaScript Get Date Methods __#

   -These methods can be used for getting information from a date object:

   + Method	            Description
     getFullYear()	      Get the year as a four digit number (yyyy)
     getMonth()	        Get the month as a number (0-11)
     getDate()	          Get the day as a number (1-31)
     getHours()	        Get the hour (0-23)
     getMinutes()	      Get the minute (0-59)
     getSeconds()	      Get the second (0-59)
     getMilliseconds()	  Get the millisecond (0-999)
     getTime()	          Get the time (milliseconds since January 1, 1970)
     getDay()	          Get the weekday as a number (0-6)
     Date.now()      	  Get the time. ECMAScript 5.

*/

// How to get the individual date
const curDate = new Date()  
console.log(curDate.toLocaleString())
console.log(curDate.getFullYear())
console.log(curDate.getMonth())
console.log(curDate.getDate())
console.log(curDate.getDay())

// How to get the individual time
const curTime = new Date()  
console.log(curTime.toLocaleString())
console.log(curTime.getHours())
console.log(curTime.getMinutes())
console.log(curTime.getSeconds())
console.log(curTime.getMilliseconds())
//The getTime() mtd retrn the number of millisecond since jan 1, 1970
console.log(curTime.getTime())


/*
#__ JavaScript Set Date Methods __#

   - Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
   + Set Date Methods
      - Set Date methods are used for setting a part of a date:
      + Method	            Description
        setDate()	          Set the day as a number (1-31)
        setFullYear()      	Set the year (optionally month and day)
        setHours()	        Set the hour (0-23)
        setMilliseconds()	  Set the milliseconds (0-999)
        setMinutes()	      Set the minutes (0-59)
        setMonth()	        Set the month (0-11)
        setSeconds()	      Set the seconds (0-59)
        setTime()	          Set the time (milliseconds since January 1, 1970)
		
*/

let curDatee = new Date()
console.log(curDatee.setFullYear(2021))

let curTimee = new Date()
console.log(curTimee.setMinutes(10))
