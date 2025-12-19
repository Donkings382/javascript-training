function printMe() {
  console.log("Print me ....");
}
printMe();

//function as an expression
let PrintMe = function () {
  console.log("print me as an expression of a function");
};

console.log(PrintMe);
PrintMe();

//function that has inputs, this inputs are called parameters or placeholders, arguments are the actual value that replace the declared   variables used in the parameters
function sum(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}
sum(1, 5); //1, 5 are the arguments replacing variables a and b
let result = sum(13, 5);
//console.log(result);
function double(x) {
  return (x *= 2);
}
console.log(double(result));

//default parameters
function calc(a = 0, b = 0) {
  return 2 * (a + b);
}
const resval = calc(2);
console.log(resval);

//rest parameter
function argu(x, y, ...theRest) {
  return console.log(x, y, theRest);
}

argu(1, 2, 3, 4, 5, 6, 7, 10, 14);

//nested function
function outer() {
  console.log("Outer Function");
  return function inner() {
    console.log("Inner Function");
  };
  // inner();
}
//outer();
let retfunc = outer();
console.log(retfunc());

//call back function
//you can also create a condition for the call back function
let callCondition = true;
function call(func) {
  console.log("Donald");
  if (callCondition) {
    func();
  }
}

/*call(function () {
  console.log("Ize-iyamu");
});*/
let surname = function () {
  console.log("ize-iyamu");
};
call(surname);

//pure function
function pureF(name) {
  return `Hello ${name}`;
}

console.log(pureF("Don kings"));
console.log(pureF("Don kings"));
console.log(pureF("Don kings"));
//impure function
let greeting = "Good evening"; //side effect
function puref(name) {
  return `${greeting} ${name}`;
}
console.log(puref("Sandra"));

//higher order function
function getCamera(camera) {
  camera();
}
getCamera(function () {
  console.log("Hello this is a camera lens");
});
//getCamera(camera);

//another variation of high order function
function high() {
  return function () {
    console.log("This is a HOF");
  };
}
let returnfunc = high();
returnfunc();

//hof are used mostly as wrappers to encase a function inside another function so you can use a function in another context

//arrow function
let say = (greetings) => console.log("hello " + greetings);
say("Sandra Festus");

//IIFE(Immediately invoked function expression)
(function (dope) {
  console.log("IIFE", dope);
})("This function is immediately invoked"); //best use case if for plug ins for a web site like chat bot, logo, call to action immediately a site has loaded etc

//recursion, recursion happens when a function is calling itself, when using recursion it should have a base condition and exit criteria
function foo(count) {
  console.log("Fetching water", count);
  if (count === 1) {
    //base condition
    console.log("no more water to fetch");
    return; //exit criteria
  }
  foo(count - 1);
}

foo(8);

//call stack refers to how functions are called  in an order called a stack, how the functions are set from first to last and called from last to first or different orders depending on if the functions are called within the other functions
//The functions are executed in a function execution stack, more of call stack is execution context and event loop, once functions are executed it is taken out of the stack according to order of execution
