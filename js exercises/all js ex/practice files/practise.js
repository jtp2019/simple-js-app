//
var repository = [
  {
  name: "Bulbasaur",
  height: "0.7",
  types: ["grass", "poison"]
  },
  {
  name: "Jigglypuff",
  height: "0.1",
  types: ["normal", "fairy"]
  },
  {
  name: "Lapras",
  height: "0.8",
  types: ["water", "ice"]
  }
 ];

for (var i = 0; i < repository.length; i++){
// document.write("<p>" + repository[i].name + "</p>");
  // printing repository[i]’s other details
  // ...
}

//
var repository = [
  {
  name: "Bulbasaur",
  height: "0.7",
  types: ["grass", "poison"]
  },
  {
  name: "Jigglypuff",
  height: "0.1",
  types: ["normal", "fairy"]
  },
  {
  name: "Lapras",
  height: "0.8",
  types: ["water", "ice"]
  }
 ];

 for( var i = 0; i < repository.lenth; i++){
   console.log(repository[i]);
 }

// printArrayDetails function declaration
function printArrayDetails(){
  for (var i = 0; i < repository.length; i++){
    // document.write("<p>" + repository[i].name + "</p>");
    // printing repository[i]’s other details
    // ...
  }
}

// Calling printArrayDetails function twice
printArrayDetails();
printArrayDetails();
//
var repository = [
  {
  name: "Bulbasaur",
  height: "0.7",
  types: ["grass", "poison"]
  },
  {
  name: "Jigglypuff",
  height: "0.1",
  types: ["normal", "fairy"]
  },
  {
  name: "Lapras",
  height: "0.8",
  types: ["water", "ice"]
  }
 ];

var repository2 = [
  // different set of Pokémon objects
];
//
function printArrayDetails(pokemonList){
  for (var i = 0; i < pokemonList.length; i++){
    // document.write("<p>" + pokemonList[i].name + "</p>");
    // printing pokemonList[i]’s other details
    // ...
  }
}
//
var repository = [
  {
  name: "Bulbasaur",
  height: "0.7",
  types: ["grass", "poison"]
  },
  {
  name: "Jigglypuff",
  height: "0.1",
  types: ["normal", "fairy"]
  },
  {
  name: "Lapras",
  height: "0.8",
  types: ["water", "ice"]
  }
 ];
var repository2 = [
  // different set of Pokémon objects
];

function printArrayDetails(pokemonList){
  for (var i = 0; i < pokemonList.length; i++){
    // document.write("<p>" + pokemonList[i].name + "</p>");
    // printing pokemonList[i]’s other details
    // ...
  }
}

// execute the function using ‘repository‘ as its input
printArrayDetails(repository);

// execute the function using ‘repository2‘ as its input
printArrayDetails(repository2);
//
function printArrayDetails(repository){
  for (var i = 0; i < repository.length; i++){
    // document.write("<p>" + repository[i].name + "</p>");
    // printing repository[i]’s other details
    // ...
  }
}
//
function printArrayDetails(repository2){
  for (var i = 0; i < repository2.length; i++){
    // document.write("<p>" + repository2[i].name + "</p>");
    // printing repository2[i]’s other details
    // ...
  }
}

//
console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));
//
console.log(2);
console.log("You’re trying to divide by zero.");
console.log(0.25);
console.log(-4);

////for Calculator
function divide(dividend, divisor){
  if(divisor === 0){
    return "You’re trying to divide by zero."
  }else{
    var result = dividend / divisor;
    return result;
  }
}
// a function without a return statement (Calculator)
function add(number1, number2) {
  console.log(number1 + number2);
}
var result = add(1, 2);
console.log(result)

function multiply(number1, number2) {
  return number1 * number2;
}
var result2 = multiply(3, 5);
console.log(result2);

//
// Assigning a function to a variable:
var add = function(number1, number2) {
  return number1 + number2
};

//
var x = 5;

function foo(){
  var y = 10;
  console.log("From inside foo(): x = " + x);
  console.log("From inside foo(): y = " + y);
}

foo();
console.log("From outside foo(): x = " + x);
console.log("From outside foo(): y = " + y);

//(1.1 exercise)
function displayHello(){
  console.log("Hello World");
}

displayHello();
//
displayHello();

function displayHello(){
  console.log("Hello World");
}
//
// Assigning a function to a variable:
var add = function(number1, number2) {
  return number1 + number2
};

// Assigning a function to an object property:
var person = {};

person.tellMyAge = function() {
  return 42
};

//
var dog = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function() {
  console.log('Wooff!');
  }
};

dog.speak();
//
var dog = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function() {
  console.log('Wooff! I am ' + this.name);
  }
};

dog.speak();
//
var addTwo = number => number + 2;
var addTwo = function(number){ return number + 2 };
//
var add = (number1, number2) => {
  return number1 + number2;
};
//
console.log('Hello!');
console.warn('Warning!');
console.error('Error!');
//
var name = prompt('Please enter your name!');
console.log(name);
//
var isAccepted = confirm('Do you accept?');
console.log(isAccepted);
//
function runThisLater() {
  console.log('Hello!');
}
setTimeout(runThisLater, 1000); // Run this in 1000ms
//
var anne = {
  name: 'Anne',
  age: 38,
  children: [ ]
};
var allProperties = Object.keys(anne); // contains ['name', 'age', 'children']
//
var names = ['John', 'Anne', 'Carly'];
console.log(names.length); // 3
//
var names = ['John', 'Anne', 'Carly'];
names.push('Bob'); // Add to the end of the array
names.unshift('Julia'); // Add to the start of the array (as new first item)
names.pop(); // Remove the LAST item from the array (Bob)
names.shift(); // Remove the FIRST item from the array (Julia)
//
var numbers = [1, 2, 3, 4];
numbers.reverse(); // Change the array to [4, 3, 2, 1]
//
var namesA = ['John', 'Anne', 'Carly'];
var namesB = namesA.slice(); // Now you can modify `namesA` without affecting `namesB`
//
var names = ['John', 'Anne', 'Carly'];
names.indexOf('John'); // 0
names.indexOf('Bob'); // -1 (not found in the array)
//
var names = ['John', 'Anne', 'Carly'];
//
var names = ['John', 'Anne', 'Carly'];

for(var i = 0; i < names.length; i++){
  console.log(names[i]);
}
//
var names = ['John', 'Anne', 'Carly'];

function loopBlockFunction(currentName){
  console.log(currentName);
}
//
var names = ['John', 'Anne', 'Carly'];

function loopBlockFunction(currentName){
  console.log(currentName);
}
names.forEach(loopBlockFunction);
//
var names = ['John', 'Anne', 'Carly'];
names.forEach(function(currentName){
  console.log(currentName);
});
//
var anne = {
  name: 'Anne',
  age: 38,
  children: []
};

Object.keys(anne).forEach(function(property) {
  console.log(anne[property]);
});
//
