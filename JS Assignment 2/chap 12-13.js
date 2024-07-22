//CHAPTER 12 - 13
//IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

//Q1
let char = prompt('Enter a character: ');

if (!isNaN(char)) {
  alert('You entered a number');
} else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  alert('You entered an uppercase letter');
} else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
  alert('You entered a lowercase letter');
} else {
  alert('You entered a special character or symbol');
}


//Q2
let int1 = prompt('Enter an Integer: ');
let int2 = prompt('Enter another Integer: ');
if (int1 > int2) {
    alert(int1 + ' is greater than ' + int2);
}
else if (int1 < int2) {
    alert(int2 + ' is greater than ' + int1);
}
else {
     alert(int1 + ' is equal to ' + int2);
}

//Q3
let input = prompt('Enter a number: ');
if (input > 0) {
    alert('The number is positive');
    }
else if (input < 0) {
    alert('The number is negative');
}
else {
    alert('The number is zero');
}

//Q4
let character = prompt("Enter a character: ");
let isVowel = false;

if (character === 'a' || character === 'e' || character === 'i'|| character === 'o' || character === 'u') {
    isVowel = true;
    alert("The character is a vowel.");
}
else {
    alert("The character is not a vowel.");
}



//Q5
let correctPassword = "mySecretPassword";
let userInput = prompt("Enter your password: ");
if (userInput == "") {
  alert("Please enter your password");
} 
else if (userInput == correctPassword) {
  alert("Correct! The password you entered matches the original password");
} 
else {
  alert("Incorrect password");
}

//Q6
var greeting = '';
var hour = 13;
if (hour < 18) {
    greeting += "Good day";
}
else {
    greeting += "Good evening";
}

//Q7
let time = prompt("Enter time in 24-hour format (e.g. 19:00 for 7pm): ");

if (time >= '0000' && time < 1200) {
  alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time < 2359) {
    alert("Good Night");
}
