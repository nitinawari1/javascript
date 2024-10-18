// //prompt command that is use to questioning 
// let age= prompt('what is your age');
// console.log(typeof age)//in promt answer all data types are consider as string


// //for this solution we can convert string into diffrent data type

// age=Number.parseInt(age)// we can convert string into a number by parseInt


// // alert use to show pop-up

//  alert('promt');


//  //conditional statement 
      
//  //there are three type of conditons
//     //i.if
//     //ii.if ...else 
//     //iii.else if 


// //i.if

// if (age>18){
//     alert('you can vote')
// }

// //ii.if ..else 
// if (age>18){
//     alert('you can vote')
// }
// else{
//     alert('you cannot vote ')
// }

// //iii.else .. if

// if(age<0){
//     alert('you are invalid')
// }
// else if (age<14){
//     alert('you are a kid')

// }
// else if (age<=18){
//     alert('you are just a learner')
// }
// else{
//     alert('you can drive')
// }



// //we can also use if else into the if else

// let voteid='no';

// if(age<0){
//     if(voteid =='yes'){

//         alert('you are invalid')
//     }
//     else{
//         alert('makeyour id ')
//     }
// }
// else if (age<14){
//     alert('you are a kid')

// }
// else if (age<=18){
//     alert('you are just a learner')
// }
// else{
//     alert('you can drive')
// }


// //conditional (ternaary)  operator 
// //It is a shotcut of if else
let a = 12;
console.log(  "you can ", (a>18? 'vote' : 'note vote') )




//switch - this is schotcut of else if

let fruit='papaya';

switch(fruit){
    case 'papaya': console.log('the price of papaya is $12')
    break;
    case 'mango': console.log('the price of mango is $13')
    break;
    case 'apple': console.log('the price of apple   is $14') 
    break;
    default:console.log('you put a wrong a value')
}


//example 2 -finding  the area 
let pi=3.14,l=23,b=12,r=7
let area='triangle';

switch(area){
    case('circle'):console.log("the area of circle is" +  pi*r*2) 
    break;
    case('square'):console.log("the area of square is" +  l*l)
    break;
    case('triangle'):console.log("the area of triangle is" + 1/2*l*b)
    break;
    default:console.log('you put a wrong value')
}


