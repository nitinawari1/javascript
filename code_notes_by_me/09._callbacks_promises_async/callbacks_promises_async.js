//synchonous programming 
//synchonus action are the action intiate(declered) and get execute one by one

//ex.
// let  a = prompt("what is your name" )
// let b  = prompt("what is your age")
// console.loga(`what is your ${name} and your ${age}`)



//asynchonous programming 

// asynchonous  actions are the actions that we intaite now and excute later . eg. settimeout

//ex
// setTimeout(function(){
//     console.log('i never give up')
// }, 3000)


// note- in asynchonous programming program not stop executing when  asynchonous code come . js send this  asynchonous code in queue for later start executing further code




//callbacks

// callbacks is a simple function (not have any kind of special characeterfor it  just normal function made up of name , arguments and comannds  that always we make ) passed into a another function as an arguments , which is then  invoked inside  in that function to execute outer function to complete action 

//ex 1. use when we want to tell some function aur some action is completed 

//creating 1st main function 
// function loadscript(src, callbacks) {
//     let script = document.createElement('script') //create element 
//     script.src = src;  //add src 
    //creating function that run after loading src
//     script.onload = function () {
//         console.log('loaded script with src ' + src )
//         callbacks(src); //calling hello function 
//     }
//     //child append 
//     document.body.appendChild(script);
// }

// //funtion that pass as a argument 
// function hello(src) {
//     alert('hello world ' + src)
// }
// function goodmorning(src) {
//     alert('hello world ' + src)
// }
// //calling main function with src and one function as a arguments 
// loadscript("https://google.com", hello)





// //Error handling  - if link is not loaded and giving some error that time we have to handel this errors 
// function loadscript(src, callback) {
//     let script = document.createElement('script') 
//     script.src = src;  
//     script.onload = function () {
//         console.log('loaded script with src ' + src)
//         callback(null ,src); //when link load succesfully
//         // null = null value pass to error parameter of hello function . ads src to src parameter 
//     }

//     //error handing - if link not loaded we can use this to show error 
//     script.onerror = function () {
//         console.log('error loading with src ' + src) 
//         callback(new Error ('src get some error')) //pass to the  error parameter of hello fuction 

//         // new Error - this is a js function to show error
//     }

//     document.body.appendChild(script);
// }


// function hello(error,src) {
//     if(error){
//         console.log(error);
//         return;
//     }
//     else{ 
//     alert('hello world ' + src)
//     }
// }

// function goodmorning(src) {
//     alert('hello world ' + src)
// }

// loadscript("https://goo23gle.com", hello) 



// promises 
// A promise is an object that keep track about whether a certain event has happened  already or not .

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//there are three type of stages
//   1. pending ... 
//   2. resolve -> fullfilled
//   3. reject 

//synatax in javascript


// let promise = new Promise((resolve, reject) => {
//     console.log('this is promise ');
// })




// promise produce
// let rollno ;
// let newpromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//          rollno = [1, 2, 3, 4, 5]
//         resolve(rollno + 'promise is fullfilled because he get all roll no , now this resolve paasing to then function ') //resolve is for used when promise is fullfilled
//         // reject(new Error ('while communicating error ')) // reject used when error occured 
//     }, 2000)
// });

// const getbiodata = (indexdata) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((indexdata) => {
//             let biodata = {
//                 name: 'nitin',
//                 age: 18,
//             }
//             resolve(`my roll no ${indexdata}. my name is ${biodata.name} , i am  ${biodata.age}`)
//         }, 2000, indexdata)
//     });
// }



// promise consume 
// then is used for consumetion(accessing) of resolve value 
// catch - catch is used cathing the error or reject value 

// newpromise1.then((rollno) => {
//     console.log(rollno)
//     return getbiodata(rollno[3]);
// }).then((kuchbhi) => {
//     console.log(kuchbhi);
// })
//     // .catch((error) => {
//     //     console.log(error)
//     // })
// console.log(rollno[1])


//promise chaining 
// promise chaining is alternative of callbackhell it allow to link promises using then one by one and we can use them simutanasly

// let new_promise_chain = new Promise ((resolve, reject )=>{
//         setTimeout(()=>{
//             console.log('resolved after 2 second')
//         },2000)
//         resolve(56)
//     })



// new_promise_chain.then((value)=>{
//     console.log(value)
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('promise chaining in then function')
//             resolve(55)
//         },4000)

//     }).then((value)=>{
//         console.log('this then  connected to newpromise ' + value)
//         return 2 // after using then it static value changed in promise 
//     }).then((value)=>{
//         console.log('printing 2 ')
//     })
// }) 




// const loadscript = (src) =>{
//     return new Promise((resolve, reject) => {
//     let script = document.createElement('script') 
//         script.src = src;  
//         script.onload = function () {
//             resolve('script is loaded')
//         }
//         script.onerror= function () {
//             reject(0)
//         }
//         //child append 
//         document.body.appendChild(script);
//     })
// }

