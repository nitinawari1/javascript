//Q.1

// const data = async  ()=>{

//     let p =  await fetch('https://api.github.com/users/nitinawari')
//      let netdata = await p.json()
//     console.log(netdata);
// }
// data()

//Q.2

// const data1 = async  ()=>{

//     let p =  await fetch('https://kontests.net/api/v1/all')
//      let netdata = await p.json()
//     console.log(netdata);
// }
// data1()

//Q.2


let note = prompt('what is your note ')

localStorage.setItem('note', note)


//Q.3
let n = localStorage.getItem("note")
console.log(n)

// Q.4 
localStorage.removeItem('note')