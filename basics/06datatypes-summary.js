// Primitive
//-> its akways call by value
// 7 types : String, Number, Boolean ,null , undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.4

const isloggedIn = false

let userEmail;

const id = Symbol('123')
const idanother = Symbol('123')

// console.log(id === idanother)

const bigNumber = 3556855456545558625455n
console.log(bigNumber)


// Reference type(Non - primitive)

// Array , Objects, Functions

const heros = ["sh","ndi","dujd"]

let myObj = {
    names:"Adarsh",
    age:22,
}

const myfunction = function(){
    console.log("Hello chutiya");
}

console.log(typeof bigNumber);
console.log(typeof myfunction);

//***************************************

//Stack(Primitive), Heap(Non-Primitive)