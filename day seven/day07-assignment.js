function rps() {
  let max = 3;
  let min = 1;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let computerChoice;
  let userprompt = prompt("Enter Rock, Paper or Scissors");
  let userChoice = userprompt.toLowerCase();

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  switch (true) {
    case userChoice === computerChoice:
      console.log(`This round is A tie!`);
      break;
    case (userChoice === "rock" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "rock"):
      console.log(
        `You picked ${userChoice}, computer picked ${computerChoice}....Computer wins`
      );
      break;
    case (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "rock" && computerChoice === "scissors"):
      console.log(
        `You picked ${userChoice}, computer picked ${computerChoice}....You win`
      );
      break;

    default:
      console.log("Enter the valid input");
  }

  let userAgainprompt = prompt("Do you still want to play again YES/NO");
  let userplayAgain = userAgainprompt ? userAgainprompt.toLowerCase() : "no";

  if (userplayAgain === "yes") {
    rps();
  } else {
    console.log("thanks for playing, come again!");
  }
}
//rps();

//guess the number game
function guessNumber() {
  let randomGuess = Math.floor(Math.random() * 10) + 1;

  let computerMind = randomGuess;

  let userAttempts = 0;
  let maxAttempts = 10;
  while (userAttempts < maxAttempts) {
    let userInput = parseInt(prompt("Guess a number from 1 to 10"));
    let userChoice = userInput;
    userAttempts++;

    if (userChoice > computerMind) {
      console.log(
        `Your guess is higher than what i have  in mind. Attempt ${userAttempts}, you guessed ${userChoice}`
      );
    } else if (userChoice < computerMind) {
      console.log(
        `Your guess is lower than what i have  in mind. Attempt ${userAttempts}, you guessed ${userChoice}`
      );
    } else if (userChoice === computerMind) {
      console.log("Your guess is correct!");
      return;
    }

    if (userAttempts === maxAttempts) {
      console.log(
        `User has expired ${maxAttempts} attempts, the number is ${computerMind}`
      );

      return;
    }
  }
}
guessNumber();
