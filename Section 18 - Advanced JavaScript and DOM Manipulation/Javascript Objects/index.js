//* although this can also be used, it is much prefered to use constructors instead, refer to the new section below:
// var houseKeeper = {
//   experience: 12,
//   name: "Wayne Estrera",
//   responsibility: ["Bathroom", "Bedroom", "Lobby"],
// };

// var bellBoy1 = {
//   name: "Wayne",
//   age: 24,
//   hasWorkPermit: true,
//   languages: ["French", "English"],
// };

// var bellBoy2 = {
//   name: "Bryan",
//   age: 22,
//   hasWorkPermit: true,
//   languages: ["Filipino", "English"],
// };

// var bellBoy3 = {
//   name: "Nijel",
//   age: 22,
//   hasWorkPermit: true,
//   languages: ["German", "English"],
// };

//* This is new section about constructors.
//this is a constructor
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function () {
    alert("May I take your suitcase");
    pickUpSuitcase();
    move();
  };
}

function HouseKeeper(experience, name, chores) {
  this.experience = experience;
  this.name = name;
  this.chores = chores;
  this.clean = function () {
    alert("Cleaning in Progress...");
  };
}

//initialize object
var bellBoy1 = new BellBoy("Wayne", 24, true, [
  "French",
  "English",
  "Filipino",
]);
var houseKeeper1 = new HouseKeeper(12, "Angel", [
  "Bathroom",
  "Lobby",
  "Bedroom",
]);
