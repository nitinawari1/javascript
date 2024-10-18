//practice set 06
//javascript in broswer

//Q.1
//style.1
let age = prompt('what is your age ')
age=Number.parseInt(age)

if (age>18){
    alert('you can drive')
}
else{
    alert('you cannot drive')
}


//style.2
 let age1 = prompt('what is your age ')
age1=Number.parseInt(age1)

const candrive0=(age1)=>{
        return age1>=18?true:false

}
if (candrive0(age1)){
    alert ("you can drive")
}
else{
    alert("you cannot drive ")
}
 


//Q.2

 let num1;
let age2;
let question;
do{
     age1 = prompt('what is your age ')
    age1=Number.parseInt(age1)
    if (age1>18){
        alert('you can drive')
    }
    else{
        alert('you cannot drive')
    }
    question= confirm('you want to see prompt again ')
}while(question==true)
 


 let runagain=true;
const candrive=(age)=>{
    return age>=18?true:false
}
while(runagain){
    let  age3= prompt('what is your age ')
    age3=Number.parseInt(age3)

    if (candrive(age3)){
        alert ("you can drive")
    }
    else{
        alert("you cannot drive ")
    }
    runagain=confirm('do you want to see promt again')
} 



//Q.3
 let num3;
let age4;
let que;

do{
    age4= prompt('what is your age ')
    age4=Number.parseInt(age4)

     if  (age4<0){
         while(age4<=0){
           console.error('you enter invalid age')
        alert('you enter invalid age plz enter valid age')
        age4 = prompt('what is your age ')
        age4=Number.parseInt(age4)
       }
    }
    if (age4>18){
        alert('you can drive')
    }

    else{
        alert('you cannot drive')
    }
     que= confirm('you want to see prompt again ')
}while(que==true)
 


let runagain1=true;
const candrive1=(age)=>{
    return age>=18?true:false
}
while(runagain){
    let  age = prompt('what is your age ')
    age=Number.parseInt(age)
    if (age<0){
        console.error('you enter invalid age')
        break;
    }

    if (candrive1(age)){
        alert ("you can drive")
    }
    else{
        alert("you cannot drive ")
    }
    runagain1=confirm('do you want to see promt again')
}

 



//Q.4
 let  age5= prompt('what is your number ')
    age5=Number.parseInt(age)
    
    if (age5>=4){
        location.href='https://www.google.com'
    }
    else{
        console.log('you dont redirected')
    }
// console.log(num)
 
 
let  age6 = prompt('what is your number ')
    age6=Number.parseInt(age6)
    let num;
let redirection=(locations)=>{
    return location.href=locations;

}   
    if (age6>=4){
       num = redirection('https://google.com')
       console.log(num)
    }
    else{
        console.log('you dont redirected')
    } 

//Q.5

//style 1
let randomcolor=(color)=>{
    return document.body.style.backgroundColor=color;
}

randomcolor(prompt('choose a background color'))


//style 2
let color1=prompt('eneter a color')
document.body.style.background=color1;