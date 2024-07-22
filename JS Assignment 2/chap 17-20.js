//ARRAYS AND LOOP
//Q1
let multidimensionalArray = [[], [], []];

//Q2
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
  ];


//Q3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


//Q4
let tableNumber = parseInt(prompt("Enter the table number: "));
let tableLength = parseInt(prompt("Enter the length of the table: "));

console.log('Multiplication table of '+ tableNumber+': ');
for (let i = 1; i <= tableLength; i++) {
  console.log(tableNumber+ 'x'+ i+ '='+ tableNumber * i);
}


//Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Q6
// a. 
document.write('<h2>Counting</h2>')
for (let i = 1; i <= 15; i++) {
    document.write(i + " ");
  }
document.write("<br>");
// b. 
document.write('<h2>Reverse Counting</h2>')
for (let i = 10; i >= 1; i--) {
    document.write(i + " ");
}
document.write("<br>");
// c. 
document.write('<h2>Even Numbers</h2>')
for (let i = 0; i <= 20; i += 2) {
    document.write(i + " ");
}
document.write("<br>");  
// d. 
document.write('<h2>Odd Numbers</h2>')
for (let i = 1; i <= 20; i += 2) {
    document.write(i + " ");
}
document.write("<br>"); 
// e. 
document.write('<h2>Series</h2>')
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k ");
}


//Q7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter an item to search: ");
let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}
if (found) {
  alert('Yes '+  userInput +' is found in the list.');
} else {
  alert('No, '+ userInput + ' is not found in the list.');
}

//Q8
let num = [24, 53, 78, 91, 12];
let largest = num[0];
for (let i = 1; i < num.length; i++) {
  if (num[i] > largest) {
    largest = num[i];
  }
}
document.write("<p> Array items: " + num + "<br>");
document.write("The largest number in the array is: " + largest +'</p>');


//Q9
let smallest = num[0];
for (let i = 1; i < num.length; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
}
document.write("<p>Array items: " + num + "<br>");
document.write("The smallest number in the array is: " + smallest + '</p>');


//Q10
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}