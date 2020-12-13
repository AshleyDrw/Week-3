
let ages = [3,9,23,64,2,8,28,93];

//subtracts the value of index [0] from the last element 
let lastMinusFirst = () => {
    let last = ages[ages.length - 1];
    console.log(last -  ages[0]);
}
lastMinusFirst();
//added another elment to array to test the function 
ages.push(19);
console.log(ages);
//calling function with new element added 
lastMinusFirst();

//average age of the array 
let sum1 = 0;
for (let i = 0; i < ages.length; i++) {
    sum1 += ages[i];
}
let avgAge = sum1 / ages.length;
console.log(avgAge);

//calculates average number of letters per name 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let sum = 0;
for (let i = 0; i < names.length; i++) {
    sum += names[i].length;
}
let avgNumOfLetters = sum / names.length;
console.log(avgNumOfLetters);

//concatenates all the names together, separated by spaces
let concatNames = '';
for (let i = 0; i < names.length; i++) {
    concatNames += names[i] + ' ';
}
console.log(concatNames);

//use array.length to access the last element of any array 
//use array[0] to access the first element of any array 

//iterates over names array and adds the length of each name to the nameLengths array
let nameLengths = []
for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}
console.log(nameLengths);

//calculates the sum off all the elments in the nameLengths array
let sum2 = 0
for (let i = 0; i < nameLengths.length; i++) {
    sum2 += nameLengths[i];
}
console.log(sum2);

//a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself a n number of times.
function wordThreeTimes(word, n) {
    if (n > 0)
    return word.repeat(n);
}
console.log(wordThreeTimes('Hello', 3));

//a function that takes two parameters, firstName and lastName, and returns a full name 
const fullName = (firstName, lastName) => {
    console.log(firstName + ' ' + lastName);
  }
  fullName('Ashley', 'Drew');

  //takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isTotalGreaterThan100(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } if (sum > 100) {
        return true; 
    } else {
        return false;
    }
}
//created new array to test function 
let newNumbersArray = [25, 13, 4, 50, 34];
console.log(isTotalGreaterThan100(newNumbersArray));

//takes an array of numbers and returns the average of all the elements in the array
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
//created new array to test function
let numbersAverage = [10, 20, 30, 40];
console.log(average(numbersAverage));

//takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverage(arr1, arr2) {
    if (average(arr1) > average(arr2)) {
        return true;
    } else {
        return false;
    }
}
//testing compareAverage function 
console.log(compareAverage(newNumbersArray, numbersAverage));

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 20.50;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//create a function that solves a problem
function cupsToOunces(numOfCups) {
    let ounces = numOfCups * 8;
    if (numOfCups <= 1) {
        console.log(`There are ${ounces} ounces in ${numOfCups} cup!`);
    } else {
        console.log(`There are ${ounces} ounces in ${numOfCups} cups!`);
    }
    
}
//function call
cupsToOunces(1);