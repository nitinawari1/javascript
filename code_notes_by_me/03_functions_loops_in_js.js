// loops in js 
// i.for loop
// ii.for of loop
// iii.for in loop
// iv.While loop
// v.Do while loop

// i.for loop
// printing 0 to 19
for(let i=0;i<20;i++){      
    console.log(i)
}

//printing 1 to 20
for(let i=0;i<20;i++){       
    console.log(i+1)
}

//program to add first natural numbers
//adding first  4 natural no 1+2+3+4

let sum=0;
let n=prompt('what is your number');
 n=Number.parseInt(n);
for(let i=0;i<n;i++){
    sum+=(i+1)
    console.log(i+1,'+')
}
console.log(sum)


//making table using for loop
let tableof = 12;
for (let num = 1; num <= 30; num++) {
    console.log(tableof + '*' + num + '=' + tableof * num)
}




//ii.for-in loop // it is use for printing elements or index no.
let myarr = ['nitin', 'akash', 'samir', 'uday']

let obj = {
    harry: 10,//this is a elements
    nitin: 11,
    samir: 12,
    akash: 21
}
//calling object elements with thier marks
for (let a in obj) {
    console.log('marks of' + a + ' are ' + obj[a])
}

//calling elements from object 
for (let elements in obj) {
    console.log(elements)
}

//calling index no. from array
for (let elements in myarr) {
    console.log(elements);
}
  




//iii.for of loop //it is use for printing elements from array and iterable elements from object


//printing elements of string
for(let a of 'nitin'){
    console.log(a)
}

//printing a elements of array
//we can consider elements from array by varible in loop ex.le elements
for(let elements of myarr){
    console.log(elements)
}





//iv while loop  //first evalute condition then code 
let num=0;
while(num<=10){
        console.log(num)
        num++;
}

// table of 8  
let tableof1=8;
let num2=1;
while(num2<=10){
        console.log(tableof1 +'*' + num2 + '=' + tableof1*num2)
        num2++;
}




//v.Do-while loop //first evalute code then check the conditions, because  this do while loop minimum run one time

let num1=0
do{
 console.log(num)
 num++;
}while (num<=10)

//8 table 
do{
    console.log(tableof1 +'*' + num + '=' + tableof1*num)
    num++;
}while(num<=10)





//functions

function first(x,y){
    let a=10,b=28;
    let total=(a+b)//this code will be execute after every caller(input data)
    console.log(total)
    return console.log(x+y);

}
first(25,65);
first(25,64);
first(25,63);


//arrow function  - shortcut of function

//style1
let sum1=(a,b)=>a+b;
console.log(sum1(2,3))

//style2
let add=(c,d)=>{
    return c+d;
}
console.log(add(2,4))

//calling function without argument 
let hello=()=>{
   console.log("how are you ?");
}
hello()

//putting caller in varible and printing return value on it 
const hello1=()=>{
   console.log("how are you ?");
   return 'hey';
}
var fun=hello1()
console.log(fun)



