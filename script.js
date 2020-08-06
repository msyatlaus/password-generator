
document.querySelector("#generate").addEventListener("click", writePassword);

// Create array for varibles
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?",];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Variables 
var confirmLength = "";
var passwordCharacters;
var passNumbers;
var confirmUpperCase;
var confirmLowerCase;


function generatePassword() {
  var confirmLength = (prompt("How many characters do you want in your new password?"));
    

      
    // prompts for character elements of password
    var passwordCharacters = confirm("Click OK to include special charaters in your password.");
    var passNumbers = confirm("Click OK to include numbers in your password.");    
    var confirmLowerCase = confirm("Click OK to  to include lowercase letters in your password");
    var confirmUpperCase = confirm("Click OK  to include UPPERCASE letters in your password.");
      
    
   

    
      var passwordCharacters = []
      
    if (passwordCharacters) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (passNumbers) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
console.log(password)