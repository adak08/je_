const name = "Adarsh"
const repocount = 350

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('adarsh kumar')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,9)
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newStringone = "   Adarsh   "
// console.log(newStringone)
// console.log(newStringone.trim())
// console.log(newStringone.trimEnd())
// console.log(newStringone.trimStart())

const url = 'https://youtu.be/fozwNnFunlo'

console.log(url.replace('youtu.be','--'));

console.log(url.includes('sun'))

console.log(gameName.split('kumar'))
