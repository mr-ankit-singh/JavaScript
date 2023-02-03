//#__Perform CRUD (Create Read Update Delete) __#

// 1) push() mtd 🙋‍♂️
//The push() method adds a new element to an array (at the end)
//The push() method returns the new array length

var animals = ['lion' , 'tiger' ,'elephant']

const count = animals.push('leopard' ,'girrafe')
console.log(animals)
console.log(count)

// 2) unshift() mtd 🙋‍♂️
//The unshift() add one or more element at the beginning of an array
//It also return a new length of an array

animals.unshift('dear','bear')
console.log(animals)

// 3)pop() mtd 🙋‍♂️
//The pop() method removes the last element from an array and return that element

var animals = ['lion' , 'tiger' ,'elephant']
console.log(animals)
console.log(animals.pop())
console.log(animals)

// 4) shift() mtd 🙋‍♂️
//The shift() mtd remove the first element from an array and returns that remove element.
const plants = ['brokoli' , 'potato' , 'kale' ,'tomato']
console.log(plants)
console.log(plants.shift())
console.log(plants)

// 5) splice() mtd 🙋‍♂️
// The splice() method can be used to add/remove new items to an array
// The first parameter defines the position where new elements should be added (spliced in).
// The second parameter defines how many elements should be removed.
// The rest of the parameters define the new elements to be added.
// The splice() method returns an array with the deleted items

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");// 2 index per 0=kuch delete nahi krna hai / lemon or kiwi ko update krna hai
console.log(fruits)

//Remove 1 element
fruits.splice(0, 1);  
console.log(fruits)

//Remove 2 elements
console.log(fruits.length)
fruits.splice(2, 2, "Guavava");
console.log(fruits)
console.log(fruits.length)

//Copy same array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let copyFruits = fruits.slice(0)
console.log(copyFruits)