// let p1 = loadscript ("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// p1.then((value)=>{
//     console.log(value)
//     return loadscript ("https://cdn.j1sdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")

// }).then((value )=>{
//     console.log(value)
//     return loadscript ("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// })
// .catch((error)=>{
//     console.log('Error:', error)
//     console.log('we faild to load script')

// })





// attaching multiple handlers
// we can ue multiple handerls (then or catch) for diffrent diffrent commands 
// let new_promise_chain1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('resolved after 2 second')
//     }, 2000)
//     resolve(56)
// })


// new_promise_chain1.then((value) => {
//     console.log('first  then ')
// })
// new_promise_chain1.then(() => {
//     console.log('second then');

// })
// this are two diffrent then . they can work on diffrent diffrent command . one can work on netwrok queries and second one can work on fetch apis



//promise API

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(' value 1')
//     },4000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // resolve('value 2')
//         reject(new Error ('Error'));
//     },2000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(' value 3')
//     },3000)
// })


// // 1. promise.all api 
// // it help to give result of all promises at one time after all promises resolve  as array
// //if any one of these promise get rejected then this promise.all function not work 
// let all_promises = Promise.all([ p1, p2 , p3])

// all_promises.then((value)=>{
//   console.log(value);
// })


// // 2. promise.all_settled   
// // it is use when any promise get rejected still it give result of other successfull promises
// let all_promises1 = Promise.allSettled([ p1, p2 , p3])

// all_promises1.then((value)=>{
//   console.log(value);
// })




// //3.race 
// //it give the value of any promise that completed first 
// let all_promises2 = Promise.race([ p1, p2 , p3])

// all_promises2.then((value)=>{
//   console.log(value);
// })


// //4.any 
// // it also give value of any promise that completed first but it avoid errors
// let all_promises3 = Promise.any([ p1, p2 , p3])

// all_promises3.then((value)=>{
//   console.log(value);
// })


// //5.resolve 
// //give the resolve value of fullfilled promise  
// let all_promises4 = Promise.resolve(6)

// all_promises4.then((value)=>{
//   console.log(value);
// })


// // 6. reject 
// //give the value of rejected promise
// let all_promises5 = Promise.reject (new Error ('error'))

// all_promises5.then((value)=>{
//   console.log(value);
// })



//Async/await

// Async - we can apply this keyword to any function. it make function async and  then that function work like a promise . Also we can use .then method on this function 

//await - use in async function . that stop the execution of the code til the value of the function get.

// note  - two async function run parallely

// syntax

// async function weather (){
//    let delhiweather= new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(25)
//     },2000)
//    })


//    let nagpurweather= new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(20)
//     },5000)
//    })


// // delhiweather.then(alert)
// // nagpurweather.then(alert)


// console.log('fetching delhi weather please wait ...')
// let delhiw = await delhiweather
// console.log('fetched delhi weather ' + delhiw);

// console.log('fetching nagpur weather please wait ...')
// let nagpurw = await nagpurweather
// console.log('fetched delhi weather ' + nagpurw);

// return [delhiw,nagpurw]
// }

// const chery = async () =>{
//   console.log("hey i am cherry waiting  for execution ")
// }

// const main1 = async () => {
// console.log('welcome to weather control room')
//   let a= await weather()
//   let b = await  chery()

// }

// main1()

//error handling

//try and cathe - use for handling error 
// try only execute syncous code , not async . but if we write async code in try then we can use try cathe inside  async code 

// setTimeout(()=>{
//   console.log('wifi is hacking ');
// },2000)

// // first  try to execute code if not get then give error
// // try {
// //   console.log(rahul )
// // } 
// // catch (error) {
// //     console.log('error handled ')
// // }

// //try catch inside async code 
// try {

//   setTimeout(()=>{
//     try {
//       console.log(rahul);

//     } catch (error) {
//       console.log('rahul not found');
//     }
//   },3000)

// } 
// catch (error) {
//   console.log('error handled '+ error)
// }

// setTimeout(()=>{
//   console.log('wifi is hacked ');
// },3000)

// setTimeout(()=>{
//   console.log('wifi is now public  ');
// },4000)



//error object 
// name - tell the name of error 
// messsege - description of error
//throw error  - we can throw error of diffrennt difrent type like styntax , refrance  to catch statement 

// try {

//   let age = prompt('what is your age')
//   age = Number.parseInt(age)

//   if (age > 150) {
//     throw new ReferenceError("probably not possible")
//   }
//   console.log(rahul)

// }

// catch (error) {
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }



// //finally - it runs in any suitation  if try giving error or not or catch giving error . still finally run 
// // if function return in half of a function still finally runs

// function finallyex() {


//   try {
//     console.log('program run successfully ')
//     console.log(rahul)
//     // return
//   }

//   catch (error) {
//     console.log('i dont know rahul')
//     console.log(atharv)

//   }

//   finally {
//     console.log('i will become greatest in any situtation ')
//   }
// }


// finallyex()