// Constractor Function

function Person( first , last , age){
    this.firstName = first ;
    this.lastName = last ; 
    this.age = age ;

    this.sayHi = function(){
        console.log("Hi..")
    }
}

let person1 = new Person("Ankit" ,"Singh" , 21) ;
let person2 = new Person("Nandini" ,"Jain" , 21) ;

console.log(person1)
console.log(person2)