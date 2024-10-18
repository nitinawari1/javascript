//statement in js
/*var a = 10;

alert(a);*/

//varibles in js

//  var dog = 12;
//  let cat=23;
//  cat++;

//  let j= (dog + cat)
//  console.log(j);
 







//  let x=5;
//  let y=4;
//  let z;
//  z=x**2;
//  console.log(z);

// //data types
// let s=2<3;
// console.log(typeof s);

// console.log(7+'8')
 
// let x=10;
//  let y=3;
//  x+=2;
//  console.log(x);




/*let jdj=[ 2,4,`stringd`,false]
console.log(typeof jdj)

let fruit=['mango','pineapple','apple']
console.log( typeof  fruit)
console.log(typeof 's')

console.log(5==='5')
//logical operatar
console.log(5>3&&2<3)
console.log(5<3&&2>3)
console.log(5==5||2==3)
console.log (! 7==7)
console.log()
*/






//if else condition
// let age =15;
// let voteid='yes'
// if(age>=15 && voteid =='no')
// {
//     alert('you can vote');
// }   
// else if (age>=14 && voteid !='no')
// {
//     alert('make your voter id');
// }   

// else {
//     alert('you cannot vote');
// }






/*let age=16;
let voteid='yes';

if(age>=15){
     
if(voteid =='no')
    {
        alert('you can vote ');
    }   
    else {
        alert('make your vote id')
    }

    
}
   
else {
    alert('you cannot vote ');
}*/






// let isloggedin=1;
// if( isloggedin==0){
//     document.write('login');
// }
// else{
//     document.write('logout');
// }

/*let input;
input='n';

if(input===1){
    document.write('continue...')
}
 else if (input==='y'){
    document.write('continue...')
}
 else if (input==='yes'){
    document.write('continue...')
}
 else if (input==='no'){
    document.write('end...')
}
 else if (input==='n'){
    document.write('end...')
}
 else if (input==='0'){
    document.write('end...')
}
 else (
     document.write('wrong input')
 )*/







/*let age=13;
let voterid='no';

if(age>=18 && voterid=='yes'){
     alert('you able to vote' );
}
else if (age>=18 && voterid=='no'){
    alert('make your voter id')
}
else{
 alert('you cannnot vote' );
}
*/





// let  age=19;
// let voterid='no';

// if(age>=18){
//   if(voterid=='yes'){
//     console.log('you can vote')
// }
// else{
//     console.log('make your id q')
// }
// }
// else{
//     console.log('you cannot vote')
// }





/*console.log('js'-5)

let a=5;
let b=10;
a=a+b
b=a-b
a=a-b
console.log( a )
console.log(b)
console.log(a)
console.log('sting'+5)

let age=14;
console.log(age= (age>18) ? 'you vote' : `you cant'vote`) ;
*/



//switch statement

/*let pi=3.14,l=7,b=5,r=6;
 let area= 'triangle';

switch(area){
    case 'circle':
        console.log('this is area of cicle ' + pi*r**r)
        break;
    case 'triangle':
        console.log('this is area of triangle ' + 1/2*b*l)
        break;
    case 'rectangle':
        console.log('this is area of rectangle ' + l*b)
        break;
      default:console.log('yout enter wrong value')
}*/

// let num=20;

// while(num<=10){
// console.log(num);
// num++;
// }
   

//do while loop

/*let num=20;

do{
    console.log(num)
    num++
} while(num<=1)
*/





//forloop

// for(let num=0;num<=10;num++)
// console.log(num);

// let num =1; 
/*let tableof= 18;
for( var num=1; num<=10 ; num++)
console.log(tableof+'*'+ num +'='+tableof * num)*/






// function

function adding(a,b){
   
    let total=a+b
    console.log(total);
}
 adding(11,25)
adding(45,45)

function sum(a,b){
    
    var total= a+b;
    console.log('my total is a '+ total)
    return a;
}
 var sum = sum(56,58);
 sum;

 
 
 /*function sum (a,b){
     return a+b;
    
    }
    var c= sum( 2,3);
console.log(c)

var c= sum(33,31); 
console.log( c);


function name (a,b){
    return  a+b;
}
var c= name(23,32)
console.log(c)
var c= name(23,33)
console.log(c)*/

// anonymous function
/*var funexp= function(a,b){
    return total=a+b
}
var a = funexp(23,34);
var b = funexp(43,34)
console.log(a)
console.log(b);*/

// let sum=(a,b )=>
// `the some of the two no ${a+b}`
// console.log(sum(23,32))

// let sum=(a=4) =>a*5

// console.log(sum())







// arrays

// let name=['JKS' ,'what' ,'true' ,'she',]
// console.log(name);
// console.log(name[2])
// console.log(name[name.length-1]);
// console.log(name[1]);
// console.log(name.length);

// for(let i=0; i<4;i++){
//     console.log(name[i])
// }

// for(let elements in name){
//     console.log(elements)
// }
// for(let elements of name){
//     console.log(elements)
// }


// for each 

// name.forEach(function(element,index,array){
//     console.log(element,index,array)
// })
// name.forEach((element,index)=>console.log(element,index))

//arrays searchiing and filtering

let name=['akash','sagar','nitin','samir','varsha']

console.log(typeof name);
