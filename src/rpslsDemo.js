
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




let randomNum = Math.floor(Math.random() * 3);
let computerChoice = choiceStack[randomNum];



































// /* get user's input */
// let userChoice = prompt('please choose one from rock, paper or scissors, and type into the box below');
// /* convert user's input into index */
// userChoice = userChoice.toLowerCase();
// let choiceStack = ['paper', 'rock', 'scissors'];
// let userChoiceIndex = choiceStack.indexOf(userChoice);
// /* generate computer's choice */
// let randomNum = Math.floor(Math.random() * 3);
// let computerChoice = choiceStack[randomNum];
// /* log the each choices on the console */
// console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);
// /* make a two dimensional array */
// const results = [
// ['t', 'c', 'u'],
// ['u', 't', 'c'],
// ['c', 'u', 't'],
// ];
// /* use userChoice index (because in the end we just need the user result) to find the result in this two dimensional array */
// let userResult = results[randomNum][userChoiceIndex];
// /* make an object to convert the final result into a sentence, so we can log it on the console */
// const resultMap = {
// 't': "Tie",
// 'u': "You win",
// 'c': "You lose"
// };
// console.log(resultMap[userResult]);