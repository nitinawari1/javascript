//loop & functions

//Q.1
let obj={
    harry:10,
    nitin:23,
    rohan:21
}
for(let i=0;i<Object.keys(obj).length;i++){
    console.log('themarks of '+ Object.keys(obj)[i] +' is '+obj[Object.keys(obj) [i]])
}

//Q.2 
for(let elements in obj){
    console.log('the marks of student  ' + elements + ' are ' + obj[elements])
}

// Q.3 
let cn=8;
let num;
while(num!=cn){
    num =  prompt('what is your number'); 
    if(num!=cn){
        console.log('try again')
    }     
    else{
        alert('you enter a correct no.')
    }
}

while(num!=cn){
    console.log('try again') 
    num =  prompt('what is your number'); 1
}
 console.log('you enter a correct number')


//Q.4

let mean = (a,b,c,d,f)=>{
        return (a+b+c+d+f)/5;
}
console.log('mean of these for number' + mean(1,2,3,4,5))