const accountId = 1234
let accountEmail="pprincekumar598@gmail.com"
var accountPassword ="12345"
accountCity = "ALLAHABAD"

// accountId = 2 not allowed

accountEmail="a@gma.com"
accountPassword="8090"
accountCity = "BENGALURU"

let accountstate;

console.log(accountId)
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])