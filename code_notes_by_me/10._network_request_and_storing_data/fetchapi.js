// api
// An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to communicate and interact with each other. It defines the methods and data formats that developers can use to request and exchange information between different systems, such as web services, libraries, or operating systems.


// fetch api 
// fetch api used to get or post some data on a network
// note - fetch api is  a promise 

// Syntax

// let p = fetch('https://api.github.com/users/nitinawari')
//  we can give request header in fetch   after url 


//process of fetchin data 

// it take two then process to give data 
//  first then give the metadata of data like status code , header etc 
// second then give the actual data  of api 

// p.then((responce )=>{
//   console.log(responce.ok);  
//   console.log(responce.status);  
// //   console.log(responce.headers); // responce header are the packet filled with metadata 
//     return responce.json()   // we can get data in any form like json or text 
//     // return responce.text()
// }).then((value)=>{
//    console.log(value) 
// })


// post request  - we use post request  for posting some data on server
//we can create post request by the help of fetch 

//example


// // writing a function that fetch the data 
// const createTodo = async (todo) =>{
//     //writing header for post request 
//  let options ={
//       method : "POST" , 
//       headers : {
//         "content-type" : "application/json"
//       },
//       body : JSON.stringify (todo) // stingly convert all value in stings

//  }

//  let p =  await fetch('https://jsonplaceholder.typicode.com/posts' , options )
//  let responce = await p.json()
//   return responce

// //   fetching data with particular id 
// }
//  const getodo = async (id ) =>{
//     let r =  await fetch('https://jsonplaceholder.typicode.com/posts/' + id )
//  let responce1 = await r.json()
//   return responce1
//  }



// const mainfunc = async ()=>{
//     let todo={
//         title : 'nitin',
//         body : 'strong' ,
//         userId : 1100 ,

//     }
//     let todor = await createTodo(todo)
//     console.log(todor);
//     console.log(await getodo(2))
// }
// mainfunc()



//jaavscript cookies

// cookie is a way of authentication for server 
// server set the value  of  cookie  and use it for later authenticatio =n 
// cookie strored in a browser 
//cookies dont overwrite 

// console.log(document.cookie)//show the cookies in console

// document.cookie ='name = nitin'

// //in some cases we have to encode cookies for not miss understanding of browser
// let key  =  prompt('what is a key ')
// let value  =  prompt('what is a value')
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent( value)}`
// console.log(document.cookie );

// //decoding 
// console.log(decodeURIComponent(key))


//note - we cannot set two or more cookies in one line by seperating semicolon . all this will consider as option for cookies 

// cookies option - we can set lot of options for one cookies



//localstorage
// localstorage is storage of a browser that store the values 
 // it not get flushed after refreshing the page  or  closing the browser 

 let key = prompt ('enter the key ')
 let value = prompt ('enter the value')

//methods

 localStorage.setItem(key,value) // set the key and value 

 console.log(`the value at ${key} is ${localStorage.getItem(key)}`) // getItem give the value of key

 if (key == 'red' || key == 'blue') {
    localStorage.removeItem(key) // remove the single item 

 }
 if (key == 0 ) {
    localStorage.clear() // clear all localstorage 
 }

//  note - we can edit value by just rewrite the value of key 


//session storage 
 // it is only for one session if we close the tab data will gone. 
 //property as it is a same as localstorage

 sessionStorage.setItem('name','nitin' )

 
 //storage event 
// storage event is occur when if we open two tab of same page . if we updated the storage of first tab then that can be alert in second tab 

window.onstorage = (e) =>{
   alert("changed")
   console.log(e)
}  