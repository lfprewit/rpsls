
let uChoice = "rock";
let cChoice = "spock";

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

uIndex = choices.indexOf(uChoice);
cIndex = choices.indexOf(cChoice);


const result = [
    ['t','l','w','w','l'],
    ['w','t','l','l','w'],
    ['l','w','t','w','l'],
    ['l','w','l','t','w'],
    ['w','l','w','l','t']
];

console.log(result[uIndex][cIndex]);




let randomNum = Math.floor(Math.random() * 5);
let computerChoice = choices[randomNum];
