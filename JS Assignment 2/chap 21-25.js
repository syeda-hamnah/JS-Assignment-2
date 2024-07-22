//STRINGS METHOD
//Q1
let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Nice to meet you.");

//Q2
let Phone = prompt("Please enter your favorite mobile phone model:");
let inputLength = Phone.length;
document.write("Your favorite phone is: " + Phone); document.write('<br>Length of String: ' + inputLength);

//q3
let word = "Pakistani";
let index = word.indexOf("n");
document.write("<br> The index of letter 'n' in the word 'Pakistani' is: " + index);

//Q4
let word2 = "Hello World";
let lastIndex = word2.lastIndexOf("l");
document.write("<br> The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);

//Q5
let word3 = "Pakistani";
let charAtIndex3 = word3.charAt(3);
document.write("<br>The character at 3rd index in the word 'Pakistani' is: " + charAtIndex3);

//Q6
//Q1
let firstName2 = prompt("Please enter your first name:");
let lastName2 = prompt("Please enter your last name:");
let fullName2 = "".concat(firstName2, " ", lastName2);
alert("Hello, " + fullName2 + "! Nice to meet you.");
//Q2
let Phone2 = prompt("Please enter your favorite mobile phone model:");
let inputLength2 = Phone2.length;
let output = "".concat("Your favorite phone is: ", Phone2, "<br>Length of String: ", inputLength2);
document.write('<br>'+ output);

//Q7
let word4 = "Hyderabad";
let replacedWord = word4.replace("Hyder", "Islam");
document.write("<br>The replaced word is: " + replacedWord);

//Q8
var message = "Ali and Sam are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
document.write("<br>The replaced message is: " + replacedMessage);

//Q9
let stringValue = "472";
let numericValue = parseInt(stringValue);
document.write("<br>String Value: " + stringValue + " (Type: " + typeof stringValue + ")");
document.write("<br>Numeric Value: " + numericValue + " (Type: " + typeof numericValue + ")");

//Q10
let userInput = prompt("Please enter some text to convert into uppercase :");
let capitalizedInput = userInput.toUpperCase();
document.write("<br>The user input is: " + userInput);
document.write("<br>The input in capital letters is: " + capitalizedInput);

//Q11
let userInput2 = prompt("Please enter some text:");
let titleCaseInput = userInput2.toLowerCase().split(' ').map(function(word) {
  return (word.charAt(0).toUpperCase() + word.slice(1));
}).join(' ');
document.write("<br>The user input is: " + userInput2 + "<br>");
document.write("The input in title case is: " + titleCaseInput);

//Q12
var num = 35.36;
var strNum = num.toString(); 
var newStr = strNum.replace('.', ''); 
document.write("<br>Number is: " + num)
document.write("<br>The number without dot is: " + newStr);

//Q13
let username = prompt("Please enter your username: ");
if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
    alert("Invalid username. Please enter a valid username.");
    username = prompt("Please enter your username:");
}
document.write("<br>Your username is: " + username);


//Q14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput3 = prompt("Welcome! What do you want to order sir? ");
let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput3.toLowerCase()) {
    found = true;
    break;
    }
}
if (found) {
    alert('The item '+ userInput3 + "is found in our Bakery"+ "at index" + (A.indexOf(A[i]) + 1));
} 
else {
    alert('The item '+ userInput3 + "is not available in our Bakery");
}

//Q15
let password = prompt("Please enter a password:");

if (password.length < 6 || password.charCodeAt(0) < 48 || password.charCodeAt(0) > 57) {
    password = prompt("Invalid password. Please enter a password with at least 6 characters and that does not start with a number.");
}

let hasAlphabet = false;
let hasNumber = false;
for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
    hasNumber = true;
    }
    else if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
    hasAlphabet = true;
    }
}
if (!hasAlphabet || !hasNumber) {
    password = prompt("Invalid password. Please enter a password that contains both alphabets and numbers.");
}

document.write("<br>Your password is: " + password);

//Q16
var university = "University of Karachi";
var arr = university.split(" ");
for (var i = 0; i < arr.length; i++) {
  document.write("<br>"+ arr[i] + "<br>");
}

//Q!7
let userInput4 = prompt("Please enter a string:");
let lastChar = userInput4.charAt(userInput.length - 1);
document.write("User Input : " + userInput4);
document.write("<br>The last character of the input is: " + lastChar);


//Q18
let str = "The quick brown fox jumps over the lazy dog";
let count = 0;
let replace = "the";
str = str.toLowerCase();
replace = replace.toLowerCase();
let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i] === replace) {
        count++;
    }
}
document.write("<br>The number of occurrences of the word 'the' is: " + count);
