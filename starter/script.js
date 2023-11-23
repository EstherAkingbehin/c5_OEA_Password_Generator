// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordlength;
var generatedpassword;

// Function to prompt user for password options
function getPasswordOptions() {
  console.log(passwordlength);
  const numeric = confirm("Do you want password to contain numbers?");
  console.log(numeric)
  const ucase = confirm("Do you want password to include uppercase letters?");
  console.log(ucase)
  const lcase = confirm("Do you want password to include lowercase letters?");
  console.log(lcase)
  const specialChar = confirm("Do you want your password to include special characters?");
  console.log(specialChar)
  alert("Thanks for choosing options. Generating...");
  
  if (numeric === false && ucase === false && lcase === false && specialChar === false) {
    alert(`password can not be generated, at least one chaaracter type must be selected`);
    } else {
      getRandom(numeric, ucase, lcase, specialChar);
  }
}


// Function for getting a random element from an array
function getRandom(numeric, ucase, lcase, specialChar) {
  console.log(passwordlength)
  var allCharacters = ''

  if (lcase) allCharacters += lowerCasedCharacters.join('');
  if (ucase) allCharacters += upperCasedCharacters.join('');
  if (numeric) allCharacters += numericCharacters.join('');
  if (specialChar) allCharacters += specialCharacters.join('');
  generatedpassword = '';



      for (var i = 0; i < passwordlength ; i++) {
        var randomIndex = Math.floor(Math.random() * allCharacters.length);
        generatedpassword += allCharacters.charAt(randomIndex);
      }
  console.log(generatedpassword);
}



// Function to generate password with user input
var  generatePassword = function() {
  passwordlength = prompt("How many character do you want your password to have?");
  console.log(passwordlength)

  if(passwordlength === null){
    console.log("Password generator has been cancelled");
    return '';
  }

  //Condition statement for password length
  if(passwordlength <= 7){
    alert("Your password must contain atleast 8 characters");
    return '';
  } else if (passwordlength <= 129){
    console.log(passwordlength);
    return getPasswordOptions();
  }else if (passwordlength > 129){
    alert("Password length must be less than 129 characters");
    return '';
  }else if(typeof passwordlength !== 'number'){
    alert("Pasword length must be a number. Unable to generate unknown length");
    return '';
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = generatedpassword;
  console.log(generatedpassword)
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


/*Thoughts 
1. Prompt ('How many character do you want your password to have?)
if statement 
less than 8 = Your password must contain atleast 8 characters
>=8 = 
<=129 = password length must be less than 129 characters 
!= number = pasword length must be a number

2.confirm to add special characters to the passwrord "yes" or "cancel"

3. confirm to add number characters to password yes" or "cancel"

4. confirm to add uppercase characters to password yes" or "cancel"

5. confirm to add lowercase characters to password yes" or "cancel"

6. yes to atleast one of the questions, if all no (alert: password can not be generated, 
  at least one chaaracter type must be selected)
7.


*/

// //Condition statement for password length
// if(password.length < 8){
//   alert(`Your password must contain atleast 8 characters`);
// }else if(password.length >= 8){
//   generatePassword()
// }else if (password.length <= 129){
//   alert(`Password length must be less than 129 characters `);
// }else if(pasword.length != numericCharacters.typeof){
//   alert(`Pasword length must be a number`);

// }


// var numbersOption = confirm(`add number characters to password`); //returns boolean
// var upercaseOption = confirm(`add uppercase characters to password`); //returns boolean
// var lowercaseOption = confirm(`add lowercase characters to password`); //returns boolean
// var speacialcharOption = confirm(`add special characters to the passwrord`); //returns boolean


// var passwordContent = {
//   numbersOption,
//   upercaseOption,
//   lowercaseOption,
//   speacialcharOption
// }

// //Condition statement for password content
// if(passwordContent = 0){
//   alert(`password can not be generated, at least one chaaracter type must be selected`);
// }