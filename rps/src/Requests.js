export class Requests {
    play(p1Throw, p2Throw, observer) {
        if (
            this.isInvalidThrow(p1Throw) ||
            this.isInvalidThrow(p2Throw)
        ) {
            observer.invalid()
        } else if (p1Throw === p2Throw) {
            observer.tie()
        } else if (
            p1Throw === 'rock' && p2Throw === 'scissors' ||
            p1Throw === 'scissors' && p2Throw === 'paper' ||
            p1Throw === 'paper' && p2Throw === 'rock'
        ) {
            observer.p1Wins()
        } else {
            observer.p2Wins()
        }
    }

    isInvalidThrow(playerThrow) {
        return !['rock', 'scissors', 'paper'].includes(playerThrow)
    }
}
