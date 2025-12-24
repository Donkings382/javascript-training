let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner(); //Output will be Bob due to scope chain, javascript will search for user from inside the function inner()first and when its not found it goes outside of inner() and finds user = Bob so it first logs "Bob"
}

outer(); // When outer() is called, the FEC for it commences, The Cp of outer causes the user to be stored in stack memory and then in Ep, Bob is assigned to user and then the inner() is called which accesses the console.log(user) but due to scope chain, the result of the user will display Bob instead of Alice.

//Alice will only show when console.log(user) happens in the global scope

//2
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total); // the global variable pollutes the function, a function is pure when it is not affected by external state, right now the arguments passed in do not give a consistent output and output is heavily depended on the external state of  the global variable instead of on just the arguments passed into the function

//3
function parent() {
  let name = "sandra festus";
  function child() {
    let child = "donald festus";
  }
  child();
  console.log(name);
}
parent();

//4
function loopty() {
  for (let i = 0; i < 3; i++) {
    let send = "i appear";
  }
  console.log(send); //no i cannot access the variable i declared inside the  for loop from the outside
}
//loopty();

//5
function outerAccess() {
  console.log("This is outer function");
  let relation; //declare in outer scope
  function innerAccess() {
    relation = "Uncle Osakwe"; //assign value in inner scope
  }
  innerAccess();
  console.log(relation);
}

outerAccess();

//6
//console.log(a);//temporal Dead zone so it will return referrenceError because the variable cannot be accessed before it is assigned a value
let a = 10;

//7
function showAge() {
  let age = 25;
  console.log(age); // output here is 25, age is accessible only within the function scope
}

console.log(age); //this will return referenceError, age was only defined with in the function ... ANS: B


//8
//The output will be "Hi" because of scope chain, the variable "message" is declared in the outer() and assigned "Hi", the scope is going to come from inner() going outwards till it finds the variable in the outer() and stop there, so once outer()is invoked the output will be "Hi" instead of "Hello"

//9 The output will be "Inner" because the console.log(x) is in the inner() in the same lexical environment as when x is declared and assigned value "Inner", scope chain says that the value and variable closest to the code is what is evaluated first before going outwards in the case of same variable name, so this is variable shadowing

/**
 * let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
 */

//10
/**
 * The output will be -2 because in counter(), count was declared and initialized to 0 but in the inner function, count is decremented, outside the counter (), a const reduce is assigned the function counter() and then that is called twice and for each invoke it reduces the value of the count
 * 
 * function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
 */