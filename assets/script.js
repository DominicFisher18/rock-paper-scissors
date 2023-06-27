const rockButton = document.querySelector('.js-rock-button')
const paperButton = document.querySelector('.js-paper-button')
const scissorsButton = document.querySelector('.js-scissors-button')

rockButton.addEventListener('click', runGame('rock'))
paperButton.addEventListener('click', runGame('paper'))
scissorsButton.addEventListener('click', runGame('scissors'))

function getComputerMove() {
    let randomNumber = Math.random()
    let computerChoice = ''

    if (randomNumber <= 1 / 3) {
        computerChoice = 'rock'
    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        computerChoice = 'paper'
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerChoice = 'scissors'
    }

    return computerChoice
}

function runGame(playerChoice) {
    const computerChoice = getComputerMove()

    let gameResult = ''

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('Its a tie.')
        } else if (computerChoice === 'paper') {
            console.log('You lose :(')
        } else if (computerChoice === 'scissors') {
            console.log('You win!')
        }
    }
}



