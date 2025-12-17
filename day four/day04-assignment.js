//1
//for the switch case, once monday is seen as the case string input then the console.log output will be executed but if there is no monday string input then the default output will be executed

//2
let amount = 20;
if (amount < 100) {
  console.log("Invalid amount");
} else if (amount === 100) {
  console.log("withdrawal is successful");
} else if (amount > 100) {
  console.log("Invalid amount");
}

//3 building a calculator with switchcase
let operator = "/";
let num = 10;
let num2 = 2;
switch (operator) {
  case "+":
    console.log(num + num2);
    break;
  case "-":
    console.log(num - num2);
    break;
  case "*":
    console.log(num * num2);
    break;
  case "/":
    console.log(num / num2);
    break;
  case "%":
    console.log(num % num2);
    break;

  default:
    console.log("Invalid operator");
}

//4 pay for movie ticket
let age = 68;
if (age < 10 || age < 18) {
  console.log("You pay $3");
} else if (age > 10 && age <= 60) {
  console.log("You pay $10");
} else if (age < 18) {
  console.log("you pay $3");
} else if (age <= 60 && age == 18) {
  console.log("You pay $10");
} else if (age > 60) {
  console.log("You pay $8");
}

//5 Horoscope Sign Checker
let month = "November";
switch (month) {
  case "January":
    console.log("Your horoscope sign is Aquarius or Capricorn");
    break;
  case "February":
    console.log("Your horoscope sign is pisces or Aquarius");
    break;
  case "March":
    console.log("Your horoscope sign is Aries or Pisces");
    break;
  case "April":
    console.log("Your horoscope sign is Taurus or Aries");
    break;
  case "May":
    console.log("Your horoscope sign is Gemini or Taurus");
    break;
  case "June":
    console.log("Your horoscope sign is Cancer or Gemini");
    break;
  case "July":
    console.log("Your horoscope sign is Leo or Cancer");
    break;
  case "August":
    console.log("Your horoscope sign is Virgo or Leo");
    break;
  case "September":
    console.log("Your horoscope sign is Libra or Virgo");
    break;
  case "October":
    console.log("Your horoscope sign is Scorpio or Libra");
    break;
  case "November":
    console.log("Your horoscope sign is Sagittarius or Scorpio");
    break;
  case "December":
    console.log("Your horoscope sign is Capricorn or Sagittarius");

    break;

  default:
    console.log("Invalid month");
}

let side1 = 1;
let side2 = 2;
let side3 = 3;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles triangle");
} else {
  console.log("Scalene triangle");
}
