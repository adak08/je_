// const tinderUser = new Object()//singelton user

const tinderUser ={}

tinderUser.id ="1234dj"
tinderUser.name = "Sammy"
tinderUser.isloggedin = false

// console.log(tinderuser);

const regularuser = {
    email: "someone@gmail.com",
    fullname:{
        Firstname:"Adarsh",
        Lastname:"kumar",
    }
}

//console.log(regularuser.fullname.Firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1 ,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}

console.log(obj3)

const users =[
    {
        id1 :1,
        email:"fakke@fma.com",
    },
    {
        id1 :1,
        email:"fakke@fma.com",
    },
    {
        id1 :1,
        email:"fakke@fma.com",
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedin'))