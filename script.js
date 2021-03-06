
        let playerScore = 0;
        let computerScore = 0;
        function computerPlay (){
            strings = ["rock", "paper", "scissors"]
            result = strings[Math.floor(Math.random() * strings.length)]
            return result
        }
        function playRound (playerSelection, computerSelection) {
            switch(computerPlay()) {
                case playerSelection.toLowerCase():
                    return "It's a tie";
                    
                case "rock":
                    if (playerSelection.toLowerCase() === "paper") {
                        return "You Win! paper beats rock";
                        
                    }
                    return "You Lose! rock beats scissors";
                    
                case "paper":
                    if (playerSelection.toLowerCase() === "scissors") {
                        return "You Win! scissors beats paper";
                        
                    }
                    return "You Lose! paper beats rock";
                    
                case "scissors":
                    if (playerSelection.toLowerCase() === "rock") {
                        return "You Win! rock beats scissors";
                        
                    }
                    return "You Lose! scissors beats paper";
                    
                default:
                    return "Invalid input";
                    
            }
        }
        
        function win() {
            if (playerScore === 5) {
               
                
                return "Game Over, You Win!"
            }
            else if (computerScore === 5) {
                
                
                return "Game Over, You Lose!"
            }
            else {
                return " ";
            }

        }
        function whoWins(results) {
            const score = document.getElementById('score');
            if (results.includes("Win")) {
                playerScore++;
                score.innerHTML =  `${playerScore} - ${computerScore}`;
            }
            else if (results.includes("Lose")) {
                computerScore++;
                score.innerHTML = `${playerScore} - ${computerScore}`
            }

        }
        const results = document.createElement('div');
        const winner = document.createElement('div');
        const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    const container = document.querySelector('#container');
    results.classList.add('results');
    results.innerHTML = playRound(button.id, computerPlay());
    container.appendChild(results);
    whoWins(results.textContent);
    winner.classList.add('results');
    winner.innerHTML = win();
    container.appendChild(winner);
});
});


