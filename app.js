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

// II. Loops
// Remember: USE letwhen you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 400; i += 3) {
  console.log(i);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
for (let i = 1; i >= 100; i++) {
  if (i % 2 === 0) {
    // Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    console.log(i + "<-- is an even number");
  }
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
    console.log("I found a number " + i + ". Hi five!");
  } else if (i % 3 === 0) {
    console.log("I found a number " + i + ". Three is a crowd");
  } else {
    console.log("I found a number " + i + ".");
  }
}

// D Bank Account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account = bank_account += i;
  console.log(bank_account);
}
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
bankAccount = 0;
for (let i = 1; i <= 100; i++) {
  bankAccount = bankAccount += i * 2;
  console.log(bankAccount);
}

// III Arrays & Flow Control
// A Talk About It
// What are the things in an array called?
// An Element
// Do Arrays guarantee those things will be in order?
// No
// What real-life thing could you model with an array?
// A shopping list

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = [
  "I'm gonna make him an offer he can't refuse",
  "Here's looking at you kid",
  "You're gonna need a bigger boat",
];

// C. Access Arrays
// Given the following array
const randomThings = [1, 10, "Hello", true];
// How do you access the 1st element in the array?
console.log(randomThings[0]);
// Change the value of "Hello"to "World"
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// D. Chaning Values
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mixing It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array:
const myArray = [5, 10, 500, 20];

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Cookies");
// Remove the 5from the beginning of the array.
myArray.shift(myArray[4]);
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array.
myArray.shift();
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
console.log(myArray.reverse());

// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:
num = 500;
// console.log()s "little number" if the number is entered is less than 100
if (num < 100) {
  console.log("little number");
  // console.log()s big numberif the number is greater than or equal to 100.
} else {
  console.log("big number");
}

// G. Monkey in the middle
// Write an if ... else if ... elsestatement:
num = 5;
// console.log()little number if the number entered is less than 5.
if (num < 5) {
  console.log("little number");
  // If the number entered is more than 10, log big number.
} else if (num > 10) {
  console.log("big number");
  // Otherwise, log "monkey".
} else {
  console.log("monkey");
}
