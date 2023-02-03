// Fat Arrow function

//Normal way of writing function
console.log(sum())
function sum(){
    let a=10 ,b=10;
    let sum = a+b;
    return `the sum of two number is ${sum}`;
}
//(es mtd me hm function ko phela call kr sakte hai agar define baad me kra toh)

//Convert into fat arrow function

const sum = () => {
    let a=10 ,b=10;
    let sum = a+b;
    return `the sum of two number is ${sum}`;
}
console.log(sum());
//(Esme function ko define kerna hoga fir call ker sakte phela call nahi ker sakte)

/*
#__ Difference b/w Normal function and Fat Arrow Function __#

   - The scope of 'this' are very different in normal function and fat arrow function.
   - Arrow function have lexical this scope.
   - We can't create constructor using Arrow function.
   - Arrow function are not hoisted.
   - We can't access argumentes object inside arrow function.
   - Way of writing both function are different.
   
*/

var Person = {
    "name":"Ankit Singh",
    getName : function(){
        console.log(this);       // { name: 'Ankit Singh', getName: [Function: getName] }
        console.log(this.name);  // Ankit singh
    }
}
Person.getName();

/*--------------------------------------------------------------------------------------------------*/
// In this case this belong to window objest
var Person = {
    "name":"Ankit Singh",
    getName : function(){
        console.log(this);       // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
        console.log(this.name);  // undefined
    }
}
const callPerson = Person.getName;
callPerson();

/*--------------------------------------------------------------------------------------------------*/
// In this it takes a window object because we call function independently.
var Person = {
    "name":"Ankit Singh",
    getName : function(){
        function xyz(){
            console.log(this);       // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
            console.log(this.name);  // undefined
        } 
        xyz();
    }
}
Person.getName();

/*-------------------------------------------------------------------------------------------------*/
// To solve the proble we can bind the function using call() method
// 1st mtd
var Person = {
    "name":"Ankit Singh",
    getName : function(){
        function xyz(){
            console.log(this);       // {name: 'Ankit Singh', getName: ƒ}
            console.log(this.name);  // Ankit singh
        } 
        xyz.call(this);
    }
}
Person.getName();

// 2nd mtd
var Person = {
    "name":"Ankit Singh",
    getName : function(){
        function xyz(){
            var self = this;
            console.log(self);       // {name: 'Ankit Singh', getName: ƒ}
            console.log(self.name);  // Ankit singh
        } 
        xyz();
    }
}
Person.getName();

// ANOTHER using arrow function
var Person = {
    "name":"Ankit Singh",
    getName : function(){
        const xyz = () =>{
            console.log(this);       // {name: 'Ankit Singh', getName: ƒ}
            console.log(this.name);  // Ankit singh
        } 
        xyz();
    }
}
Person.getName();