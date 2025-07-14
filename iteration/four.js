const myObject = {
    js:'javascript',
    cpp:'C++',
}

for (const key in myObject) {
    console.log(myObject[key])
}
    

const prog = ["js","rb","py","java"]
for (const key in prog) {
   
        console.log(key,"->",prog[key])
    }
