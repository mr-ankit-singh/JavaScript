/*
#__ Object Oriented Programming __#

   + Object Literals *
     - Object literal is simply a key:value pair of data structure.
     - Storing variables and functions together in one container.
     -You define (and create) a JavaScript object with an object literal

   + Object Properties *
     -The name:values pairs in JavaScript objects are called properties

   + Accessing Object Properties *
     -You can access object properties in two ways:
     +1) objectName.propertyName
               or
     +2) objectName["propertyName"]

  Note:
    OOps Donot repete yourself (DRY)
    Syntax to create class: class className{ .... }
    Syntax to create object: let objName = new className();

*/

// Creat an Object 🙋‍♂️
// 1st mtd
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullDetail : function() {
      console.log(`My name is ${person.firstName} ${person.lastName} and my Id is ${person.id}`)
    }
  };
console.log(person.firstName)
console.log(person.lastName)
console.log(person.id)
person.fullDetail()


// 2nd mtd 
//No need to write function as well after es6
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 55,
    fullDetail() {
      console.log(`My name is ${person.firstName} ${person.lastName} and my Id is ${person.id}`)
    }
};
console.log(person.firstName)
console.log(person.lastName)
console.log(person.id)
person.fullDetail()

// 3rd mtd
//What if we want object as a value inside an object
var person = {
    firstName: {
        realName : 'Ankit singh',
        channelName : 'youtube'
    },
    lastName : "Doe",
    id       : 55,
    fullDetail() {
      console.log(`My name is ${person.firstName} ${person.lastName} and my Id is ${person.id}`)
    }
};
console.log(person.firstName.realName)
console.log(person.firstName.channelName)

/*
#__ The this Keyword __#

   -In a function definition, this refers to the "owner" of the function.
   -The definition of 'this' object that is that it contain the current content
   -The 'this' object can have different values depending on where it is placed

*/

// Ex:1
console.log(this);
//it refers to the current context and that is window global object


// Ex:2
function myName(){
    console.log(this);
}
myName();
//it also refers to the current context and that is window global object


// Ex:3
var myNames = "ankitsingh";
function myName(){
    console.log(this.myNames);
}
myName();


// Ex:4
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName())