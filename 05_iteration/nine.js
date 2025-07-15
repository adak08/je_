const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc , currval) { 
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0)

// const mytotal = myNums.reduce((acc, curr)=> acc+ curr,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 999
    },
    {
        itemName: "web3 course",
        price: 3999
    },
    {
        itemName: "mobdev course",
        price:5999
    }
]

const total = shoppingCart.reduce((acc ,item)=> acc + item.price,0)
console.log(total);
