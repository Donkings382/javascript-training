console.log("name is", name);
//var name;//you cant declare const without assigning a value to it immediately
//const name = "don";
// let name;
// name = "don";

console.log("name is", name);

//Temporal Dead Zone(TDZ)
// TDZ = an area where you cannot access a variable until it is initialized
//if you try to access the variable before it is initialized you will get a referenceError
{
  // ===name variable's TDZ started here
  //
  //console.log(name);
  //
  //
  //
  //
  let name = "donkings"; //name variable's TDZ ended here
  console.log(name);
}

//function hoisting
//invoke a function, chase()
chase();

//declar4e a function, chase()
function chase() {
  console.log("Tom chases Jerry");
  caught();
}

//declare a function, caught()
function caught() {
  console.log("Tom caught Jerry");
}
