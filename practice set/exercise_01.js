//creating random number  guessing game


//generating random number 

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min));
}
let random_no = getRandomArbitrary(1, 100);

//getting a input from user while it give a correct answer 

let guess = 0;
do {
    var n = prompt('what is your number');
    n = Number.parseInt(n);
    guess++;
    if (n == random_no) {
        console.log('congratulation you guess the right no.') 
        console.log('your total guess is ' + guess)
        console.log('your score is '+ (100-guess))
    }
    else if (n > 101 || n < 00) {
        console.log('you entering invalid value')
    }
    else if (random_no < n) {
        console.log('your no. is geather than your guess ')
    }
    else if (random_no > n) {
        console.log('your no. is lesser than your guess ')
    }
    else {
        console.log('you enter wrong value')
    }
} while (n != random_no)


