/* //events

//ways to add events in js 

//1. first way to give events in html tag 
//But this not a optimal way to use events because we not able to use all proprty of event 
onclick = 'console.log("owl is clicked ")'

//2. second way to write events
//it is also not a optimal way to write events
let owl = document.getElementById('owl')
owl.onclick = () => {
    console.log('owl is clicked2')
}
//note - if we write evenets in html tag and also  in javascript then javascript event overwrite html tag events


//3. Addeventslistner third way to write evenets and this is a best way to write events because ewe can use multiple events and its funtions at a same time 

//syntax

owl.addEventListener('click', function (e) {
    alert('1')
}, false)

//more info of syntax 
// 1. owl - this is a element call by getelementbyid by us where we can apply events 

// 2 .addEventListener - installinging event listener 

// 3. click - click is a event wee are using 

// 4. function - we need to write a functin  to exucute our demands or commands 

// 5.  function(e) - e is default event object[collection of lot of events properties  ] provide by  eventhander. we can use this property for various work .

//example
owl.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target) // give the element where we implement this click event 
    console.log(e.target.parentNode); // call the pparent node 
    console.log(e.type); // give the type of event like click mousehover 
    console.log(e.currentTarget); // give the element where this event is working
    console.log(e.clientX); // give cordinatas of x-axis and y-axis  
    console.log(e.clientY);
    console.log(e.timeStamp); // give time when you run events
    e.stopPropagation() // it stop the bubbling or capturing

}, false)

//conept of bubling and capturing (third parameter of addeventlisterner)

//  6. false , true - this is two bollen values . 
//false = bubling - means lower to upper -  means if both child and parent have a event at same time . in this case if we give option false  child event exucate first and then parernt event 

// true - capturing - means upper to lower  -means if both child and parent have a event at same time . in this case if we give option true  parent event exucate first and then child event 

*/

/*
//concept of preventdefault & stop propagation
 
let unorderd = document.getElementById('unorderd')

unorderd.addEventListener('click', function (e) {
    console.log(e.timeStamp + 'timestap of ul')
})
//we can change default behaviour of element
document.getElementById('google').addEventListener('click', function (e) {
    console.log('google clicked');
    e.preventDefault() // prevent default event like href
    e.stopPropagation()// stop bubling 
})

*/

/*
//examples of use cases of event 

// first example

let animal = document.getElementById('animal')

let x = function (e) {
    alert('1')
}    
let y = function (e) {
    alert('2')
}  // made functions for future use     

animal.addEventListener('click', x) // we can us function also this type 
animal.addEventListener('click', y)

let a = prompt('what is your fav number ');

// removeEventListener  - we can use it for disable event
if (a == '2') {
    animal.removeEventListener('click', x) // rremove eventlistener by our conditions
}    

*/


//2. second example - hide the image

document.querySelector('#unorderd').addEventListener(
    'click', function (e) {
       /*  // first code 
        console.log(e.target); //calling image
        let removeit = e.target.parentNode //calling li 
        removeit.remove() //removing  li */

        //but there is a problem when we clicked img , single img get removed but when we clicked any  li tag all images get wiped out because ul is a parent . so it remove direct ul . for this problem we give ome conditions 

        //improved code 
       console.log(e.target.tagName) ;

        if (e.target.tagName === 'IMG'){
            console.log(e.target.id)
            let removeit = e.target.parentNode 
            removeit.remove() ;
        }
        else{}
    }
)

