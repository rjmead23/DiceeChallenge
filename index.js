
// Player 1 Dice
var randomNumber1 = selectRandomNumber(6) ;
var randomImageSource = selectDiceImage(randomNumber1);
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// Player 2 dice
var randomNumber2 = selectRandomNumber(6);
var randomImageSource2 = selectDiceImage(randomNumber2);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

displayResultText(randomNumber1, randomNumber2);

// Function Section
function selectRandomNumber(numbers){
  var randomNumber =  Math.floor(Math.random() * numbers) + 1;
  return randomNumber
}

function selectDiceImage(number){
  return "images/dice" + number + ".png";
}

function displayResultText(number1, number2){
  // Update text depending on outcome
  if(number1 > number2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
  }
  else if(number2 > number1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
  }
  else{
    document.querySelector("h1").innerHTML = "draw!";
  }
}
