// Variables and Datatypes
// A. Q + A
// How do we assign a value to a variable?
// We define a variable by first using let or const and then by giving the variable a meaningful name, using the equal sign to assign value, then adding the value that is to be stored in the variable
// EX: let num = 8;
// How do we change the value of a variable?
// We can change the value of a variable by stating the vairable name (without let or const), using the equal sign to reassign the value and then adding the new value that is being reassigned to the variable. This only works with variables that have been declared with let, if the vairbale is delcared with const, the reassignment will not work.
// EX: let fruit = "apple";
//     fruit = "orange";
// How do we assign an existing variable to a new variable?
// We can assign exisiing variable to new vairables by using the let or const keyword, giving the vaiable a meaningful name, using the equal sign to assign value and then adding the variable name that we would like to assign to the new variable.
// EX: let a = 6;
//     let b = 7;
//     let c = a;
// Remind me, what are declare, assign, and define?

// What is pseudocoding and why should you do it?

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 7;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "Apple";
// What is the value of firstVariable?
console.log(firstVariable);
// The value of firstVariable is 7
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "Cedra";
console.log("Hello my name is " + yourName);

// C. Boolean
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" == "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a < a + d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// D. The Farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "pig";
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow") {
  console.log("mooooo");
  // Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow.""
} else {
  console.log("Hey! You're not a cow.");
}
// Commit

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let age = 16;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}
