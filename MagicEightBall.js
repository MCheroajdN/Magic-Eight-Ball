/*
Magic Eight Ball
A powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project  build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

*/
let userName = '';  //variable with empty string
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!.");
let userQuestion = 'Will the visine last forever?';
// The above used used ternary expression and interpolation to enter what to do if user enters a name or not.
console.log(`The user asked : ${userQuestion}`); //this is the question the user asks the magic ball.
//you can also use document.write or alert to output the above 2 lines of code

//generate random number between 0 (inclusive) and 8 (exclusive)
let randomNumber = Math.random() * 8;

//eliminate decimals to make sure whole numbers only.
randomNumber = Math.floor(Math.random() * 8);

//using switch statements.

//let eightBall = '';

/*switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
*/
//console.log(eightBall);
//document.write(eightBall);
//alert(eightBall);

//using if-else statement:
let eightBall = '';


if (randomNumber == 0) {
  eightBall = 'It is certain';

} else if(randomNumber == 1){
  eightBall = 'It is decidedly so';
}
  else if (randomNumber == 2){
  eightBall = 'Reply hazy try again';   
  }
  else if (randomNumber == 3) {
    eightBall = 'Cannot predict now'
  }
  else if (randomNumber == 4){
    eightBall = 'Do not count on it';
  }
  else if (randomNumber == 5) {
    eightBall = 'My sources say no';
  }
  else if (randomNumber == 6) {
    eightBall = 'Outlook not so good';
  }
  else {eightBall == 'Signs point to yes';}

document.write(eightBall);