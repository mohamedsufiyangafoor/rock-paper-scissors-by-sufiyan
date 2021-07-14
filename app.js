const game = () =>{
    let pScore =0;
    let cScore=0; 

    const startGame = () =>{
         const playBtn = document.querySelector(".intro Button");
         const introScreen = document.querySelector(".intro");
         const match = document.querySelector(".match");
         const option = document.querySelector(".option");
         const winner = document.querySelector(".winner");
         playBtn.addEventListener("click",()=> {
            introScreen.classList.add("fadeOut");
            introScreen.classList.remove("fadeIn");
            match.classList.add("fadeIn");
            option.classList.add("fadeIn");
            winner.textContent = "5 points to win the game";
         })

    }

    const playMatch = () =>{
        const options = document.querySelectorAll(".option button");
        const playerHand = document.querySelector(".player-hand");
        const ComputerHand = document.querySelector(".computer-hand");
        const computeroptions = ["rock","paper","scissors"];
        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand =>{
            hand.addEventListener("animationend",()=>{
                hand.style.animation = "";
            })
        })
        options.forEach( option => {
            option.addEventListener("click", ()=>{
                const computerNumber = Math.floor(Math.random() * 3);
                const playerChoice = option.textContent.toLowerCase();
                const computerChoice = computeroptions[computerNumber];
               setTimeout(() => {
                compareHands(playerChoice,computerChoice);
                // update images
                playerHand.src = `./assets/${option.textContent}.png`;
                ComputerHand.src = `./assets/${computerChoice}.png`;
               }, 2000);
                playerHand.style.animation = "shakePlayer 2s ease";
                ComputerHand.style.animation = "shakeComputer 2s ease";

            })
        })
    }

    //checking which player wins
    if(pScore > 2) {
        const winner = document.querySelector(".winner");
        winner.textContent = "You win the game!!!";
    }
    else if(cScore > 2) {
        const winner = document.querySelector(".winner");
        winner.textContent = "Computer win's the game!!!";
    }
    
    const compareHands = (playerChoice,computerChoice) =>{
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        //checking paper
        else if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                
                pScore++;
                winner.textContent = "You score a point";
                addScore();
                return;
            }else{
                cScore++;
                winner.textContent = "Computer score's a point ";
                addScore();
                return;
            }
        }
        //checking scissors
        else if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                cScore++;
                winner.textContent = "Computer score's a point";
                addScore();
                return;
            }else{
                pScore++;
                winner.textContent = "You score a point ";
                addScore();
                return;
            }
        }
        //checking rock
        else if(playerChoice === "rock"){
            if(computerChoice === "paper"){
                cScore++;
                winner.textContent = "Computer score's a point";
                addScore();
                return;
            }else{
                pScore++;
                winner.textContent = "You score a point";
                addScore();
                return;
            }
        }
        else{
            return;
        }
    }
    const addScore = () =>{
        const playerScore = document.querySelector(".player-1 p");
        const computerScore = document.querySelector(".computer p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        const winner = document.querySelector(".winner");
        const introScreen = document.querySelector(".intro");
         const match = document.querySelector(".match");
         const option = document.querySelector(".option");
         const playBtn = document.querySelector(".intro Button");
        if(pScore === 5) {
            winner.textContent = "You win the game!!!";
            setTimeout(() => {
                introScreen.classList.add("fadeIn");
                match.classList.remove("fadeIn");
                option.classList.remove("fadeIn");
                pScore = 0;
                cScore = 0;
                playerScore.textContent = 0;
                computerScore.textContent = 0;  
            }, 3000);
            startGame();
            return;
        }
        else if(cScore === 5) {
            winner.textContent = "Computer win's the game!!!";
            setTimeout(() => {
                introScreen.classList.add("fadeIn");
                match.classList.remove("fadeIn");
                option.classList.remove("fadeIn");
                pScore = 0;
                cScore = 0;
                playerScore.textContent = 0;
                computerScore.textContent = 0;
            }, 3000);
            startGame();
            return;
            
        }
        
    }


//calling inner function
startGame();
playMatch();


}


// starting the game
game();