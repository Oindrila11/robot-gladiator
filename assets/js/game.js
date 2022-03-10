var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
//you can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if the player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by substracting the amount set in the playerAttack variable
       
   //Substract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
   enemyHealth = enemyHealth - playerAttack;
   //Log a resulting message to the console so we know that it worked.
   console.log(
       playerName + "attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
   );
     
//check enemy's health
if (enemyHealth <= 0) {
    window.alert( enemyName  +  "has  died!" );
}
else {
    window.alert ( enemyName +  "still  has"  +  enemyHealth  +  "health  left." );
} 
//Substract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
//log a resulting message to the console so we know that it worked.
console.log(
     enemyName  +  "attacked"  +  playerName  + ". " +  playerName + "now has" + playerHealth + "health remaining."
);
// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
  } else if  (promptFight === "skip" || promptFight === "SKIP") {
  window.alert(playerName + " has chosen to skip the fight!");
} else {
  window.alert("You need to choose a valid option. Try again!");
}
fight();
}