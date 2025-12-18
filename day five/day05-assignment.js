//1 creating a pyramid of stars * using loops
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
    console.log(i, j, stars);
  }
}

//2 creating multiplication Table (using for loop)
for (let i = 1; i <= 10; i++) {
  let randomNumber = 2;
  for (let j = 1; j <= 10; j++) {
    let result = randomNumber * j;
    console.log(`${randomNumber} x ${j} = ${result}`);
  }
}

//3 find the summation of all odd numbers between 1 to 500 and print them on the console log
let sum = 0;
for (let number = 1; number <= 500; number++) {
  if (number % 2 !== 0) {
    sum += number;
  }
}
console.log(`The summation of all odd numbers between 1 to 500 is ${sum}`);
//4 write a program to skip multiples of 3
for (let i = 1; i <= 20; i++) {
  if (i === 3 || i === 6 || i === 9 || i === 12 || i === 15 || i === 18) {
    continue;
  }
  console.log(i);
}

//5 program to reverse digits of a number
let input = "6789";
let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}
console.log(`The reversed number is ${reversed}`);

//Write your understanding on the differences between for, while, and do while loops.

/*For loop is used for when there is a definite or known number of iterations, while loop is used for when the number of iterations is not known and depends on a condition, and do while loop is used for when you want to execute the loop condition atleast once */
