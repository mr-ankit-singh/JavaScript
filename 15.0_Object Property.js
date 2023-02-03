/*
#__ Object in Javascript __#

   -An object is a collection of key/value pairs or properties. 
   -When the value is a function, the property becomes a method. 
   -Typically, you use methods to describe the object behaviors.

*/

// Create an object
let person = {
    firstName : "Ankit",
    "last name" : "Singh",
    age : 21,
    
};

// Access object property
console.log(person.firstName)
console.log(person["last name"])
console.log(person["age"])

// Modify property
person.age = 22 ;
console.log(person["age"])

// We can now use dynammic property
var myName = 'Ankit singh'
const bioData = {
    [myName] : "Hello , how are you",
    [18+2] : "is my age"
}
console.log(bioData)

// no need to write key and value if both are same
var myName = 'Ankit singh'
let myAge = 20
// const myBio = {
//     myName : myName,
//     myAge : myAge
// }
const myBio={myName,myAge}
console.log(myBio)

// -------------------------------------------------------------------------------

let obj = {};   // --> blank object
let person1 = new Object;

person1.name = "Ankit Singh";
person1.sayHi = function(){
    console.log(`Hi ${person1.name}`)
}

console.log(person1.sayHi())