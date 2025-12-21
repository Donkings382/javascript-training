/**
 * The rock, paper or scissors game
 * This game will be played between the computer and human. once human will select rock, paper, or scissors and in the next turn the computer will select rock, paper or scissors.
 * The winner will be selected based on these rules:
 * -rock can break scissors => rock wins
 * -paper can wrap rock => paper wins
 * -scissors can cut paper => scissors wins
 * ask the input from the user and randomly select a computer selection to continue the game
 */

//assumptions:
//1. We have to prompt the user to get their inputs
//2. The computer's selection will be random
//3. We have to compare user and computer's choice.
//4. We need to announce the winner.
//5. After the winner announcement , we may want to ask the user to play again or quit from the game

function rockpaperScissorsGame() {
  console.log("Getting started with the rock paper, scissors game");
  const userChoicePrompt = prompt("Enter rock, paper, or scissors");
  let userChoice = userChoicePrompt.toLowerCase();
  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
  } else {
    computerChoice = "paper";
  }
  console.log("user selected", userChoice);
  console.log("Computer selected", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win! Yay");
  } else if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "paper")
  ) {
    console.log("this is a tie!");
  } else if (
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "rock" && computerChoice === "paper")
  ) {
    console.log("Oh no...Computer wins!!");
  } else {
    console.log("Please check the input, we did not understand it");
  }
const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no"

if(playAgain === "yes"){
  rockpaperScissorsGame();
} else {
  console.log("Thanks for Playing! See you Next time")
}

}

//Start This Game
rockpaperScissorsGame();


/*Let us play a number guessing game
You will ask user for  a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number, You also need to show the number of attempts made by users to reach to this right guess
 */

//my own rock paper scissors game
// function rockpaperScissor() {
//   const userPrompt = prompt("Enter Rock, paper or Scissors");
//   const userChoice = userPrompt.toLowerCase();

//   let computerChoice;
//   let max = 3;
//   let min = 1;
//   const randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;

//   //computer logic
//   if (randomNumber === 1) {
//     computerChoice = "rock";
//   } else if (randomNumber === 2) {
//     computerChoice = "scissors";
//   } else if (randomNumber === 3) {
//     computerChoice = "paper";
//   }

//   console.log(
//     `User picked: ${userChoice} while computer picked: ${computerChoice}`
//   );

//   //user logic
//   if (
//     (userChoice === "rock" && computerChoice === "scissors") ||
//     (userChoice === "scissors" && computerChoice === "paper") ||
//     (userChoice === "paper" && computerChoice === "rock")
//   ) {
//     console.log("You win this round!");
//   } else if (
//     (userChoice === "scissors" && computerChoice === "rock") ||
//     (userChoice === "paper" && computerChoice === "scissors") ||
//     (userChoice === "rock" && computerChoice === "paper")
//   ) {
//     console.log("You lose this round!");
//   } else if (
//     (userChoice === "scissors" && computerChoice === "scissors") ||
//     (userChoice === "paper" && computerChoice === "paper") ||
//     (userChoice === "rock" && computerChoice === "rock")
//   ) {
//     console.log("You tie in this round");
//   }

//   const userAgain = prompt("Will you like to play again Yes/No");
//   const userAgainPrompt = userAgain ? userAgain.toLowerCase() : "no";

//   if (userAgainPrompt === "yes") {
//     rockpaperScissor();
//   } else {
//     console.log("Thanks for playing, come again!");
//   }
// }