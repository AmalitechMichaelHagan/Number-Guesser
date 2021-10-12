let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random()*9);

const compareGuesses = (userGuess,cpuGuess,targetNum)=>{
const userDiff = Math.abs(userGuess - targetNum);
const cpuDiff = Math.abs(cpuGuess - targetNum);

if(userDiff < cpuDiff || userDiff === cpuDiff){

    return true;

}else{
    return false;
}



}

const updateScore = (winner) =>{

if(winner==='human' || winner === 'computer'){

winner === 'human' ? humanScore++ : computerScore++ ;

}else{
    console.log('Invalid Input')
}

}

const advanceRound = () => currentRoundNumber++;