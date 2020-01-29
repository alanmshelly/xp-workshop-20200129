export class Requests {
    playRPS(p1Choice, p2Choice, observer) {
        const rpsRound = new RPSRound(p1Choice, p2Choice, observer)
        rpsRound.process()
    }
}

class RPSRound {
    constructor(p1Choice, p2Choice, observer) {
        this.p1Choice = p1Choice
        this.p2Choice = p2Choice
        this.observer = observer
    }

    process() {
        if (
            this.isInvalidChoice(this.p1Choice) ||
            this.isInvalidChoice(this.p2Choice)
        ) {
            this.observer.invalid()
        } else if (this.tieScenario()) {
            this.observer.tie()
        } else if (
            this.playerOneWinsScenarios()
        ) {
            this.observer.p1Win()
        } else {
            this.observer.p2Win()
        }
    }

    tieScenario() {
        return this.p1Choice === this.p2Choice
    }

    playerOneWinsScenarios() {
        return this.p1Choice === Choice.ROCK && this.p2Choice === Choice.SCISSORS ||
          this.p1Choice === Choice.SCISSORS && this.p2Choice === Choice.PAPER ||
          this.p1Choice === Choice.PAPER && this.p2Choice === Choice.ROCK
    }

    isInvalidChoice(playerChoice) {
        return ![Choice.ROCK, Choice.SCISSORS, Choice.PAPER].includes(playerChoice)
    }
}

const Choice = {
    ROCK: 'rock',
    SCISSORS: 'scissors',
    PAPER: 'paper',
}
