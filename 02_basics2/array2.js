const MCU = ["thor","Ironman","spiderman"]
const dc = ["superman ",'Batman',"Flash"]

// MCU.push(dc);

// console.log(MCU);

const allheroes = MCU.concat(dc)

// console.log(allheroes)

const all_newheroes = [...MCU,...dc]
//console.log(all_newheroes)

const another_array =[1,2,3,[4,5,6],7,[6,7,[5,3,2]]]

const real_array = another_array.flat(Infinity)
//console.log(real_array)


console.log(Array.isArray("Adarsh"))
console.log(Array.from("Adarsh"))
console.log(Array.from({name: "Adarsh"}));//it not directly convert dict into you hav to specify

let score1 = 200
let score2 = 250
let score3 = 350

console.log(Array.of(score1,score2,score3));
