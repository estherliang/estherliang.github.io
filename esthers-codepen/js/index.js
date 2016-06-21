function game(){
  var name = prompt("Please enter your name");
alert("Hello "+name);

var message = "Welcome to the Maze";
alert(message)

var pear = prompt("You are a Runner, stuck in the maze. You only have 2 days left to get back to the Glade to stay alive. Will you run or stay?").toUpperCase();

if (pear === "RUN") {
var run = prompt("You decided to run. Do you want to go left or right?").toUpperCase();

  
if (run === "LEFT") {
alert("You see a griever! A griever is a monster with needles which sting you. You have a sword and a gun. Which one do you choose?");
}

else if(run === "RIGHT") {
alert("You see a griever! A griever is a monster with needles which sting you. You can run or shoot. Which one do you choose?").ToUpperCase();
}

if (monster === SHOOT){
  var monster = prompt(You decided to shoot the griever. Good choice. )
}
  
else {
  alert('Please choose again.');
}
}

  
 else if (pear === "STAY"){
   var stay = prompt("You decided to stay. That's not a good idea. Choose again.")
 }
}