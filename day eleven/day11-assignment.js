/**
 * function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();// this runs and ends
counter();// this picks or remembers the value of the outer() and continues to run it for as many times as it is called
counter();// same here too.

The output will be counter()// gives 1
the second output will be counter()//gives 2

this is due to closure which will make the inner() remember the value and initial state of the variable in the outer() long after it has been executed 
 */

/*function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

The output will be 100 because it is an example of closure so the first testClosure() calls the outerfunction housing the returned function while the second () calls the returned function that carries the x * x, the outerfunction already has x declared and initialized with 10 and the return function closes over the value 10 and remembers and so it is used in  the operatiob of x in the inner function


*/

function countButton() {
  let count = 0;
  return function counting() {
    document.getElementById("divbtn").addEventListener("click", () => {
      document.getElementById("counter").innerText = ++count;
      console.log(count);
    });
  };
}

// let result = countButton();
// result();
countButton()();

//4
function createMultiplier(multiplier) {
  let x = multiplier;
  return function () {
    let result = x * x;
    console.log(result);
  };
}
let answer = createMultiplier(5);
answer();

//5
//ii The object remains in memory as long as the closure exists

function countingCounter(number) {
  number;
  return {
    addtonumber: function (increment) {
      increment += number;
      console.log("Incrementing", increment);
    },
    removeFromnumber: function (increment) {
      if (increment < number) {
        let result = number - increment;
        console.log("decrementing", result);
      } else {
        result = increment - number;
        console.log("decrementing", result);
      }
    },
    resetNumber: function (increment) {
      increment = number;
      console.log("resetting", increment);
    },
  };
}
let resultCounter = countingCounter(15);
resultCounter.addtonumber(4);
resultCounter.removeFromnumber(4);
resultCounter.resetNumber(0);

function counter() {
  let counter = 0;
  return function () {
    document.getElementById("count").addEventListener("click", () => {
      document.getElementById("number").innerText = ++counter;
    });
    document.getElementById("count2").addEventListener("click", () => {
      document.getElementById("number").innerText = --counter;
    });
    document.getElementById("count3").addEventListener("click", () => {
      document.getElementById("number").innerText = 0;
    });
  };
}
let pageCounter = counter();
pageCounter();
