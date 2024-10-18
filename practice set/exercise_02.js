//making varibles to store all value 
let cpui = 0;//score of user
let useri = 0;//score of cpu
let tie = 0;// tie matches 
let chance = 0;//how many times play
let user;//user input 
let cpu;//cpu input
let match;//mathicng function
let nextplay;

//making loop for play again
do {
    //making loop for 3 times chance 
    do {
        let myArray = ['s', 'w', 'g']
        cpu = myArray[Math.floor(Math.random() * myArray.length)];

        user = prompt(`this is a snake,water, gun game,\ncomputer choose one of these randomly, \n and you also have to choose one of these randomly  with s,w or g,  \nyou have  3 chance to win game  - ${chance}/3 `)

        //matching the options that user and cpu choose 
        match = (cpu, user) => {
            if (cpu === user) {
                return tie++
            }
            else if (cpu === 's' && user === 'w') {
                return cpui++;
            }
            else if (cpu === 's' && user === 'g') {
                return useri++;
            }
            else if (cpu === 'w' && user === 's') {
                return useri++;
            }
            else if (cpu === 'w' && user === 'g') {
                return cpui++;
            }
            else if (cpu === 'g' && user === 's') {
                return cpui++;
            }
            else if (cpu === 'g' && user === 'w') {
                return useri++;
            }

        }
        chance++
        match(cpu, user)//calling matching function for run all code 

    } while (chance <= 2)
    //declaring score and winner 
    console.log(`your score is ${useri} AND cpu score is ${cpui}`)
    if (cpui > useri) {
        console.log(`SO WINNER IS CPU😭😭`)
    }
    else if (cpui == useri) {
        console.log(`${tie} match are tie `)
        console.log(`SO CHANCE IS TIE 😐😐`)
    }
    else {
        console.log(`SO WINNER IS YOU😊😀`)
    }
    nextplay = confirm('you want to play again ')
    //reseting a score  for play again 
    cpui = 0;
    useri = 0;
    tie = 0;
    chance = 0;

} while (nextplay == true)
//let's end the playing of game 
alert('thank you for playing this game')