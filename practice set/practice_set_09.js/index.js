//Q.1

// const loadscript1 =  (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = function () {
//       resolve(src + ' done succesfully ')
//     }
//     document.head.appendChild(script) 

//   })
// }
//   let a =  loadscript1('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
//   a.then((value)=>{
//     alert(value)
//   })


//Q.2 

// const loadscript2 =  (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = function () {
//       resolve(src + ' done succesfully ')
//     }
//     document.head.appendChild(script) 

//   })
// }



// const main2 = async () => {
//   let a = await loadscript2('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
//   console.log(a)
// }

// main2()



//Q.3
// const main2 = () =>{
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       reject('rejected after 3 sec')
//     } , 3000)
//   })
// }
// const main3 =async()=>{
//   try {
//     let a =await main2()
    
//   } catch (error) {
//     console.log(error + 'handeled by me ')
//   }

// }
// main3()



//Q.4
let p1 =async () =>{
return  new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(1)
  },1000);
})
}
let p2 =async () =>{
return  new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(1)
  },2000);
})
}
let p3 =async () =>{
return  new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(1)
  },3000);
})
}


 //non optimisal approch it take lot of time 

// const a9 =async ()=>{
//   console.time('run')
//   let a1= await p1 ()
//   let a2 = await p2 ()
//   let a3 = await p3()
//  let a4 = await Promise.all([a1 , a2 ,a3])
//  console.log(a4)
//  console.timeEnd('run')
// }
// a9()

//optimisal approch 

const a10 =async ()=> {
  console.time('run')
  let a1=  p1 ()
    let a2 =  p2 ()
    let a3 =  p3()
   let a4 = await Promise.all([a1 , a2 ,a3])
  console.log(a4)
  console.timeEnd('run')
}
a10()