const emailid = "Adak.in"

if(emailid){
    console.log("got email");
}

// falsy value
//false , 0 , -0, bigInt 0n,"",null,undefined,NaN

// truthy value
//"0",'false'," ",[] ,{}, function(){}

if(emailid.length===0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??)

let val1;
val1 = 5??10
val1 = null ??10
val1 = undefined ??10
val1 = null?? 10 ?? 20

// terniary Operator

// condition ? true : false

const iceTeaPrice = 100