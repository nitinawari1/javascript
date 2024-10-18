//conditional statements
//chapter 2 ps 



//Q.1
let age=prompt('what is your age');

if(age>10 && age<20){
    alert('your age is between 10&20')
}
else {
    alert('you are not eligible')
}


//Q.2 
let age1=prompt('what is your age');
// age=Number.parseInt(age);

switch(age1){
    case '14':console.log('you are a 14')
    break;
    case '15':console.log('you are a 15')
    break;
    case '16':console.log('you are a 16 ')
    break;
    case '17':console.log('you are a 17' )
    break;
    default:console.log('you are not a special')
}

//Q.3
let num=prompt('what is number');
num=Number.parseInt(num);

if (num%2==0 && num%3==0){
    alert('it is a divisible')
}
else{
    alert('it is not divisible')
}

//Q.4
let num1=prompt('what is number');
num=Number.parseInt(num1);

if (num1%2==0 && num1%3==0){
    alert('it is a divisible')
}
else if(num1%3==0){
    alert('it is divisible by 3')
}    
else if(num1%2==0){
    alert('it is divisible by 2')
}    
else{
    alert('it is not divisible')
}

//Q.5

age=10;
alert(age=(age>18)?'drive' : 'notdrive')


age=10;
a= age>18?'drive' : 'notdrive';
alert(a)