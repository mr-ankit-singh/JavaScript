// Add Dec at the end of an Array
var months = ['jan' , 'feb' ,'april', 'june' , 'august' , 'october' , 'november']
months.push('Dec')
console.log(months)

//Find the square root of each element in an array
 let ar = [25, 36, 49, 64, 81]
 let arrSqr = ar.map((curElem) => {
     return Math.sqrt(curElem);
 })
 console.log(ar)
 console.log(arrSqr)

// Multiply each element by 2 and return only those elements which are grater than 10 ?

let arr = [2, 3 , 4, 6, 8]
let arr2 = arr.map((curElem) =>{
    return curElem * 2
}).filter((curElem) => {
    return curElem > 10
})
//this same code in 1 line
// let arr2 = arr.map((curElem) => curElem * 2 ).filter((curElem) => curElem > 10);
console.log(arr2)

