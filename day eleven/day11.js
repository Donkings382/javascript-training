//closure is done to still access the code in an outer function from an inner function even after the outer function has stopped running

//function to createBackaccount but hide the initial value of the variable

function createBankAccount(initialAmount) {
  let balance = initialAmount;

  return function deposit(amount) {
    balance += amount;
    console.log("Current Balance", balance, "Deposited", amount);
  };
}
let donkingsAccount = createBankAccount(100);
console.log(donkingsAccount);
donkingsAccount(300);
donkingsAccount(700);

function createAnotherAccount(firstAmount) {
  let previousBal = firstAmount;
  return {
    addTobalance: function (amount) {
      previousBal += amount;
      console.log("Current Balance", previousBal, "Amount deposited", amount);
    },
    withdrawFrombalance: function (amount) {
      previousBal -= amount;
      if (amount > previousBal) {
        console.warn("Insufficient balance");
        return;
      }
      console.log("current Balance", previousBal, " Amount withdrawn", amount);
    },
    seeBalance: function (amount) {
      console.log("current Balance", previousBal);
    },
  };
}

let donkingsCreateAccount = createAnotherAccount(100);
console.log(donkingsCreateAccount);
donkingsCreateAccount.addTobalance(500);
donkingsCreateAccount.withdrawFrombalance(200);
donkingsCreateAccount.seeBalance();

function clickMe() {
  let count = 0;
  return document
    .getElementById("divbtn")
    .addEventListener("click", () => {
      document.getElementById("counter").innerText = ++count;
      console.log(count);
    });
}
clickMe();
