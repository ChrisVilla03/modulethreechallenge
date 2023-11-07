// Assignment code here

//Character Sets
var chars = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specchar = ",./;'!-="
var randpass = "";

//Prompts
var passlength = parseInt(prompt("How many characters would you like your password to be? (Between 8 and 128 characters)"));

//Generate password
function passwordcreate() {
  if (passlength >= 8 && passlength <= 128) {
    var lower = prompt("Would you like lowercase letters in your password?");
    var upper = prompt("Would you like uppercase letters in your password?");
    var number = prompt("Would you like numbers in your password?");
    var special = prompt("Would you like special characters in your password?");
    if (lower == "yes") {
      chars = chars.concat(lowercase);
    }
    if (upper == "yes") {
      chars = chars.concat(uppercase);
    }
    if (number == "yes") {
      chars = chars.concat(numbers);
    }
    if (special == "yes") {
      chars = chars.concat(specchar);
    }
    for (i = 0; i < passlength; i++ ) {
      var pass = chars[Math.floor(Math.random() * chars.length)];
       password += chars.substring(pass, pass +1)
       randpass = randpass.concat(pass);
    } 
    alert("Your password is " + randpass);
  }
  else {
    alert("Please use a number between 8 and 128.");
  }
}

passwordcreate();