/*
#__ New Features in ECMAScript 2018 __#

  This chapter introduces the new features in ECMAScript 2018:
      -Asynchronous Iteration
      -Promise Finally
      -Object Rest Properties
      -New RegExp Features
*/

// 1) Object Rest/spread property 🙋‍♂️
const mycolor = {1:'red' , 2:'blue' , 3:'green' , 4:'orange' , 5:'yellow' , 6:'black'}
const myFavColor = { ...mycolor };
console.log(mycolor)
console.log(myFavColor)