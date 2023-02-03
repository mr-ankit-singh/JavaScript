/*
#__ Deep Copy and Shallow Copy __#

   -call by value      =>  Deep copy     =>  Immutable object
   -call by reference  =>  Shallow copy  =>  Mutable object
   -Primitive Types are immutable and its always create deep copy.
   -Non Primitive Types are mutable and its always create shallow copy.

   -To copy an object in JavaScript, you have three options:
       Use the spread (...) syntax
       Use the Object.assign() method
       Use the JSON.stringify() and JSON.parse() methods
*/
//! Note: Both spread (...) and Object.assign() perform a shallow copy 
//! while the JSON methods carry a deep copy.

//! Method to create a shallow copy

// Mtd:1 (Spread Operator)
let Member = {
    firstName: 'Jasmine',
    lastName: 'Singh',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};
let copiedMember = {...Member};

copiedMember.firstName = 'Janny'; 						// disconnected
copiedMember.address.street = 'Parkway'; 				// connected
copiedMember.address.city = 'Mountain View'; 			// connected

console.log(Member)
console.log(copiedMember);

// Mtd:2 (Object.assign())
let person = {
    firstName: 'Jasmine',
    lastName: 'Singh',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};
let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Janny'; 						// disconnected
copiedPerson.address.street = 'Parkway'; 				// connected
copiedPerson.address.city = 'Mountain View'; 			// connected

console.log(person)
console.log(copiedPerson);

/*------------------------------------------------------------------------------------------------*/
//! Method to create a deep copy of non-primitive types
// Mtd:1 (JSON.stringfy()) 🙋‍♂️

let realVal = { name:'Jasmine' , age:21 }
let copiedVal = JSON.parse(JSON.stringify(realVal))
console.log(realVal)
console.log(copiedVal)

copiedVal.name = 'Rose'   // make change in copiedValue
console.log(realVal)
console.log(copiedVal)
// In this case changes not reflected to originalValue.

//! Disadvantage
// when you have function in your object and that time 
// JSON.stringfy() not copy the object accurately.
let realVal1 = { 
   name:'Jasmine' , 
   age:21 , 
   getDetail : function(){
      return this.name , this.age ;
   }
}
let copiedVal1 = JSON.parse(JSON.stringify(realVal1))
console.log(realVal1)
console.log(copiedVal1)

copiedValue1.name = 'Rose'   
console.log(realVal1)
console.log(copiedVal1)