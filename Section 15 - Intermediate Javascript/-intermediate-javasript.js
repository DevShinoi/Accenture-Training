//* Random Number Generator
// var n = Math.random();
// n *= 10;
// n = Math.floor(n) + 1;
// console.log(n);

//* Love Calculator
// var firstPerson = prompt("What is your naame?");
// var secondPerson = prompt("What is their name?");

// var probability = Math.random();
// probability *= 100;

// console.log(
//   "The chance of a relationship working out between " +
//     firstPerson +
//     " and " +
//     secondPerson +
//     " is " +
//     probability +
//     "%."
// );

//* Love Calculator with If Statement, Comparators, and Equality

// var firstPerson = prompt("What is your name? ");
// var secondPerson = prompt("What is their name? ");

// var probability = Math.random();
// probability *= 100;
// probability = Math.floor(probability);

// if (probability >= 75) {
//   console.log(
//     "The chance of a relationship working out between " +
//       firstPerson +
//       " and " +
//       secondPerson +
//       " is " +
//       probability +
//       "%. You truly love each other. "
//   );
// } else if (probability > 50 && probability < 75) {
//   console.log(
//     "The chance of a relationship working out between " +
//       firstPerson +
//       " and " +
//       secondPerson +
//       " is " +
//       probability +
//       "%. may chance pa push lang teh. "
//   );
// } else {
//   console.log(
//     "The chance of a relationship working out between " +
//       firstPerson +
//       " and " +
//       secondPerson +
//       " is " +
//       probability +
//       "%. Maghanap ka na ng iba. "
//   );
// }

//* BMI with conditional, comparators and equality.
// function bmiCalculator (weight, height) {

//   var bmi = weight / Math.pow(height, 2);
//   bmi = Math.floor(bmi);
//   var interpretation;

//   if(bmi < 18.5){
//       interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//   }

//   else if(bmi >= 18.5 && bmi <= 24.9){
//       interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//   }

//   else if(bmi > 24.9){
//       interpretation = "Your BMI is " + bmi + ", so you are overweight.";
//   }

//   return interpretation;
// }

//* Working with Arrays
// var guestList = ["Wayne", "Bryan", "Niggel", "Nicol", "Kian"];
// var guestName = prompt("What is your name? ");

// console.log(guestList.includes(guestName));

//* FizzBuzz with array, conditional statement, and for/while loop to skip sections
// var arrayList = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function FizzBuzz(arrayList) {
//   for (let i = 0; i < arrayList.length; i++) {
//     if (arrayList[i] % 3 === 0 && arrayList[i] % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (arrayList[i] % 3 === 0) {
//       console.log("Fizz");
//     } else if (arrayList[i] % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(arrayList[i] + " ");
//     }
//   }
// }

// function FizzBuzz() {
//   var count = 1;
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (count % 3 === 0) {
//       console.log("Fizz");
//     } else if (count % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(count + ", ");
//     }
//     count++;
//   }
// }

//* 99 Bottles of Beer

// function Beer() {
//   var bottlesOfBeer = 99;
//   while (bottlesOfBeer >= 0) {
//     if (bottlesOfBeer > 1) {
//       console.log(
//         `${bottlesOfBeer} bottles of beer on the wall, ${bottlesOfBeer} bottles of beer. Take one down and pass it around, ${
//           bottlesOfBeer - 1
//         } bottles of beer on the wall.`
//       );
//     } else if (bottlesOfBeer === 1) {
//       console.log(
//         `${bottlesOfBeer} bottle of beer on the wall, ${bottlesOfBeer} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`
//       );
//     } else {
//       console.log(
//         "no bottle of beer on the wall, no bottle of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
//       );
//     }
//     bottlesOfBeer--;
//   }
// }
