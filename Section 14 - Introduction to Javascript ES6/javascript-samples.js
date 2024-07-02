// TODO: uncomment line of code to test

//* Alert
// alert("Hello World");

//* Datatypes
// aString = "This is a string";
// anInteger = 5;
// aBoolean = true;
// alert(aString); //string
// console.log(typeof aString);
// alert(anInteger + 5); //integer
// console.log(typeof anInteger);
// alert(aBoolean); //boolean
// console.log(typeof aBoolean);

//* Prompt
// prompt("What is your name?");

//* Variables
// var MyName = "Wayne";
// alert(MyName);
// console.log(MyName);

// var newName = prompt("What is your name?");

// alert(
//   "Hello, my name is " + MyName + " and Welcome to my Course " + newName + "!"
// );

//* Coding Exercise
// function test() {
//   var a = 3;
//   var b = 8;

//! ***** Do not Change the code above ******/
//   var c = a;
//   a = b;
//   b = c;
//! ***** Do not Change the code above ******/

//   console.log("a is " + a);
//   console.log("b is " + b);
// }

//* String Concatenation
// var message = "Hello";
// var myName = "Wayne";

// alert(message + " there, " + myName);

//* String Length and Retrieving the Number of Characters
// var myName = "Wayne";
// console.log(myName.length);
// var tweet = prompt("Write your message: ");
// var tweetCount = 280;
// var tweetLength = tweet.length;

// console.log(
//   "You have written " +
//     tweetLength +
//     " characters. " +
//     "You have " +
//     (tweetLength - tweetCount)
// );

//* Slicing and Extracting Parts of a String
// var myName = "Wayne";
// console.log(myName.length);
// var tweet = prompt("Write your message: ");
// var tweetSlice = tweet.slice(0, 140);
// var tweetCount = 140;
// var tweetLength = tweetSlice.length;

// console.log(
//   "You have written " +
//     tweetLength +
//     " characters. " +
//     "You have " +
//     (tweetLength - tweetCount)
// );

// alert(tweetSlice);

//Shorter Version
// alert(prompt("Compose your Message: ").slice(0, 140));

//* Challenge: Changing Casing in Text
// var myName = "Wayne";
// alert(myName.toUpperCase());
// alert(myName.toLowerCase());

//* Challenge: Changing String Casing Solution
// var myName = prompt("What is your Name? ");
// var firstLetterName = myName.slice(0, 1).toUpperCase();
// var otherLetterName = myName.slice(1, myName.length).toLowerCase();
// alert("Hello, " + firstLetterName + otherLetterName);

//* Basic Arithmetic and the modulo Operator in Javascript
// var dogAge = prompt("How old is your dog");
// var humanAge = (dogAge - 2) * 4 + 21;
// alert("The human age of your dog is " + humanAge + " years old. ");

//* Increment and Decrement Expressions
// var b = 1;
// b++;
// b--;
// b /= 2;
// b *= 2;

// var x = 3;
// var y = x++;
// y += 1;
//* Functions Part 1: Creating and Calling Functions

// function getMilk() {
//   console.log("Leave House");
//   console.log("Move Right");
//   console.log("Move Up");
//   console.log("Buy Milk");
//   console.log("Move Down");
//   console.log("Move Left");
//   console.log("Enter House");
// }

//* Functions Part 2: Parameters and Arguments
// var quantity = prompt("Input a number of Ice Cream: ");
// function getMilk(quantity) {
//   var cost = Math.floor(quantity * 1.5);
//   console.log("Leave House");
//   console.log("Move Right");
//   console.log("Move Up");
//   console.log("Buy " + quantity + " Milk for " + cost);
//   console.log("Move Down");
//   console.log("Move Left");
//   console.log("Enter House");
// }

// getMilk(quantity);

//* Coding Exercise 2: Life in Weeks Coding Exercise
// function lifeInWeeks(age) {
/************Don't change the code above************/
// var x = 90 * 365 - age * 365; // days
// var y = 90 * 52 - age * 52; // weeks
// var z = 90 * 12 - age * 12; // months
// var yearsLeft = 90; //years left
// console.log(
//   "You have " + x + " days, " + y + " weeks, and " + z + " months left. "
// );
/*************Don't change the code below**********/
// }

//* Functions Part 3: Output & Return Values
// function getMilk(startingMoney, costPerbottle) {
//   console.log("Leave House");
//   console.log("Move Right");
//   console.log("Move Up");
//   console.log(
//     "Buy " + calcBottles(startingMoney, costPerbottle) + " Bottles of Milk. "
//   );
//   console.log("Move Down");
//   console.log("Move Left");
//   console.log("Enter House");

//   return calcChange(startingMoney, costPerbottle);
// }

// function calcBottles(startingMoney, costPerbottle) {
//   var numberOfBottles = Math.floor(startingMoney / costPerbottle);
//   return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle) {
//   var change = startingAmount % costPerBottle;
//   return change;
// }

// console.log(getMilk(10, 3));

//* BMI Calculator
// // Create your function below this line.
// function bmiCalculator(weight, height) {
//   var bmi = weight / Math.pow(height, 2);
//   return Math.floor(bmi);
// }

// //if my height is 65kg and my height is 1.8m, I shoulld bbe able to call your function like this:
// var bmi = bmiCalculator(65, 1.8); //output should equal to 20.
// console.log(bmi);
