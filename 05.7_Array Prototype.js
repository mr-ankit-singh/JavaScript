/*
#__ Array prototype forEach() __#

   - Call a function for each element in an array
   - forEach se hm array ke element or uska index number or array ek saat access kr sakte

*/

var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];

myFriends.forEach(function(element , index ,array){
    console.log(element + " index: "+ index + "  " + array)
});

var myFriends = ["Ankit", "Sophia" , "Khushi" , true ,98];
myFriends.forEach(function(element){
  console.log(element);
});

//By Fat Arrow Function
let flowers = ['Rose' , 'Lily',  'SunFlower' , 'Lotus' , 'Jasmine' ]
flowers.forEach(element => console.log(element))