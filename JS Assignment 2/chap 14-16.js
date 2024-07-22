//ARRAYS

//Q1
let studentNames = [];

//Q2
let color = ["red", "green", "blue", "yellow"];

//Q3
let scores = [90, 80, 70, 95];

//Q4
let isAdmin = [true, false, true, false, true];

//Q5
let mixedArray = [1, "hello", true, null, 3.14];

//Q6
let pakQualifications = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M. Phil.", "PhD"];
document.write('<h1>Qualifications</h1>')
document.write("<ol>");
for (let i = 0; i < pakQualifications.length; i++) {
  document.write("<li>" + pakQualifications[i] + "</li>");
}
document.write("</ol>");

//Q7
let students = ["Steve", "Peter", "Chris"];
let Scores = [420, 380, 450];
let Stevepercentage = (Scores[0] / 500) * 100;
document.write("Score of ", students[0], ' is ', Scores[0], '. Percentage: ', Stevepercentage, '%');
document.write("<br>")
let Peterpercentage = (Scores[1] / 500) * 100;
document.write("Score of ", students[1], ' is ', Scores[1], '. Percentage: ', Peterpercentage, '%');
document.write("<br>")
let Chrispercentage = (Scores[2] / 500) * 100;
document.write("Score of ", students[2], ' is ', Scores[2], '. Percentage: ',Chrispercentage, '%');



//Q8

let colors = ["red", "green", "blue", "yellow"];
document.write('<h3>Colors</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// a. 
let addColorToBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(addColorToBeginning);
document.write('<h3>Updated Colors (Added to Beginning)</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// b. 
let addColorToEnd = prompt("Enter a color to add to the end:");
colors.push(addColorToEnd);
document.write('<h3>Updated Colors (Added to End)</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// c. 
colors.unshift("orange", "purple");
document.write('<h3>Updated Colors (Added two colors to Beginning)</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// d. 
colors.shift();
document.write('<h3>Updated Colors (Deleted first color)</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// e. 
colors.pop();
document.write('<h3>Updated Colors (Deleted last color)</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// f. 
let addColorAtIndex = parseInt(prompt("Enter the index to add a color:"));
let addColorName = prompt("Enter the color name:");
colors.splice(addColorAtIndex, 0, addColorName);
document.write('<h3>Updated Colors (Added color at specified index)</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");

// g. 
let deleteColorAtIndex = parseInt(prompt("Enter the index to delete colors:"));
let deleteColorCount = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(deleteColorAtIndex, deleteColorCount);
document.write('<h3>Updated Colors (Deleted colors at specified index)</h3>');
document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
  document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");



//Q9
let studentScores = [85, 92, 78, 95, 88, 76, 90, 89, 84, 91];
console.log("Unsorted array: " + studentScores);
studentScores.sort();
console.log("Sorted array: " + studentScores);


//Q10
let cities = ["New York", "Los Angeles", "Chicago", "Paris", "London", "Cape Town", "Vice city"];
console.log("Cities array: " + cities);
let selectedCities = [];
selectedCities = cities.slice(0, 3);
console.log("Selected cities array: " + selectedCities);


//Q11
var cat = ["This ", "is ", "my ", "cat"];
console.log("Original array: " + cat);
var string = cat.join("");
console.log("String: " + string);


//Q12
// Create a new array
let fifoArray = [];

fifoArray.push("Steve");
fifoArray.push("Tony");
fifoArray.push("Peter");
fifoArray.push("Rogers");
fifoArray.push("Natasha");

console.log("FIFO Characters: " + fifoArray);
console.log("Out: " + fifoArray.shift());
console.log("Out: " + fifoArray.shift());
console.log("Out: " + fifoArray.shift());
console.log("Out: " + fifoArray.shift());
console.log("Out: " + fifoArray.shift());



//Q13
let lifoArray = [];

lifoArray.push("Steve");
lifoArray.push("Tony");
lifoArray.push("Peter");
lifoArray.push("Rogers");
lifoArray.push("Natasha");

console.log("LIFO Characters " + lifoArray);
console.log("Accessed value: " + lifoArray.pop());
console.log("Accessed value: " + lifoArray.pop());
console.log("Accessed value: " + lifoArray.pop());
console.log("Accessed value: " + lifoArray.pop());
console.log("Accessed value: " + lifoArray.pop());


//Q14
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "VIvo"];
document.write("<select>");
document.write("<option>Select a manufacturer</option>");
document.write("<option>" + phoneManufacturers[0] + "</option>");
document.write("<option>" + phoneManufacturers[1] + "</option>");
document.write("<option>" + phoneManufacturers[2] + "</option>");
document.write("<option>" + phoneManufacturers[3] + "</option>");
document.write("<option>" + phoneManufacturers[4] + "</option>");
document.write("<option>" + phoneManufacturers[5] + "</option>");
document.write("</select>");