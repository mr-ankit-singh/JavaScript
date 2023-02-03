//#__ String methods __#

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 1)length of string (length) 🙋‍♂️

let myname = 'Ankit singh'
console.log(myname.length)

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 2) Finding a string in a string 🙋‍♂️

// indexof() 
//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string

let myBio = "My name is Ankit singh"
console.log(myBio.indexOf("Ankit"))

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.

// lastindexof()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate"));

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 3) Searching a string in string 🙋‍♂️

// search()
// The search() method searches a string for a specified value and returns the position of the match

let myIntro = "My name is Ankit singh . I am a good boy"
let sData = myIntro.search("Ankit")
console.log(sData)

// Did You Notice?
// The two methods, indexOf() and search(), are equal?
// They accept the same arguments (parameters), and return the same value?

// The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 4) Extracting string Parts 🙋‍♂️

/* 
   There are 3 methods for extracting a part of a string:
    -slice(start index number, end index number)
    -substring(start, end)
    -substr(start, length)
*/

// a) slice() Method

// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// NOTE : The oraginal string will not be changed

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
var res1 = str.slice(0, -3);
console.log(res1)
console.log(res)

// b) substring( Method)

// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
var res1 = str.substring(8, -3);// agar hm -ve daal dete hai toh woh 0th index se start kerta hai
console.log(res)
console.log(res1)

// c) substr() Method

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
var res1 = str.substr(0, -3);// return noting
console.log(res)
console.log(res1)

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 5) Replacing  string content 🙋‍♂️

//The replace() method replaces a specified value with another value in a string
//The replace() method does not change the string it is called on. 

//It returns a new string.

let str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(str)
console.log(n)

//By default, the replace() method replaces only the first match

str = "Please visit Microsoft! and Microsoft!" ;
var repStr = str.replace("Microsoft", "W3Schools");
console.log(repStr)

//By default, the replace() method is case sensitive

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");//It cannot replace it return the same string
console.log(n)

//To replace case insensitive, use a regular expression with an /i flag (insensitive)

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
console.log(n)

//To replace all matches, use a regular expression with a /g flag (global match)

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n)

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 6)Extracting string Characters 🙋‍♂️

/*
  There are 3 methods for extracting string characters:
    -charAt(position)
    -charCodeAt(position)
    -Property access [ ]
*/

// a)The charAt() Method

//The charAt() method returns the character at a specified index (position) in a string

var str = "HELLO WORLD";
let str1 = str.charAt(0);    
console.log(str1)    

// b)The charCodeAt() Method

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535)
//The Unicode standard provide a unique number foe every character , no matter the platform , device , application , or language.
//UTF-8 is a popular Unicode encoding encoding which has 88-bits code units.


var str = "HELLO WORLD";
console.log(str.charCodeAt(0));

// c)Property Access

//ECMAScript 5 (2009) allows property access [ ] on strings:

var str = "HELLO WORLD";
console.log(str[0])

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 7) Uppercase and Lowercase methods 🙋‍♂️

//A string is converted to upper case with toUpperCase()
//A string is converted to lower case with toLowerCase()

let myName = "Ankit singh"
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 8)The concat() Method 🙋‍♂️

// concat() joins two or more strings

var text1 = "Hello";
var text2 = "World";
// console.log(text1 + text2)
// console.log(`${text1} ${text2}`)
var text3 = text1.concat(" ", text2);
console.log(text3)

//The concat() method can be used instead of the plus operator. These two lines do the same

var text = "Hello" + " " + "World!";
var text1 = "Hello".concat(" ", "World!");
console.log(text)
console.log(text1)

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 9) String.trim() 🙋‍♂️

//The trim() method removes whitespace from both sides of a string

var str = "       Hello World!        ";
console.log(str.trim());

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/

// 10)Converting a String to an Array 🙋‍♂️

//A string can be converted to an array with the split() method

var txt = "a,b ,c | d,e";   // String
console.log(txt.split(","));          // Split on commas
console.log(txt.split(" "));          // Split on spaces
console.log(txt.split("|"));          // Split on pipe

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/