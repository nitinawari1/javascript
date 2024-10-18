//Arrays
//we can store multiple value 

let marks=[35,24,41,true,50]
console.log(marks)


//length start from 1
//index no. start from 0

console.log(marks[0])//printing indiviual value
console.log(marks[4])
console.log(marks[8])
console.log('the length of marks array is ',marks.length)//finding how many elements are present in array

//arrays are mutable it can be changes

marks[5]=23;//Adding new value to the array
marks[0]=43;//changing the value of an array
console.log(marks)
console.log(typeof marks)//arrays data type is object



//arrays  method 
let num=[11,12,13,14,15,16] 

//i.convert array  to string with comma seperated  value
let num2=num.toString()// changing array in string
console.log(num2)

//ii.join-join all array using a separator
let num3=num.join('-')
console.log(num3)
console.log(typeof num3)

//iii.pop-remove the last element of arrays
let r= num.pop() 
console.log(num,r)//r also print poped value

//iv.push -Add new elements at the end of array
num.push(32)
console.log(num)

//v.shift - remove the first element from original array
num.shift()
console.log(num)


//vi.unshift -add new value to the array to original array
num.unshift(11)
console.log(num)


//vii.delete - use to delet any element from array 
delete num[0]; //it is not property it is a operator  
console.log(num)//the length of array are not change just empty this space 

//viii.concate- add two arrays but it not change original array
let marks2=[90,91,92,93,94,95]
let newarrays=num.concat(marks,marks2);
console.log(newarrays)

//ix.sort- sort arrays itchange original arrays
num.sort()//default sorting is 1 to 100{in alphabettical way} or a to z, not accessending or desending
console.log('sorting'+ num)

//sorting in acceseding or decending
let compare=(a,b)=>{
    return a-b //accesending
   // return b-a //desending
}
num.sort(compare);
console.log(num)

//x.reverse-reverse the arrays
num.reverse()
console.log(num)//change original arrays

//xi.splice- use to add new element by removing sum elemments

let num6=[10,20,30,40,50,60,70,80,90]
num6.splice(3,2,102,103,104,105)//3 is the position from we can remove 2 elements add new
console.log(num6)
let deletevalues=num6.splice(3,2,102,103,104,105)// print deleted values
console.log(deletevalues);

//xii.slice-piece out the elements and make new array
let newnum= num.slice(3)//from index no. 3  piece out all elements and make new array
console.log(newnum)
let newnum2= num6.slice(3,6)//from index no. 3 to 5  piece out all elements and make new array don't take 5th element
console.log(newnum2)
