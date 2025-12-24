//4 Types of scopes of Javascript
//1. Global scope
//2. function scope
//3. Block scope
//4. Module scope

/**
 * Global scope : this refers to variables declared outside of any function or block scope and are in the global scope
 */
//let name = "ize-iyamu";
var name = "ize-iyamu";
function greeting() {
  console.log("Hello", name);
}
greeting();

console.log(name);
//only when you declare a variable with var it becomes a property of the windows object e.g window.name

{
  console.log("Good bye", name);
}

//function scopt: variables are declared only inside the function
//accessible within that function.

function toDo() {
  var task = "Learning 40days of js";
  console.log(task);
}

toDo();
//console.log(task); //uncaught reference Error

//Block scope: Variables declared using let and const inside a block {} cannot be accessed outside the block except its a var keyword declaring it, var is always function scope, let and const are always block scope meaning the only way a var may not be accessed is when using outside a function after it has been declared inside the function

{
  var count = 10;
  let range = 5;

  while (range < count) {
    count--;
  }
}
console.log(count);

//scope chain: this is when javascript tries to access a variable from the lowest to the highest level of scope until it is found(from block scope to function scope to global scope)
let globalVal = "i am a global variable";
function outer() {
  let outerVar = "I am an Outer Variable";

  function inner() {
    let innerVar = "I am an inner variable";

    console.log(innerVar); //"i am an inner variable"
    console.log(outerVar); // "i am an outer variable"
    console.log(globalVal); //"i am a global variable"
  }
  inner();
}

outer();
//console.log(outerVar);//referenceError
var count = 10;
function outer() {
  var count = 20;

  function inner() {
    var count = 30;
    console.log(count); //output is 30(inner function scope)1
  }
  inner();
  console.log(count); //output is 20(outer function scope)2
}
outer();
console.log(count); //output is 10(global scope)3

//variable shadowing: this is when the variable in the innerScope having the same name as the outer scope hides the value of the variable in the outerScope, in this javascript picks the variable within the nearest scope chain to display when ever both variables have the same name

let message = "i am doing great";

function situation() {
  let message = "i am not doing great";
  console.log(message); //i am not doing great(1)
}

situation();
console.log(message); //i am doing great(2)

//it is good practice to use let for loops instead of var because var will make the value accessible outside of the loop causing the probability of polluting the variable value from the outside
for (let i = 0; i < 10; i++) {
  let counter = 0;
  counter++;
}
//console.log(counter);

for (var count = 0; count < 3; count++) {
  //console.log(count);
  var message1 = "i love sandra";

  console.log(message1);//is accessed inside the loop but value still leaks to outside the loop so using the var is not advisable
}
console.log(message1);
