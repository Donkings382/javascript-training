//for loop to calculate numbers

// for (let count = 0; count <= 5; count++) {
//   console.log(count);
// }
//program to count the even numbers rom one to hundred
let sum = 0;
for (let number = 1; number <= 100; number++) {
  if (number % 2 === 0) {
    sum += number;
    console.log(number);
  }
}

console.log(sum);

let string = "javascript";
for (let i = 0; i < string.length; i++) {
  console.log(`${i}`, string.charAt(i));
}

//nested for loop

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("row", i, "col", j);
  }
}

//break and continue
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i === 9) {
//     break;
//   }
// }
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    continue;
  }
  console.log(i);
}

//loops that go both ways
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

//printing * in a pyramid fashion
/*
 *
 **
 ***
 ****
 *****
 */

let star = "*";
let star2 = "**";
let star3 = "***";
let star4 = "****";
let star5 = "*****";
for (let i = 1; i <= 5; i++) {
 
}

//while loop
//a while loop runs as long as a given condition is true,best for when we dont know how many iterations
let condition = 1;
while (condition <= 5) {
  console.log(condition);
  condition++;
}

let numbers = 2;
do {
  console.log(numbers);
  numbers++;
} while (numbers <= 7);
