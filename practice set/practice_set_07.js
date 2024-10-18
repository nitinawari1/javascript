//practice set 07
//Dom manipulation

//Q.1
let etitle = document.getElementsByClassName('active')[0].style.color='red'
// etitle.style.color= 'blue'


//Q.2
//In source code it not get correct because it saw what we write 
//but in Element tab of broswer it get correct.



//Q.3 
//by id 
let btn1=document.getElementById('right1')
console.log(btn1)
btn1.firstElementChild.style.color='green'
btn1.lastElementChild.style.color='yellow'

//by class [must selecet which one byindex no.]
let btn2=document.getElementsByClassName('right')[0]
console.log(btn2)
btn2.firstElementChild.style.color='green'
btn2.lastElementChild.style.color='green'

//by direct class with index
let btn3=document.getElementsByClassName('btn')[2]
console.log(btn3)
btn3.style.color='blue'


//Q.4
let lic=Array.from(document.getElementsByTagName('li'))
console.log(lic)
lic.forEach((element)=>{
    element.style.backgroundColor='cyan'
})

//Q.5
//Closest- it is used to know the nearest element


