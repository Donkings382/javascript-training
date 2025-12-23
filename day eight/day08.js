//window is a global object in javascript that has different properties and method such alert, prompt, cleartInterval, clearTimeout. There is alos a special keyword called this, this keyword is giving by the javascript global execution context to the execution context of the code, the value of this is the value of the window object, check it by using this then realise this and window possess the same properties and methods if you try to compare them using this === window, those there are both non primitive values and are objects and they point to the same memory address thats why they return true when compared to each other with the strict equality operator

//the fact that
// 1.there is a window object and
// 2. this keyword and
// 3. window === this
// 4. Allocate memory for variable name and function sayName()
//5. name will be initialised by undefined
//6. The function body will be placed directly into memory
// fall under the creation phase, creation phase allocate space for your variable and functions

var name = " tom";

function sayName() {
  console.log(this.name);
}
sayName();
