//object 
let Storage = "intial value"
const course ={
         coursename : "backend" , 
         price : 999,
         duration: "10hrs",
         Storage : Storage
}


console.log(course.price) // accesing object values 

//de-structuring objects

const {coursename : CS , price , duration} = course  // we storing objects values in { } for avoiding long syntax like course.coursname  // now dirctly access values 
console.log(coursename) // accessing value from { }
console.log(CS) // coursename : CS short form for coursename 
 //this concept use in react props for avoiding long syntax 


//  //
// In JavaScript, when defining an object literal where the key and the value have the same name, you can use shorthand property syntax to simplify the syntax. This shorthand allows you to omit the value if it's the same as the key.

// So, in the example { Storage: Storage }, both the key and the value are the same, which means you can use shorthand property syntax to write it as { Storage }.

// Here's how it works:

// javascript
// Copy code
// const Storage = "SomeValue";

// // Longhand syntax
// const obj1 = { Storage: Storage }; // { Storage: "SomeValue" }

// // Shorthand syntax
// const obj2 = { Storage }; // { Storage: "SomeValue" }
// Both obj1 and obj2 will have the same key-value pair: { Storage: "SomeValue" }.

// Using shorthand property syntax can make your code cleaner and more concise, especially when you have multiple properties with identical keys and values. However, it's important to note that this shorthand only works when the key and the value have the same name. If they are different, you need to use the longhand syntax.