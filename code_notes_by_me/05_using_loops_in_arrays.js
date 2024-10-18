//loopsin arrays
//array
let marks=[11,12,13,14,15,16,17,18,19,20]

//for loop for printing arrays
for(i=0;i<marks.length;i++){
    console.log('elements of arrays are '+ marks[i] )
}

//using for each loop for multipying 

marks.forEach((Element) => {
    console.log(Element*Element)
});

marks.forEach((Element,index) => {
    console.log(index*Element)
});





// for..of loop
for(let item of marks){
    console.log(item) //print a element of array
}

//for..in 
for(let i in marks){
    console.log(marks[i],i)// i print a index no. & marks print elements
}



//array from - use to change any html collection to array
let name='nitin';
let newname=Array.from(name)//change to array
console.log(newname) //split nitin in array 





//map in array- make new array by performing some operation on each element

let arr=marks.map((value,index,array) =>{
        console.log(value,index,array)
        return value+1,
         value+index;
})
console.log(arr)


//Filter in arrays 
// it is use to filter array suppose we want geather no. than 12 from array we can use filter using function to print geather no. than 12
let arr2=marks.filter((a)=>{
    return a>12;
})
console.log(arr2)


//reduce
//reduce add all array.first it take two values and add then add  other values one by one to toal of last addition
//style.1
let arry3=marks.reduce((a,b)=>{
    return a+b;
})
console.log(arry3)

//style.2
let arry4=(a,b)=>{
    return a+b;
}
console.log(marks.reduce(arry4))