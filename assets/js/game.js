
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//you can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth, playerMoney);
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames  = ["Roborto","Amy Andriod","Robo Trumble"];
   
var fight = function(enemyName) {
//alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' OR 'SKIP' to choose. ");

 if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName +  " attacked" +  enemyName  + ". "  + enemyName  +  "now has" +  enemyHealth + "health remaining."   
    );
if (enemyHealth <= 0) {
    window.alert(enemyHealth + "has died!"); 
} else {
    window.alert(enemyName + "still has" + enemyHealth + "health left.");
}


playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + "attacked" + playerName + " ." + playerName + "now has" + playerHealth + "health remaining."
);


if (playerHealth <= 0) {
    window.alert(playerName + "has died!");
} else {
    window.alert(playerName + "still has" + playerHealth + "health left.");
}
} else if (promptFight === "skip" || promptFight === "SKIP") {

 var confirmSkip = window.confirm("Are you sure you'd like to quit?");
 if (confirmSkip){
    window.alert(playerName + "has decided to skip this fight! Goodbye!");
    playerMoney = playerMoney - 2;
}
else{
    fight();
}

} 
else {
window.alert("you need to choose a valid option. Try again!");

}
}

for(var i = 0; i<enemyNames.length; i++){
    fight(enemyNames[i]);
}
//Game states
//'win' - player robot has defeated all enemy-robots
//* fight all enemy-robots
//*defeat all enemy-robots
//"Lose" - player robot's health is zero or less
