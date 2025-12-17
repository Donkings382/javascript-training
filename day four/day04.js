let age = 11;
age >= 18
  ? console.log(`Your age: ${age} is eligible to vote `)
  : console.log("You are not eligible to vote");

//grading system

let gradeScore;
let gradeLetter;

gradeScore = 50;

if (gradeScore >= 70) {
  gradeLetter = "A";
  console.log(
    `You scored above 70, so your grade is ${gradeLetter}, excellent performance!`
  );
} else if (gradeScore <= 69 && gradeScore > 59) {
  gradeLetter = "B";
  console.log(`You scored ${gradeScore}, so your grade is ${gradeLetter}`);
} else if (gradeScore <= 59 && gradeScore > 49) {
  gradeLetter = "C";
  console.log(`You scored ${gradeScore}, so your grade is ${gradeLetter}`);
} else if (gradeScore <= 49 && gradeScore > 39) {
  gradeLetter = "D";
  console.log(`You scored ${gradeScore}, so your grade is ${gradeLetter}`);
} else if (gradeScore <= 39) {
  gradeLetter = "F";
  console.log(
    `You scored ${gradeScore}, so your grade is ${gradeLetter}, you scored very poorly`
  );
}
//nesting if

let condition = false;
let innerCondition = false;
if (condition) {
  console.log("Outer if");
  if (innerCondition) {
    console.log("inner if");
  } else {
    console.log("inner else");
  }
} else {
  console.log("Outer if for false");
  if (innerCondition) {
    console.log("inner else for true");
  } else {
    console.log("inner else for false");
  }
}

//switch case: this is used to deal with multiple conditions when they are many because using else if is not ideal in that scenario
//personal project, use a switch condition to do rock paper and scissor game
let signal = 10;

switch (signal) {
  case 1:
    console.log("Print 1");
    break;
  case 2:
    console.log("Print 2");
    break;
  case 3:
    console.log("Print 3");
    break;
  case 4:
    console.log("Print 4");
    break;
  case 5:
    console.log("Print 5");
    break;

  default:
    console.log("No match was found");
}

let dayNumber = 9;

switch (dayNumber) {
  case 1:
    console.log("Day one is Monday");
    break;
  case 2:
    console.log("Day two is Tuesday");
    break;
  case 3:
    console.log("Day three is Wednesday");
    break;
  case 4:
    console.log("Day four is Thursday");
    break;
  case 5:
    console.log("Day five is Friday");
    break;
  case 6:
    console.log("Day six is Saturday");
    break;
  case 7:
    console.log("Day seven is Sunday");
    break;

  default:
    console.log("Invalid entry");
}

let states = "German";

switch (states) {
  case "Abuja":
    console.log(`Abuja is one of the 36 states`);
  case "Jigawa":
    console.log(`Jigawa is one of the 36 states`);
  case "Edo":
    console.log(`Edo is one of the 36 states`);
  case "Lagos":
    console.log(`Lagos is one of the 36 states`);
    break;

  case "Germany":
    console.log(`Germany is not one of the 36 states but a country`);
    break;

  default:
    console.log("Out of Scope");
}
