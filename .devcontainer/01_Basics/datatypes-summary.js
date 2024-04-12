// Primitive

//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 89653490856230946230n



//  Reference (Non primitive)

//  Array, Objects, Functions

const heros= ["shaktiamn", "nagraaj", "doga"]
let myObj= {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom" 

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(anotherName);