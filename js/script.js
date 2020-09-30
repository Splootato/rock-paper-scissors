
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");

    function printResult() {
      document.getElementById("PlayerScore").innerHTML =
        "Your score = " + playerScore;
      document.getElementById("ComputerScore").innerHTML =
        "Computer score = " + computerScore;
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        resetImg()
        playerSelection = button.id;
        computerSelection = computerPlay();
        changeImages();
        singleRound(playerSelection, computerSelection);
        Result();
        printResult();
        scoreCheck();
      });
    });

    function computerPlay() {
      randomNumber = Math.floor(Math.random() * 3 + 1);
      return randomNumber == 1
        ? "rock"
        : randomNumber == 2
        ? "paper"
        : "scissors";
    }
    function singleRound(playerSelection, computerSelection) {
      if (playerSelection == computerSelection) {
        return (
          "It's a draw! " +
          playerSelection +
          " equals " +
          computerSelection +
          "!"
        );
      } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
          return "win!";
        } else if (computerSelection == "paper") {
          return "lose!";
        }
      } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
          return "win! ";
        } else if (computerSelection == "rock") {
          return "lose!";
        }
      } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
          return "win!";
        } else if (computerSelection == "scissors") {
          return "lose!";
        }
      }
      return "Invalid Input :(";
    }

    function scoreCheck() {
        resultAnnouncement = document.querySelector("#Announcement");
      if (playerScore == 5 && computerScore != 5) {
        resultAnnouncement.src = "images/win.png"
        playerScore = 0;
        computerScore = 0;
      } else if (computerScore == 5 && playerScore != 5) {
        resultAnnouncement.src = "images/lose.png"
        playerScore = 0;
        computerScore = 0;
      } else if (playerScore == 5 && computerScore == 5) {
        resultAnnouncement.src = "images/draw.png"
        playerScore = 0;
        computerScore = 0;
      }
    }
    function Result() {
        
      var result = singleRound(playerSelection, computerSelection);

      if (result.includes("win!")) {
        playerScore++;

        return playerScore;
      } else if (result.includes("lose!")) {
        computerScore++;

        return computerScore;
      } else if (result.includes("draw!")) {
        computerScore++;
        playerScore++;

        return computerScore;
        return playerScore;
      }
    }
    function changeImages() {
      playerImg = document.querySelector("#playerPickImg");
      computerImg = document.querySelector("#computerPickImg");
      if (playerSelection === "rock") {
        playerImg.src =
          "images/rock.png";
      } else if (playerSelection === "paper") {
        playerImg.src =
          "images/paper.png";
      } else if (playerSelection === "scissors") {
        playerImg.src =
          "images/scissors.png";
      }
      if (computerSelection === "rock") {
        computerImg.src =
          "images/rock.png";
      } else if (computerSelection === "paper") {
        computerImg.src =
          "images/paper.png";
      } else if (computerSelection === "scissors") {
        computerImg.src =
          "images/scissors.png";
      }
    }
    function resetImg(){
        if (playerScore < 5 && computerScore < 5){
            resultAnnouncement = document.querySelector("#Announcement");
            resultAnnouncement.src ="images/announcement.png";
        }
    }
