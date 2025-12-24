//Temporal deadzone:
// TDZ always starts from the beginning of  the block of code till when the variable has been initialized with a value, and it is a zone where a variable cannot be accessed until after it has been declared
{
  //TDZ starts here

  //console.log(colour); //it gives a referenceError due to the variable having no value before initialization this the variable enters a Temporal Dead Zone until it is declared

  //let colour = "green"; //TDZ ends here for colour variable

  // console.log(weight);

  //  const weight = 190; //TDZ ends here for weight variable

  console.log(relations); //here the variable is declared before assigned a value and it returns undefined because by default with var, all variables are assigned undefined before they are declared so it does not return any error

  /**
   * Temporal Dead zone always exist when the block of code starts and ends where the variable is assigned a value so each variables has its own TDZ.
   */

  var relations = "Uncle"; //TDZ ends here for relations,
}

//2
{
  /**
   * Variable hoisting is simply creating memory for that variable before it is initialized, this memory stores variable and its value in a stack if the variable is of a primitive type
   *
   * Function hoisting is simply creating memory for the function but the function can be successfully initialized even before declaration, thus it can be called or invoked even before the function is defined.
   *
   * Hoisting in the most simplest sense is also hanging the code declaration at the top of the code block.
   */

  console.log(president());

  function president() {
    console.log("President Bola Ahmed Tinubu");
  }

  //  console.log(name);//Here it returns a referenceError because the name has not been initialized with any value thus it cant be accessed before initialization, it is in TDZ till then.

  // let name = "Sandra Festus";

  console.log("my surname is", surname); //here the variable surname is hoisted, but it still works without no initialization, memory has been created for it, and due to var it is now initialized with undefined until the line 45 where a string value was assigned to it

  var surname = "Ize-iyamu";
  console.log(surname);
}

/**
 * TDZ only applies to const and let, it does not apply to functions and Var
 * In creation phase for const and let, hoisting without first initializing returns a referenceError but it returns undefined for var
 * Functions can be   invoked and hoisted to their fullest extent before the function itself is initialized a value and defined
 * Functions as expressions are treated like a variable instead of a function thus the rules of hoisting applies and depending on if the variable is declared with const, let or var, the behavioral patterns i just highlighted will apply
 */
