const rockButton = document.querySelector('.js-rock-button')
const paperButton = document.querySelector('.js-paper-button')
const scissorsButton = document.querySelector('.js-scissors-button')

let score = {
    wins: 0,
    losses: 0,
    ties: 0
}

rockButton.addEventListener('click', function () {
    runGame('rock')
})
paperButton.addEventListener('click', function() {
    runGame('paper')
})
scissorsButton.addEventListener('click', function() {
    runGame('scissors')
})

function runGame(playerChoice) {
    const computerChoice = getComputerMove()

    let gameResult = ''

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            gameResult = 'Its a tie.'
        } else if (computerChoice === 'paper') {
            gameResult = 'You lose :('
        } else if (computerChoice === 'scissors') {
            gameResult = 'You win!'
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            gameResult = 'You win!'
        } else if (computerChoice === 'paper') {
            gameResult = 'Its a tie.'
        } else if (computerChoice === 'scissors') {
            gameResult = 'You lose :('
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            gameResult = 'You lose :('
        } else if (computerChoice === 'paper') {
            gameResult = 'You win!'
        } else if (computerChoice === 'scissors') {
            gameResult = 'Its a tie.'
        }
    }

    if (gameResult === 'You win!') {
        score.wins ++
    } else if (gameResult === 'You lose :(') {
        score.losses ++
    } else if (gameResult === 'Its a tie.') {
        score.ties ++
    }

    document.querySelector('.js-wins')
        .innerHTML = score.wins
    document.querySelector('.js-losses')
        .innerHTML = score.losses
    document.querySelector('.js-ties ')
        .innerHTML = score.ties

    document.querySelector('.js-result')
        .innerHTML = gameResult

    document.querySelector('.js-rps-result')
        .innerHTML =   `You <img class="rps-img" src="/rock-paper-scissors/assets/img/${playerChoice}-emoji.png"> 
                    VS 
                        <img class="rps-img" src="/rock-paper-scissors/assets/img/${computerChoice}-emoji.png"> Computer`

    if (score.wins === 5 || score.losses === 5) {
        gameOver()
    }
}

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

function gameOver() {

    if (score.wins === 5) {
        document.querySelector('.js-result')
            .innerHTML = 'Game Over! You won this round'
    } else if (score.losses === 5) {
        document.querySelector('.js-result')
            .innerHTML = 'Game Over! Better luck next time'
    }

    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true

    document.querySelector('.js-rps-result')
        .innerHTML = `<button class="play-again-button js-play-again">
                        Play Again?
                      </button>`

    let playAgain = document.querySelector('.js-play-again')
    playAgain.addEventListener('click', returnHome)

    function returnHome() {
        location.reload()
    }
}