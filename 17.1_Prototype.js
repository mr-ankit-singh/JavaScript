// Prototype and Inheritance

//Note : jb v hm object banate hai tb prototype name se object khud se attach ho jta hai
// Prototype her object me aake khud se attach ho jta hai

let person1 = {} ;
console.log(person1)


let person2 = {
    name : "Ankit singh"
}
console.log(person2)
// hasOwnProperty() : inbuilt mtd hai , joki check krta hai ki yeh peh property us object ka hai ki nahi
console.log(person2.hasOwnProperty('name'))


// constructor function

function Person( first , last , age){
    this.firstName = first ;
    this.lastName = last ; 
    this.age = age ;  
}

let person3 = new Person("Ankit" ,"Singh" , 21) ;
console.log(person3)


// Prototype Inheritance

function Person(first, last , age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    //create method of constructor function
    this.detail = function(){
        console.log(`My name is ${this.firstName }${this.lastName} & i'm ${this.age}`)
    }
}

let per1 = new Person('Ankit','Singh',21)
console.log(per1)
//es me sera property or mtd prototype me jake copy ho jte hai..
//property alag alag hoga alag alag object ka toh koi problem nahi hai
//per mtd v copy hoga jo DRY follow nahi keraha
//es ko overcome krne ke liya hm prototype  use krte hai


function Person(first, last , age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;  
}
//create method of constructor function in Person prototype
Person.prototype.detail = function(){
    console.log(`My name is ${this.firstName }${this.lastName} & i'm ${this.age}`)
}
let per2 = new Person('Ankit','Singh',21)
console.log(per2)