//operators *, +, /, -
//operands x + y
//expressions : there are two types, assignment and evaluating, assignment makes the operand equal to the value e.g x = 2, evaluating takes the operands and operators and gives a different result on the value

let a = 10;
let b = 20;

console.log(a + b);
console.log(b - a);
console.log(a ** b);

let count = 7;
console.log(count++); //post increment: increase after because the operator ++ is on the right side , it returns the value then increment count = count + 1
console.log(count);
console.log(++count); //pre increment, increment first then return
let x = 10;
x += 3;
x -= 5;
// x /= 2;
x %= 3;
console.log(x);

//comparison operators
console.log(4 == 10);
console.log(0 == false); //conversion to the nearest type happens so false is seen as zero due to implicit conversion
console.log(3 == "9"); //returns true, == is not a reliable equality sign

console.log(0 === false); //strict equality, operands of diff types return false,
console.log(null === null);
console.log(undefined === undefined);

//NaN = Not a number, the result of NaN in comparison is always false, meaning if two operands are used and one of them is NaN the result will always return false

let obj1 = {
  name: "osahon",
};

let obj2 = {
  name: "osahon",
};
console.log(obj1 === obj2); //returns false due to difference in memory location in the heap
console.log(40 !== 20); //returns true , this is strictly not  operator
//comparison operators always return boolean true or false
console.log(4 <= 4); //as long as one comparison is true then the result is true
console.log(14 >= 4);
console.log(3 >= 7); //3 is neither greater than nor euqal to 7 so the result is false

//logical operators are used with boolean values to get boolean results only

//different logical operators include && || ?? !
//logical and (&&):
//op1 && op2: it will return false as long as left side is false and if left is not false then it will return whats on the right, if any of the operand is false then the result is false
false && false; //output false
true && false; //output false
true && true; //output true
false && true; //output false

console.log("cow" && "horse"); //horse, because cow cannot be converted to false so it returns whats on the right

console.log(4 < 5 && 3 < 4);

//or operator
//if any one of the condition return true then the result is true
false || false; //false
true || false; //true
false || true; //true
true || true; //true
//all positive values as long its not negative or zero can be converted to true so
console.log("cow" || "horse"); //cow because its true since it possesses no negative value

//!(negate operator)
console.log(!true); //false
//??(nullish operator)
//if the value is null or undefined then it will return the value on the left or right based on what side has the null or undefined value and if neither side has null or undefined value then it will return the value on the left
console.log(undefined ?? 2); //2
console.log(3 ?? null); //3
console.log("cow" ?? "goat"); //cow

//conditional ternary operator
//condition ? value1 : value2
//so if condition is true, execute value1 but if condition is false execute value2
let age = 10;
let result =
  age >= 30 ? "People above 29" : "People in their early 20s to late 20s";
console.log(result);


//bitwise operators

