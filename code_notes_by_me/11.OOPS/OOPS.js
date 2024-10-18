const person = {
         name: 'John',
         age: 30,
         greet() {
                  console.log(`Hello, my name is ${this.name}`); // this use for pointing to the current reference 
                  console.log(this); // this will refence to all object proiperties and method and print it
         }
};

console.log(person.greet())
console.log(this); // this will give  empty parathesis because in node global context doesnt have anything  but in browser we got lot of things like windows fetch etc


function User (username , logincount , isLoggedIn){
         this.username = username
         this.logincount = logincount
         this.isLoggedIn = isLoggedIn
         return this  //if we don't return this value still it return implicitly 
}

// const userOne = User("nitin" , 12 , true)
// const usertwo = User("xyz" , 15 , false) //this will overwrite the userone because we don't specify him as a new Inheritance:
//console.log(userOne); // print value of usertwo

//creating new Inheritance
const userOne = new User("nitin" , 12 , true)
const usertwo = new  User("xyz" , 15 , false)

//working of new keyword
//1. when we use new keyword then new object created called as instant 
//2. constructor function called automatiaclly and pass the all arguments 
//3. this keyword inject with arguments




function multipleBy5 (num) {
         return num*5
}
 
multipleBy5.power = 2  //at the end function also is a object so we can also access as object 


console.log(multipleBy5(5));
console.log(multipleBy5.power); 
console.log(multipleBy5.prototype); // accesing prototypes of this function like length 












function createuser (username , score ){
         this.username  = username
         this.score = score
}

console.log(createuser("nitn"))


//creating our prototype 
createuser.prototype.increament = function(){
         this.score++  // here this point out to the user who called this function and increase his score 
}

createuser.prototype.printme = function (){
         console.log(`score is ${this.score}`)
}

//creating new instances
//new keyword give  refernce to chai that new prototype or method are added 
const chai = new createuser("chai" , 25) //this is  a instance 
const tea = new createuser("tea" , 250) // this is a  instance 

chai.printme() // it will print score of chai 






let myhero = ["hulk " , "spiderman"]

let heropower ={
         thor:"hammer",
         spiderman:"sling",

         getSpiderPower : function (){
                  console.log(`spidy power is ${this.spiderman}`)
         }
}


//this will inject nitin as a prototype in top level herarky onject means every object, array , string will able to access thsi method 
Object.prototype.nitin = function (){
         console.log("nitin as method is  present in all object ");
}

heropower.nitin() // executing prototype/method inejcted as a nitin in object
myhero.nitin() // it will also able to access the method because every one goes thorugh object 

Array.prototype.nitin1 = function (){
         console.log("nitin1 as method injecting in top level of array but this not acceseble by any other type like string object etc  ");
}

myhero.nitin1() // accesible 
heropower.nitin1() //not accesible



// inheritance  - just giving access of properties  of other object

const user = {
         name: "John Doe",
         email: "john@example.com"
     };

     const teacher ={
         name:"xyz",
          age : 13
     }
     const teachersupport ={
         support : true
     }
     const TA ={
         makeassignment : "js assignment "
     }

     // giving access of porperites of each other objects

     const TAsupport ={
        work:"follow",
        __proto__:teacher // refence of object 
     }


     teacher.__proto__  =user  


     //modern syntax
     Object.setPrototypeOf(teacher , user ) // giving access of user to teacher 



     //string 
//task is remove the extra length and give true length create prototypr for all strings
     let name = "chaiaurcode       "


String.prototype.truelength = function(){
         console.log(this) // this is string that is called function here either chaiaurcode or nitin 
         console.log(`true length is ${this.trim().length}`); 
}

name.truelength() // calling prototype 
"nitin".truelength() //calling prototype with string nitin 