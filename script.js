/*
How many hours did you spend on this assignment?:

What part of the assignment did you spend the most time on?:

How comfortable did you feel with this assignment? (1-5):

Is there anything in this code that you feel pleased about?:

What's one aspect of your code you would like specific, elaborate feedback on?:

*/
//username entry
let userName = prompt(`Please enter your name!`, ``);
var output = ``;
//instructions to be in the output box
if (userName != ``) {
  output = `Welcome ${userName} to YY's scissors paper stone.`;
}

//possible choices
var userWinCounter = 0;
var computerWinCounter = 0;
var choices = [`scissors`, `paper`, `stone`];

//function to check input
var inputChecker = function (input) {
  if (input == `scissors` || input == `paper` || input == `stone`) {
    console.log(input);
    return input;
  } else {
    output = `Invalid output, please enter only scissors, paper or stone.`;
    console.log(output);
    return output;
  }
};

//random computer choice function
var randomComputerChoice = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  var choice = choices[randomInteger];
  return choice;
};

var main = function (input) {
  var checkedInput = inputChecker(input);
  if (
    checkedInput !=
    `Invalid output, please enter only scissors, paper or stone.`
  ) {
    output = ScissorsPaperStone(userName, checkedInput);
    return output;
  } else {
    return output;
  }
};

var ScissorsPaperStone = function (userName, checkedInput) {
  var randomComputer = randomComputerChoice();

  if (
    (checkedInput == `scissors` && randomComputer == `paper`) ||
    (checkedInput == `paper` && randomComputer == `stone`) ||
    (checkedInput == `stone` && randomComputer == `scissors`)
  ) {
    userWinCounter += 1;
    output = `Congrats ${userName}! You won! You chose ${checkedInput} and computer chose ${randomComputer}. Your current wins is: ${userWinCounter}, computer: ${computerWinCounterYY}`;
  } else if (checkedInput == randomComputer) {
    output = `That's a draw! Both of you chose ${checkedInput}. Current wins: ${userwinCounter}.`;
  } else {
    computerWinCounter += 1;
    output = `Sorry ${userName}! You lost! You chose ${checkedInput} and computer chose ${randomComputer}. Your score: ${userWinCounter}, computer's score: ${computerWinCounter}`;
  }
  return output;
};
