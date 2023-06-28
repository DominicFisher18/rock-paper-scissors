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
            // console.log('Its a tie.')
            gameResult = 'Its a tie.'
        } else if (computerChoice === 'paper') {
            // console.log('You lose :(')
            gameResult = 'You lose :('
        } else if (computerChoice === 'scissors') {
            // console.log('You win!')
            gameResult = 'You win!'
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            // console.log('You win!')
            gameResult = 'You win!'
        } else if (computerChoice === 'paper') {
            // console.log('Its a tie.')
            gameResult = 'Its a tie.'
        } else if (computerChoice === 'scissors') {
            // console.log('You lose :(')
            gameResult = 'You lose :('
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            // console.log('You lose :(')
            gameResult = 'You lose :('
        } else if (computerChoice === 'paper') {
            // console.log('You win!')
            gameResult = 'You win!'
        } else if (computerChoice === 'scissors') {
            // console.log('Its a tie.')
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

    // showResult()
    document.querySelector('.js-result')
        .innerHTML = gameResult

    document.querySelector('.js-rps-result')
        .innerHTML =   `You <img class="rps-img" src="/rock-paper-scissors/assets/img/${playerChoice}-emoji.png"> 
                    VS 
                        <img class="rps-img" src="/rock-paper-scissors/assets/img/${computerChoice}-emoji.png"> Computer`
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

// function showResult() {
    
// }