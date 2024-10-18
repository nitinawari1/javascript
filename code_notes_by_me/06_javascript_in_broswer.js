//javascript_in_the_broswer

//print all console function
console.log(console)

//log
console.log('hey hiii nitin')//print data that we give in console

//error
console.error('this  is a error')//show the error messege with red alert
    
//assert  
console.assert(5>55)//use for condition caculation if condition is false then show error


//clear
// console.clear()//clear the console

//table
let obj={
    nitin:12,
    harry:11,
    akash:13

}
console.table(obj)//show the object in table form

//warn
console.warn('you giving malware')//show the warning

//info
console.info('it is similar to log but it show in info tab')

//time 
console.time('show the time gap between two commands')

console.timeEnd('show the time of gap between two commands')
//with the help of this we can check how much time take by for loop & also compare with while
console.time('for loop')
let sum=10
for(let i=0;i<10;i++){
    console.log(i)
}
console.timeEnd('for loop')



//alert
alert('this a show a popup')


//prompt
let a=prompt('enter a number', '50') // 50 default value  we can set
a=Number.parseInt(a)
document.write(a)

//confirm
let write=confirm('do you want to write it to the page')
if(write){
    document.write('you have permission')
}
else{
    document.write('you dont have a permission')
}




//windows
 // It is  a global object every commmand,property,method,functions comes under he.

console.log (window)
window.console.log (window)
window.alert('window is a global object')


//DOM-Document object modal
//Aapake pure html page ko ek javascript object bana diya hai aur usko document name de diya hai
//ex 
console.log(document)
console.log(window.document.body)
document.body.style.background = "blue";


//Bom
//it is browser additional property or  functionallity that he provide 
//alret,promt,confirm are ex of Bom
// location.href='https://codewithharry.com'