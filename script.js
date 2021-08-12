// 1.
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
// What is the length of the array?
let arrLength = myAlphabet.length;
// Write a function called myAlphabetLength which console.logs the length of the array
function myAlphabetLength() {
    console.log(arrLength);
    // Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4
    if (arrLength < 4) {
        console.log("Array elements are less than 4");
    } else {
        console.log("Array elements are more than 4");
    }
}
myAlphabetLength();

console.log("----------------------------------------------");

// 2.
// Declare a function checkFunc that takes a string and a boolean as parameters
// Call the function using 2 arguments
let checkFunc = function (parameter1, parameter2) {
    console.log(parameter1 + " is " + parameter2);
}
checkFunc("Casper", true);

console.log("----------------------------------------------");

// 3.
// Declare and initialize an array called Planets with 5 string values
let planets = ["Mercuri", "Venus", "Earth", "Mars", "Jupiter"];
// console.log each item in the array
// Also console.log the index in each iteration
for (let i = 0; i < planets.length; i++) {
    console.log(planets[i]);
}

console.log("----------------------------------------------");

// 4.
// Declare and initialize an array called
// wowDatatypes
// The array must have 3 different data types (NOT objects)
// Iterate over the array and console.log each item in the array + it’s index and data type in the array
let wowDatatypes = ["Casper", 24, false];
for (let i = 0; i < wowDatatypes.length; i++) {
    console.log(wowDatatypes[i] + " " + wowDatatypes.indexOf(wowDatatypes[i]) + " " + typeof(wowDatatypes[i]));
}

console.log("----------------------------------------------");


// 5.
// console.log each item in this array WITHOUT using a for loop
//    let myArr = [ 1, 2, 'One', true];
let myArr = [ 1, 2, 'One', true];
myArr.forEach(element => {
    console.log(element);
});

console.log("----------------------------------------------");

// 6.
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Loop over the 2 arrays and if there are any common courses, if so console.log them
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
for (let k = 0; k < student1Courses.length; k++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[k] === student2Courses[j]) {
            console.log(student1Courses[k] + " = " + student2Courses[j]);
            break;
        } 
        // student1Courses.find(c => student1Courses[k] === student2Courses[j]);
    }
}

console.log("----------------------------------------------");



// 7.
// let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// compare the 2 arrays and find common food if any
let food = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];

for (let a = 0; a < food2.length; a++) {
    if (food.includes(food2[a])) {
        console.log(food2[a]);
        break;
    }
}

console.log("----------------------------------------------");



// 8.
// let values1= ['Apple', 1, false];
// let values2 = ['Fries', 2 ,true];
// let values3 = ['Mars', 9, 'Apple'];
// compare the 3 arrays and find any common elements
let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];


for (let l = 0; l < values1.length; l++) {
    for (let m = 0; m < values2.length; m++) {
        for (let n = 0; n < values3.length; n++) {
            if (values1[l] === values2[m] || values1[l] === values3[n] || values2[m] === values3[n]) {
                console.log(values1[l]);
                break;
            }
        }
    }
}


console.log("----------------------------------------------");


// 9.
// let furniture = ['Table', 'Chairs','Couch'];
// For each item in this array console.log the letters in each item
let furniture = ['Table', 'Chairs','Couch'];

let lettersOfArray = furniture.join("*");

for(let q =0; q < lettersOfArray.length; q++){
    console.log(lettersOfArray[q]);
}