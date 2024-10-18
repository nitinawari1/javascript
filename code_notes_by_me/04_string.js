//strings

let name='nitin';
console.log(name.length) //print total length no. of string  note- length start from 1
console.log(name[0]) //print letter that place to this no. in string   note- In js index no. start from 0

//we can store string in 

//i.'' (single quotes)
//ii."" (double quotes)
//iii.``(backtik)
//With the  help of backtik we can use ' and " inside string 


//template literals


 //it is only work in backtik
 //also with the help of template literals we can use varible inside the string
let boy1='nitin'
let boy2='akash'

let friend = `${boy1} is friend of ${boy2}` 
let friend1 = '${boy1} is friend of ${boy2}' //it not use boy1  and boy2 as a varible
console.log(friend)
console.log(friend1)


//Escape sequence characters


//it is use for avoiding a misunderstanding of javascript

let friut='ban\'ana'  //we the help of this we can print ' or "  in same quotes
let animals='elep\nhent' // we can start with new line
let animals1='elep\thent' // we can give long space
let animals2='elep\rhent'
console.log(friut)   
console.log(animals)   
console.log(animals1)   
console.log(animals2 )   



//strings properties and methods 


// it is for manipulating strings 

//i.length // print a no. of charector string content
let animalas='elephant';
console.log(animalas.length); //it is called property

//ii.convert to uppper case 
console.log(animalas.toUpperCase()) //  it is called function


//iii.convert to lower case 
console.log(animalas.toLowerCase())

//index no.
//In js index number start from 0  


//iv.slice- print a character that we call 
let name1='nitin' //in this string last index no. is 4 and  first is 0.
// it is print charcter that have index no between 2 to 4 form string  but not print 4th index of charecter
console.log(name1.slice(2,4))
console.log(name1.slice(2))// if we give one index no that print all charecter from that index no.


//v.replace 
//replace perticular string to another 
console.log(name1.replace('nit','gen'));

//vi.concat
//We can add two string easilly 
console.log(name1.concat(' is a friend of ',animalas, ' ok' ))


//viii.trim
//trim unwanted material from string 
let cutting= '       nitin        '
console.log(cutting);
console.log(cutting.trim())
console.log(cutting.trim())


//strings are immutable. we cannot change original string we just make a new string

//calling strings data 
let day='saturday' ;

console.log(day[0])//print charecter that have index value 0
console.log(day[1])
console.log(day[2])


//concating strings
let day2='monday' + ' sunday' + ' tuesday'
console.log(day2)// print all strings 
console.log(day2[2])

//print string by for loop
for(i=0;i<day.length;i++){
        console.log(day[i])
}