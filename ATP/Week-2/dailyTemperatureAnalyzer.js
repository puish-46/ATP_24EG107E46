// Array of temperatures with the values
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Using filter for temperatures above 35
const filtered = temperatures.filter((element) => element > 35);
console.log(filtered);

// Map to convert temperature from celsius to fahrenheit
const fahrenheit = temperatures.map((element) => ((9 / 5) * element) + 32);
console.log(fahrenheit);

// Reduce method to calculate the average of the temperature
let average = temperatures.reduce((acc, element) => acc + element);
console.log(average / temperatures.length);

// Find method to find the temperature above 40
const aboveForty = temperatures.find((element) => element > 40);
console.log(aboveForty);

// FindIndex method to find the index of temperature of 28
const index = temperatures.findIndex((element) => element === 28);
console.log(index);
