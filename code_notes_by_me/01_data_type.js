//primitive data types

//there are 7 primitive data types

let a='this is a string data type' //1.string
let b= 32; //2.numbers
let c= true; //3.boollen [true or false]
let d= BigInt('564') //4.bigint
let e= null;  //5.null
let f; //6.undefined
let g= Symbol('%'); //7.symbol

console.log(a,b,c,d,f,g)
console.log(typeof a,typeof b,typeof c,typeof d,typeof f,typeof g)




//Non-primitives data types 

//1.object in js
//object is use for define property of any objects like car, house, student.

const car = {
   "carname": "bugati",
    "price": 355222,
    "color": 67,
    "modal": 89,
}   
console.log(car["carname"])//we can access objecct by this type 


const car1 = {
    carname: 'bugati',
    price: 41000,
    color: "black",
    modal: "suv-300"

}
console.log(car1.carname)//we can access object by this dot also.
