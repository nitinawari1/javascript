//   //Dom_property

// // //1.console.dir
// // console.log(document.body)// give a html elements
// // console.dir(document.body)//print as a object with all properties


// //2.tagname/nodename

// console.log(document.body.firstElementChild.tagName)//only give elements
// console.log(document.body.firstChild.nodeName)//defined for any nodes [text,comment,etc]


// //3.innerHTML
// //it give inner html of any tag 
// //it only work on elements node
// let h1 = document.getElementsByClassName('h1')[0]
// console.log(h1.innerHTML)

// h1.innerHTML= '<i>we can change the innerHTML</i>' //it change inner html with tag  



// //4.outerHTml
// //it give inner  and outer html with that tag whhere we can apply 
// console.log(h1.outerHTML) 
// //h1.outerHTML='<span>changing the outer tag</span>' //it replaace tag and text



// //5.data
// console.log(document.body.firstElementChild.firstChild.data)//it work on comment ,text and gice the data
// console.log(document.body.firstChild.nodevalue)

// //6.text content & innertext
 
// console.log(document.body.textContent) // give all html as a text  and also give hidden content 
// console.log(document.body.innerText)  // only give text of a element 


// //7.hidden
// h1.hidden='flase'; //show the hidden html tags





// //attribute  method
// let box1=document.getElementById('box1')

// //1.get attribute 
// //give the  attribute that we want 
// let a=box1.getAttribute('class') //give class attribute
//  console.log(a)


//  //2.has Attribute 
//  //check that these attribute present or not
// //give bollen value 
// console.log(box1.hasAttribute('style')) //give false because style not present 
// console.log(box1.hasAttribute('class'))//true


// //3.set Attribute 
// //set the Attribute to element
// box1.setAttribute('hidden','true') // seting hidden attribute to this element
// box1.setAttribute('class','1st 2nd') // seting two class attribute to this element


// //4.remove Attribute
// //remove the attribute
// box1.removeAttribute('hidden') // removing hidden attribute to this element


// //5.attribute
// console.log(box1.attributes)//give all attribute that we can apply to this element


// //6.data- 
// //it help us to make custom attributes
// box1.setAttribute('data-game','mario') //set custom attribute
// console.log(box1.dataset.game)//call custom attribute. print atrribute value

// //7.remove
// .remove()//remove the element


//Insertion method

//1.old method to add elemnt to html
// let abc=document.getElementById('box1')
// let ab=document.getElementsByClassName('box')[0]
// ab.innerHTML =ab.innerHTML + '<h1>hello world</h1>'
// console.log(ab)

//2.creating the element 
//style.1
// const para = document.createElement("p");
// para.innerHTML = "<h1>This is a paragraph</h1>";
// // document.body.appendChild(para);.// apeend to body 
// // abc.appendChild(para); // appending into a box1

// //style.2
// const para = document.createElement("p");
// para.innerHTML = "<h1>This is a paragraph</h1>";
// // document.body.appendChild(para);
// document.body.appendChild(para);

//optisime way create child 

// const div1 = document.createElement('div')
// div1.setAttribute('class' , 'div1  div2')
// div1.id = Math.round (Math.random() * 10 + 1 )
// // div1.innerText= 'chai aur code ' take two step 
// let text = document.createTextNode ('chai aur code ')
// div1.appendChild(text)
// document.body.appendChild(div1)
// console.log(div1)





// //moving element from one point to two point
// abc.append(para) //appending into box1
// abc.prepend(para) //print at start of  box1
// abc.before(para) //print before box1
// abc.after(para) //print after box1
// abc.replaceWith(para) //replace abc with p 


// insertAdjacentHTML/ text/ ELEMENT

// let div=document.getElementById('mid1')
// div.insertAdjacentHTML('beforebegin','<p>hello i am cyber security researcher</p>') 
// div.insertAdjacentHTML('afterbegin','<p>hello i am cyber security researcher</p>')
// div.insertAdjacentHTML('beforeend','<p>hello i am cyber security researcher</p>')
// div.insertAdjacentHTML('afterend','<p>hello i am cyber security researcher</p>')
 

// //classname & classlist 
// let navbar= document.getElementById('navbar1')
// console.log(navbar)

// navbar.className='red config ' //give class with css 
// console.log(navbar.classList) // give the list of classes in of element  
// navbar.classList.remove('red') //remove class from element 
// navbar.classList.add('blue') //add  class to element
// navbar.classList.toggle('red') //if not have this class then add ,if we have then remove
// console.log(navbar.classList.contains('red'))// check this class have or not give boolen value



 //setTimeout
//execute code after perticular time 
document.write('hello')

// // writing  a function to set timeout 
// let a1=setTimeout (function(){
//     alert("I  am the Best ")
// },2000)


// let b = prompt('you want to see timeout')

// if ('n'==b){
//     clearTimeout(a1)//clear the timeout and dont run  this  code 
// } 

// const sum=(a,b)=>{
//     console.log('yes i working '+ (a+b))    
// }
// setTimeout(sum,5000,3,4)


// setinterval
// run code after same interval of time

const alert1=(a,b,c)=>{
    alert('your the genius ' + (a+b+c))
}
setInterval(alert1,2000,1,1,1)

setTimeout(() => { clearInterval(alert1); alert('stop'); }, 5000);

