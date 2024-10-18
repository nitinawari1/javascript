//practice set 05 
//arrays 
let marks = [10, 11, 40,12, 13, 20,100,14, 15, 16]

//Q.1
/* let marks=[10,11,12,13,14,15,16]
console.log(marks)
let promt=prompt('what is a no.')
promt=Number.parseInt(promt)
marks.push(promt)
console.log(marks) */


//Q.2
/* let promt;
do {
    promt = prompt('what is a no.')
    promt = Number.parseInt(promt)
    marks.push(promt)
} while (promt != 0)
console.log(marks) */


//Q.3

let myarr=marks.filter((Element)=>{
        return Element%10==0 ;

})
console.log(myarr)


//Q.4
let newarr=marks.map((Element)=>{
    return Element*Element
})
console.log(newarr)

//Q.5
let n=[1,2,3,4,5,6,7,8,9]
let newarr1=n.reduce((a,b)=>{
    return a*b
})
console.log(newarr1)
