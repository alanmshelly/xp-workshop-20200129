export class Requests {
    constructor(roundRepo) {
        this.roundRepo = roundRepo
    }

    playRPS(p1Choice, p2Choice, observer) {
        const rpsRound = new RPSRound(p1Choice, p2Choice, observer, this.roundRepo)
        rpsRound.process()
    }

    getHistory(observer) {
        if (this.roundRepo.isEmpty()) {
            observer.noRounds()
        } else {
            const allRounds = this.roundRepo.getAll()
            observer.rounds(allRounds)
        }
    }
}

export class Round {
    constructor(player1Choice, player2Choice, gameResult) {
        this.player1Choice = player1Choice
        this.player2Choice = player2Choice
        this.gameResult = gameResult
    }
}

class RPSRound {
    constructor(p1Choice, p2Choice, observer, roundRepo) {
        this.p1Choice = p1Choice
        this.p2Choice = p2Choice
        this.observer = observer
        this.roundRepo = roundRepo
    }

    process() {
        if (
            this.isInvalidChoice(this.p1Choice) ||
            this.isInvalidChoice(this.p2Choice)
        ) {
            this.observer.invalid()
            this.roundRepo.save(new Round(this.p1Choice, this.p2Choice, 'invalid'))
        } else if (this.tieScenario()) {
            this.observer.tie()
            this.roundRepo.save(new Round(this.p1Choice, this.p2Choice, 'tie'))
        } else if (
            this.playerOneWinsScenarios()
        ) {
            this.observer.p1Win()
            this.roundRepo.save(new Round(this.p1Choice, this.p2Choice, 'p1Win'))
        } else {
            this.observer.p2Win()
            this.roundRepo.save(new Round(this.p1Choice, this.p2Choice, 'p2Win'))
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
