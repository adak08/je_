// array 

const myArr = [0 , 1 , 2 ,4 , 5]
const myMarvel = ["spidy"]

const myArr2 = new Array(1,4,2,6,7)

// console.log(myArr[0]);
// it always make shallow copy

// Array methods

myArr.push(9)
// console.log(myArr[4])

myArr.pop();

myArr.unshift(10)
// console.log(myArr)

myArr.shift()
//console.log(myArr)
// console.log(myArr.includes(11))
// console.log(myArr.indexOf(5))

const newArr = myArr.join() // it convert strings

// slice ,splice

console.log(" A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log(" B ", myArr);

const myn2 = myArr.splice(1,3);// it delete the element from original array
console.log(" C", myArr);
console.log(myn2);
