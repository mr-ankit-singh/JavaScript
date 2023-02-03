/*
#__ Map and Reduce Method __#

   + Map Method
      - The map() method creates a new array with the results of calling a function for every array element.
      - The map() method calls the provided function once for each element in an array, in order.
      - Note: map() does not execute the function for array elements without values.
      - Note: this method does not change the original arra
      - Syntax:
            array.map(function(currentValue, index, arr), thisValue)

   + Reduce Method
      - Flatten an array means to convert the 3d or 2d array into a single dimensional array
      - The reduce() method reduces the array to a single value.
      - The reduce() method executes a provided function for each value of the array (from left-to-right).
      - The return value of the function is stored in an accumulator (result/total).
      - Note: reduce() does not execute the function for array elements without values.
      - Note: This method does not change the original array.
      - The reduce function take 4 arguments
      - Syntax:
            array.reduce(function(total/accumulator, currentValue, currentIndex, arr), initialValue) 

*/

/*-------------------------- Map Method  ----------------------------------- */

const array1 = [1, 4, 9 , 16, 35 ]
//num > 9
let newArr = array1.map((curElement , index ,arr) => {
    return curElement >9;
})
console.log(array1)
console.log(newArr)

let newArray = array1.map((curElement , index , arr) => {
    return `Index no = ${index} and the value is ${curElement} belong to ${arr}`
})
console.log(newArray)

/*------------------------- Reduce Method   ---------------------------------- */

let arr = [5, 6, 2]
let sum = arr.reduce((accumulator , curElem ,index , arr) => {
    return accumulator += curElem
})
console.log(sum)

//How to flatten an array
//converting 2d and 3d array into 1d array

const arr1 = [
    ['zone1' ,'zone2'],
    ['zone1' ,'zone2'],
    ['zone1' ,'zone2'],
    ['zone1' ,'zone2']
];
let flatArr = arr1.reduce((accum ,curElem) =>{
    return accum.concat(curElem)
})
console.log(flatArr)