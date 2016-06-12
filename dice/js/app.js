/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the second die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rollButton = document.getElementById("roll-dice");
var dice = ['first', 'second'];

rollButton.onclick = function () {
  dice.forEach(updateClass); //Version 1
  // diceRoll(); // Version 2
};

//Version 1
function updateClass(value) {
  document.getElementById(value + '-die').className = ('dice-' + random(1,6).toString());
}

// Version 2
function diceRoll() {
  random1 = random(1,6);
  random2 = random(1,6);

  document.getElementById('first-die').className = ('dice-' + random1);
  document.getElementById('second-die').className = ('dice-' + random2);
}
