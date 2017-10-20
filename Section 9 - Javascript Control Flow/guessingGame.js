
var secretNum = 4;

var guess = Number(prompt("Guess a number between 1 and 10"));

if (guess === secretNum) {
	alert("You got it right!")
}

else if (guess > secretNum) {
	alert("Your guess was too high");
}

else if (guess < secretNum) {
	alert("Your guess was too low");
}