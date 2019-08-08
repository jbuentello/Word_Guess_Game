
    var words = ["flux capacitor", "delorean", "thruster", "mcleod"];
    
    var choice = words[Math.floor(Math.random()* words.length)];
    console.log(choice);
    
        var answer = [];
        for (var i = 0; i < choice.length; i++) {
        answer[i] ="_";
        }


var remainingLetters = choice.length;
var remainingGuesses = 10;
 
while (remainingLetters >= 0 && remainingGuesses > 0) {
      alert(answer.join(" "));

     
     var guess = prompt("Guess a letter, or click Cancel to stop playing.");

    console.log(remainingLetters);
     document.getElementById("p1").innerHTML = "Number of Guesses Remaining: " + remainingGuesses;
     document.getElementById("currentWord").innerHTML = "Current Word: " + answer;
     

     if (guess === null) {
         break;
     } else if (guess.length !== 1) {
         alert("Please enter a single letter.");
     } else {
        
        for (var j = 0; j < choice.length; j++) {
            if (choice[j] === guess) {
             answer[j] = guess;
             remainingLetters--;
            }
             
             }
            }
        remainingGuesses--;    
     }
        // alert(answer.join(" "));
        // alert("Good job! The answer was " + choice);

