let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);

let profession = "teacher";
let age = 21;
console.log(age + 7);
console.log(profession);

let array = [1, 2, 3, 4, 5, 8] // Declaires an array of numbers
console.log(array) // Displays the array
console.log(array[2]) // Displays the third element of the array, found at the second ??

let cities = ["London", "New York", "Mumbai"] // Declares an array of city names.
console.log(cities) // Displays the array
cities[2] = "Mexico City" // Changes the last element of the array
console.log(cities) // Displays the new array
cities.push("Seattle") // Adds a new element to the array
console.log(cities) // Displays the new array
let popped = cities.pop(); // Creates a variable to assign a method to remove the last item in the array
console.log(popped); // Displays the item that was removed.
console.log(cities); // Displays the new array.
let pushed = cities.push("Redmond") // Adds a new city to the end of array.
console.log(pushed) // Displays the new total number of items in the array.
console.log(cities) // Displays the new array.


/* 
for (iterator; condition; iteration) {
  logic;
}
*/

const char = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    console.log(i + 1)
    rows.push(char.repeat(i + 1))
}

/* 
push() adds a char to the end of the line and the repeat() starts the process all over.
rows array starts again, adds a car, checks if it's ;ess than 8, and if so, begins again.
*/

let result = "";
console.log(result)

/*
To manipulate the result string, use a for...of loop 
which iterates over each item in an iterable object and temporarily assigns it to a variable.
*/

for (const row of rows) {
    result = result + row + "\n";
}

console.log(result)

/*-------------------------------------------------------------*/

function padRow(stuff) {
    return stuff;
}

const call = padRow("Jack"); // declare a call variable and assign your existing padRow call
console.log(call)

/*
Declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. 
Log the sum variable to the console.
*/

function addTwoNumbers(num1, num2) {
    return (num1 * num2)
}

let sum = addTwoNumbers(5, 10)
console.log(sum)

function show(character, name) {
    return character + " " + name;
}
let guest = show("Rob", "Base")
console.log(guest)

