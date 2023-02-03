/*
#__ JavaScript Strings __#

   -JavaScript strings are used for storing and manipulating text.
   -A JavaScript string is zero or more characters written inside quotes.
   -we can use single code and double quotes

*/

let myName = 'Ankit singh'
let aboutMe = "I am A good boy"
console.log(myName)
console.log(aboutMe)

/*
#__ Escape Character __#

   -Because strings must be written within quotes, JavaScript will misunderstand this string:
   -The string will be chopped to "We are the so-called ".
   -The solution to avoid this problem, is to use the backslash escape character.
   -The backslash (\) escape character turns special characters into string characters:
   + Code	Result	Description
     \'  	'	    Single quote
     \"  	"	    Double quote
     \\  	\	    Backslash
	 
*/

var x = "We are the so-called \"Vikings\" from the north.";
console.log(x)