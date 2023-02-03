/*
#__ New Features in ECMAScript 2017 __#

  This chapter introduces the new features in ECMAScript 2017:
      -JavaScript String padding
      -JavaScript Object.entries
      -JavaScript Object.values
      -JavaScript async functions
      -JavaScript shared memory
*/

// 1) JavaScript String Padding 🙋‍♂️

// ECMAScript 2017 added two String methods
// padStart and padEnd to support padding at the beginning and at the end of a string.

// padStart()
let str = "5";
str = str.padStart(4);
console.log(str)
// if we want value at starting(padding space)
let padding = 'Ankit'
padding = padding.padStart(10,1);
console.log(padding)

//padEnd
let str1 = "5";
str1 = str1.padEnd(4);
console.log(str1)
// if we want value at ending(padding space)
let padding1 = 'Ankit'
padding1 = padding1.padEnd(10,1);
console.log(padding1)


// 2) JavaScript Object Values 🙋‍♂️
// Object.values are similar to Object.entries, but returns a single dimension array of the object values:
// This mtds returns an array containing all the object own property value
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
};
console.log(Object.values(person));


// 3) JavaScript Object Entries 🙋‍♂️
// ECMAScript 2017 adds a new Object.entries method to objects
const person1 = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
};
console.log(Object.entries(person1));