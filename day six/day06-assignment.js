function celsiustoFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return `fahrenheit: ${fahrenheit}F`;
}
console.log(celsiustoFahrenheit(40));
//2: checking to find maximum of two numbers

function findMax(num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num2 > num1) {
    return `${num2} is greater than ${num1}`;
  }
}

console.log(findMax(-10, -15));

//3: checking if a string is a palindrome

function isPalindrome(str) {
  let strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  if (str === strReverse) {
    console.log(`The word ${str} is a palindrome of ${strReverse}`);
  } else {
    console.log(`The word ${str} is not a palindrome ${strReverse}`);
  }
}

isPalindrome("head");

//4: Write a function to find Factorial of a number

let factorial = function (n, ...rest) {
  rest = n - rest;
  let factori = n * (n - 1) * (n - 2) * (n - 3) * (n - 4);
  return console.log(factori);
};
factorial(5);

//5
vowelCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count += 1;
    }
  }
  return `The number of vowels in the word: ${str} is ${count}`;
};

console.log(vowelCount("sandra"));

//6 function to capitalize first letter of a word
let capitalize = (str) => {
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }
  return console.log(newStr);
};
capitalize("barbara");

//7 function that uses IIFE
(function () {
  console.log("Hello, Javascript!");
})();

//call back function
function greet(name, callback) {
  console.log(`Hello my name is ${name}`);
  callback(name);
}

function Hello(name) {
  console.log(`hi there!, my name is also ${name}`);
}
greet("donald", Hello);

//call stack execution program
function f1() {
  console.log("This is the first function");
}
function f2() {
  f1();
  console.log("This is the second function");
}
f2();

//10 call stack execution diagram for this flow
function fa() {
  console.log("hello! first program");
}
function fb() {
  console.log("hello second program");
}
function fc() {
  fa();
  console.log("third program");
}
fb();
fc();
fa();
