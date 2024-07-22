//USER INPUT & CONDITIONAL
//CHAPTER 9-11 
STATEMENT
//Q1
let city = prompt('Enter city name: ')
if (city === 'Karachi') {
    alert('Welcome to city of lights');
}

// Q2
let gender = prompt('Enter your gender: ')
if (gender === 'male') {
    alert('Good Morning Sir');
    } 
else if (gender === 'female') {
    alert('Good Morning Ma\'am');
}

//Q3
let color = prompt('Enter your color of road traffic signal: ')
if (color === 'red') {
    alert('Must Stop');
    }
else if (color === 'yellow') {
    alert('Ready to move');
    }
else if (color === 'green') {
    alert('Move now');
    }


//Q4
let fuel = prompt('Enter remaining fuel: ')
if (fuel < 0.25) {
    alert('Please refill the fuel in your car');
}


//Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}


//Q6
document.write('<h1>Marks Sheet</h1>')
document.write('Total Marks: 300 <br>')
let maths_marks = prompt('Enter your Math\'s marks: ')
let physics_marks = prompt('Enter your Physics marks: ')
let chemistry_marks = prompt('Enter your Chemistry marks: ')
let total_marks = parseInt(maths_marks) + parseInt(physics_marks) + parseInt(chemistry_marks)
document.write('Marks obtained: ', total_marks, '<br>')
let percentage = total_marks / 300 * 100
document.write('Percentage: ', percentage, '% <br>')
if (percentage >= 80) {
    document.write('Grade: A-one' <br> 'Remarks: Excellent')
}
else if (percentage >= 70) {
    document.write('Grade: A <br> Remarks: Good')
} 
else if (percentage >= 60) {
    document.write('Grade: B <br> Remarks: You need to improve')
} 
else if (percentage < 60) {
    document.write('Grade: Fail <br> Remarks: Sorry')
}

//Q7
let secret_number = 7
let guess = prompt('Guess the secret number (1 - 10):')
if (guess == secret_number) {
    alert('Bingo! Correct answer')
    }
else if ((guess+1) == secret_number) {
    alert('Close enough to the correct answer')
}


//Q8
let num = prompt('Enter a number: ')
if (num / 3 == 0) {
    alert('Number is divisible by 3')
}


//Q9
let number = prompt('Enter a number: ')
if (number % 2 == 0) {
    alert('Number is even')
}
else {
    alert('Number is odd')
}


//Q9
let temperature = prompt('Enter the temperature: ')
if (temperature >= 40) {
    alert('It is too hot outside.')
}
else if (temperature >= 30) {
    alert('The Weather today is Normal.')
}
else if (temperature >= 20) {
     alert('Today\'s Weather is cool.')
    }
else if (temperature >= 10) {
    alert('OMG! Today\'s weather is so Cool')
}


//Q11
let num1 = prompt('Enter a number: ')
let num2 = prompt('Enter another number: ')
let operation = prompt('Which operation do you want to perform? (+, -, *, /)')
if (operation == '+') {
    alert(num1 + num2)
}
else if (operation == '-') {
    alert(num1 - num2)
}
else if (operation == '*') {
    alert(num1 * num2)
}
else if (operation == '/') {
    alert(num1 / num2)
}



