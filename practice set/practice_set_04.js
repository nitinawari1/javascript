//strings
//chapter 4 ps

//Q.1
console.log("har\"".length) //print 4 because length start from 1 & \ is not countable




//Q.2
//include - it give boolen value.  it says that this word  is present or not in this strings
const sentence='this peacock dance is so beatiful'
let bird='peacock';
console.log(sentence.includes(bird)) //it give true because peacock is present in sentence
console.log(`this word ${bird} ${sentence.includes(bird) ? 'is' : 'is not'} present in sentence`)



//startwith  //give boolean
console.log(sentence.startsWith('this'))//sentence start with this
console.log(sentence.startsWith('peacock',5))//sentence start with peacock at position 5 mean 5 index no.  se peacock start hota hai



//endwith
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));//in endwith last position must 17 not the starting of word means index no.17 me sentence khatam hoga 
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false


//Q.3
let word='please give rs 1000'
console.log(word.toUpperCase())

//Q.4
let amount=word.slice(14)
console.log(amount)

//Q.5
word[4]='w'; // word has no change because strings are immutable