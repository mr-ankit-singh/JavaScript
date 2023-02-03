//#__ Traversal in Array __#

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/
//1)Length of an Array

var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
console.log(myFriends.length ) //myFriend.length() wrong bcz length is property not a function

console.log(myFriends) // Give list 

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/
// Use for loop to navigate

for(var i=0 ; i<myFriends.length;i++){
    console.log(myFriends[i])
}

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/
// Use for/in loop to navigate
// for-in loop hma elements ka index number deta hai
var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
for(let elements in myFriends){
    console.log(elements)
}

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/
//Use for/of loop to navigate
//for-of loop hma list ke elements show kerta hai
var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
for(let elements of myFriends){
    console.log(elements)
}

/*───────────────────────────────────────────────────────────────────────────────────────────────────*/
//! Array prototype forEach()
// Call a function for each element in an array
// forEach se hm array ke element or uska index number or array ek saat excess kr sakte
var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
myFriends.forEach(function(element , index ,array){
    console.log(element + " index: "+ index + "  " + array)
});

//using fat arrow function
var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
myFriends.forEach((element , index ,array) => {
    console.log(element + " index: "+ index + "  " + array)
});

let baby =['Nandini' , 'Sophia' , 'Khushi']
baby.forEach((element , index , array) => {
    console.log(`At index ${index} my ${element} baby lives`)
}) 

let flower = ['Rose' , 'Lily' , 'SunFlower']
flower.forEach( element => console.log(element))