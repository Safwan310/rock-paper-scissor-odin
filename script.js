let playerScore = 0,computerScore = 0;
let announcer = document.querySelector("#announcer");
function game(playerSelection){
    if(playerScore < 5 && computerScore < 5)
    {let computerSelection = csselect();
        console.log(playerSelection+"=="+computerSelection);
    if((playerSelection == "rock"&&computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "rock"))
       {
            computerScore += 1;
            document.querySelector("#cDisplay").innerText = computerScore;
            if(computerScore == 5){
                announcer.innerText = "GAME OVER! You lose. Click restart to start a new game";
            }
            else{
                announcer.innerText = `Point for computer! ${computerSelection} beats ${playerSelection}`;
            }
            
       }
    else if(playerSelection == computerSelection){
        announcer.innerText = "Tie, Points for none";
    }
    else{
        playerScore += 1;
        document.querySelector("#playerDisplay").innerText = playerScore;
        if(playerScore == 5){
            announcer.innerText = "GAME OVER! You win.  Click restart to start a new game";
        }
        else{
            announcer.innerText = `Point for you! ${playerSelection} beats ${computerSelection}`;
        }
    }
    }
    else{
        if(playerScore > computerScore){
            announcer.innerText = "GAME OVER! You win.  Click restart to start a new game";
        }
        else if(playerScore == computerScore){
            announcer.innerText = "GAME OVER! It's a tie. Click restart to start a new game"
        }
        else{
            announcer.innerText = "GAME OVER! You lose. Click restart to start a new game"
        }
    }
}

function csselect(){
    let gameArray = ['rock', 'paper','scissors']
    return  gameArray[Math.floor(Math.random()*gameArray.length)]
}

let reset = document.querySelector('#reset');

reset.addEventListener('click',()=>window.location.reload())