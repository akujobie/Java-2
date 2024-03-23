const letsplay = document.getElementById("letsplay")
const congrats = document.getElementById("congrats")
const gameover = document.getElementById("gameover")
const Credentials = document.getElementById('Credentials');

// Function to get user credentials
function getCredentials() {
  const username = prompt('Enter your username:');
  const passcode = prompt('Enter your passcode:');

  if (username && passcode) {
      Credentials.innerHTML = (`Username: ${username}\nPasscode: ${passcode}`);
      document.getElementById('letsplay').style.display = 'block';
  }
}
// Function to generate a random number between two integers
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Function to handle the lottery game
 letsplay.onclick=() =>{
    let secretNumber = generateRandomNumber(20, 40);
    let attempts = 4;
  
    for (let i = 0; i < attempts; i++) {
      let userGuess = prompt("Guess a number between 20 and 40. You have " + (attempts - i) + " attempts left.");
  
      if (userGuess == null || userGuess === "") {
        alert("You didn't enter a number. Game over.")
        break;
      }
  
      userGuess = parseInt(userGuess);
  
      if (isNaN(userGuess) || userGuess < 20 || userGuess > 40) {
        alert("Invalid input. Please enter a number between 20 and 40.");
      } else {
        if (userGuess === secretNumber) {
            congrats.innerHTML="Congratulations! You have won 1 million naira! The secret number is: " + secretNumber;
          alert("Congratulations! You guessed the secret number: " + secretNumber);
          return;
        } else {
          attempts--;
          
          if (attempts === 1) {
            alert("Last attempt! You have " + attempts + " attempt left.");
          } else {
            alert("Incorrect guess. You have " + attempts + " attempts left.");
          }
        }
      }
    }
    gameover.innerHTML= "Game over! Better luck next time. The secret number was: " + secretNumber ;
    alert("Game over. The secret number was: " + secretNumber);
  };
  
  

