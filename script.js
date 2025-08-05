let userScore = 0;
let computerScore = 0;
const handEmojis = { rock: '✊', paper: '🤚', scissors: '✌️' };
const countdownEl = document.getElementById("countdownText");

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const userHand = document.getElementById("userHand");
  const computerHand = document.getElementById("computerHand");
  const resultText = document.getElementById("resultText");

  // Reset UI
  countdownEl.innerText = "";
  resultText.innerText = "";
  userHand.innerText = '✊';
  computerHand.innerText = '✊';

  userHand.classList.remove("shake");
  computerHand.classList.remove("shake");

  const countdownWords = ["Rock...", "Paper...", "Scissors...", "SHOOT!"];
// const countdownAudioIds = ["voiceRock", "voicePaper", "voiceScissors", "voiceShoot"];

countdownWords.forEach((word, i) => {
  setTimeout(() => {
    countdownEl.innerText = word;
  //  document.getElementById(countdownAudioIds[i]).play();
  }, i * 800);
});


  // Shake hands after countdown
  setTimeout(() => {
    userHand.classList.add("shake");
    computerHand.classList.add("shake");
  }, 3000);

  // Final result (after shake)
  setTimeout(() => {
    userHand.classList.remove("shake");
    computerHand.classList.remove("shake");

    userHand.innerText = handEmojis[userChoice];
    computerHand.innerText = handEmojis[computerChoice];

    let result = "";

    if (userChoice === computerChoice) {
      result = `It's a Draw! Both chose ${userChoice}`;
      document.getElementById("drawSound").play();
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      result = `You Win! ${userChoice} beats ${computerChoice}`;
      userScore++;
      document.getElementById("winSound").play();
    } else {
      result = `You Lose! ${computerChoice} beats ${userChoice}`;
      computerScore++;
      document.getElementById("loseSound").play();
    }

    resultText.innerText = result;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
  }, 4300);
}

function restartGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("userScore").innerText = "0";
  document.getElementById("computerScore").innerText = "0";
  document.getElementById("resultText").innerText = "";
  document.getElementById("countdownText").innerText = "";
  document.getElementById("userHand").innerText = '✊';
  document.getElementById("computerHand").innerText = '✊';
}


