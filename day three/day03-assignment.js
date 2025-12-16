let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numberCheck;
for (let i = 0; i < number.length; i++) {
  numberCheck = number[i];

  if (numberCheck % 2 == 0) {
    console.log(`${numberCheck} is an even number`);
  } else {
    console.log(`${numberCheck} is an odd number`);
  }
}

//2 using tenary operator to answer
let age = 20;
age >= 18
  ? (result = "You are old enough to drive")
  : (result = "you are not old enough to drive");

console.log(`Your age is ${age} therefore you are ${result}`);

//3 calculate CTC with a Bonus
let initialSalary = 12300;
let salarybonus = 12300 * 0.2;
let newSalary = 12300 + 2460;
let totalCTC = newSalary * 12;

console.log(`The salary bonus is ${salarybonus} Rupees`);
console.log(
  `The new salary is the initial salary plus the bonus which is ${newSalary} Rupees `
);
console.log(
  `The total money the employee is making per annum is ${totalCTC} Rupees`
);

//4
let color = "Red";

color === "Green" ? (command = "Go") : (command = "Stop");

console.log(`The traffic light is ${color} therefore you should ${command}`);

//5
let units = 150;
let unitMonthlyCharge = 150 * 30;

let unitDiscount = unitMonthlyCharge - unitMonthlyCharge * 0.2;
let totalAnnualUnitCharge = unitDiscount * 12;

console.log(
  `The monthly charge for the units is ${unitMonthlyCharge} rupees, if there is a 20% discount on the annual payment then the total charge on the annual payment based on that 20% discount will be ${totalAnnualUnitCharge}`
);

//6
let year;

year = 2024;

if (year % 4 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

//7
let p = 10;
let q = 20;
let r = 30;

if (p > q && p > r) {
  console.log(`${p} is the largest number`);
} else if (q > p && q > r) {
  console.log(`${q} is the largest number`);
} else {
  console.log(`${r} is the largest number`);
}

//8
let count = 5;
console.log(count << 1);//5 is 0101 and shift left to become 1010 by pushing in 0 from the right and let the left most bit fall off
