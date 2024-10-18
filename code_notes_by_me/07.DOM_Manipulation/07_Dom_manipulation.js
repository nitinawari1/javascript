 //working with DOM

//in html page all tags are nodes 
//there are 3 main type of nodes 
//i.Element nodes 
//ii.Text node
//iii.Comment node

//Accessing nodes 


//i.Element nodes
//All of these is element nodes. With help of this we change our html,css and manipulate code 
// typeof all of these is object.
document.body //print body tag.  
document.documentElement //print a html tag 
document.head // print a head tag 
 

//ii.text nodes
//this is a text node and it is type is string
document.text='with the help of these we can access  title ' //text is a leaf of DOM tree


//iii.comment nodes 
//this is a comment nodes  
document.COMMENT_NODE //with the help of these we can change comments





//accessing  child 
console.log(document.body.firstChild)//accessing first child
console.log(document.body.lastChild)//accessing last child
console.log(document.body.childNodes)//accessing all child nodes

//following are always true 
document.body.childNodes[0]===document.body.firstChild
document.body.childNodes[document.body.childNodes.length-1]===document.body.lastChild

document.body.hasChildNodes() //check child nodes present or not 



//childnodes are not array but we can change it to array 
let arr=Array.from(document.body.childNodes)
console.log(arr) //Now we can apply arrays properties





//$0 in console is refer current selected line  
//with the help of $0 we can print line in console & with $1 print previous line 
//but we can not write dom we only read
$0 // selected line 
$1 // privious line 


//$.nextsibling 'or'  $.previoussibling // we can print next sibiling aur previous sibiling
console.log(document.body.firstElementChild) //calling first Element child 
let a= document.body.firstChild
console.log(a.parentNode) //calling parent node 
console.log(a.parentElement) //calling parent element it give null value if parent element is not html tags 
console.log(document.body.firstChild.nextSibling) //calling nextsibiling of div 





//Element only navigation
const changebgred=()=>{
    document.body.firstElementChild.style.background = 'blue'
}

changebgred()

b=document.body
console.log('this is a first child of body '+ b.firstChild) //give first child it is a comment,text or element.
console.log('this is a first element child of body ', b.firstElementChild)//its only print elements by this method we can avoid spaces and comments.

document.body.firstChild.previousElementSibling //previous sibling which is a element
document.body.firstChild.nextElementSibling 
document.body.firstElementChild
document.body.firstElementChild.firstElementChild //first grandson of body 
document.body.lastElementChild
 



//table links

let d=document.body.firstElementChild //calling div that is a firstchild of body
 console.log(d)

let t=document.body.firstElementChild.firstElementChild //calling div firstchild
console.log(t)

console.log(t.rows) //table rows
console.log(t.caption) // caption of table 
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tBodies)
// console.log(t.tbody.rows)
console.log(t)
console.log(t.rows[1])
console.log(t.rows[1].rowIndex)


//searching the Dom element 


//1.Select element by id to modify
let idget = document.getElementById("firsttab")
console.log(idget) 
idget.style.color='white'


//2.get element by classname
let ctitle=document.getElementsByClassName('btn') [0]
console.log(ctitle)
ctitle.style.color='red'


//3. select css tags [queryselectorall]
//select all element inside the tag
//note- always check tags  in sequence
let ctitle1=document.querySelectorAll(".navbar li a ")
[0]
console.log(ctitle1)
ctitle1.style.color='red'

let ctitle2=document.querySelectorAll(".navbar li a ")
console.log(ctitle2)
ctitle2[1].style.color='red'
ctitle2[2].style.color='orange'
ctitle2[3].style.color='blue'


//4.queryselector
//select first element of that tag
let bcnavbar=document.querySelector(".navbar")
console.log(bcnavbar)
bcnavbar.style.background='blue'

let box1 =document.querySelector('.box')
console.log(box1)
box1.style.color='red'

//5.by tag name

console.log(document.body.getElementsByTagName('a'))
console.log(document.querySelector('.btn').getElementsByTagName('b'))

//6. get element by name
// console.log(document.getElementsByName('yes'))



//i.matches -check the css selectors
//check that this element contain this id as well as this class  with help of id or class 

let tbox1=document.getElementById('box1')
console.log(tbox1.matches('.theseclass')) //these give false because this element not contain  this class 
console.log(tbox1.matches('.box')) //its give true beacause it contain that class

// ii.closed 
//it give nearnest element. it goes to upperside 
let near1=document.getElementById('mid1');
console.log(near1)
console.log(near1.closest(".header")); 

//iii.contains
let tbox2= document.getElementsByClassName('box')
console.log(tbox2)
let h11=document.getElementsByClassName('h1')

console.log(tbox2.contains(h11))











