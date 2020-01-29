export class Requests {
    playRPS(p1Choice, p2Choice, observer) {
        if (
            this.isInvalidChoice(p1Choice) ||
            this.isInvalidChoice(p2Choice)
        ) {
            observer.invalid()
        } else if (p1Choice === p2Choice) {
            observer.tie()
        } else if (
            p1Choice === 'rock' && p2Choice === 'scissors' ||
            p1Choice === 'scissors' && p2Choice === 'paper' ||
            p1Choice === 'paper' && p2Choice === 'rock'
        ) {
            observer.p1Win()
        } else {
            observer.p2Win()
        }
    }

    isInvalidChoice(playerChoice) {
        return !['rock', 'scissors', 'paper'].includes(playerChoice)
    }
}
