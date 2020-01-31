import {Requests, Round} from '../src/Requests'
import * as Sinon from 'sinon'
import {FakeRoundRepo} from './FakeRoundRepo'

describe('history', () => {
    let requests
    let fakeRoundRepo

    beforeEach(() => {
        fakeRoundRepo = new FakeRoundRepo()
        requests = new Requests(fakeRoundRepo)
    })

    describe('when no rounds have been played', () => {
        it('informs the ui that no rounds have been played', () => {
            const uiObserver = {
                noRounds: Sinon.spy(),
            }


            requests.getHistory(uiObserver)


            Sinon.assert.calledOnce(uiObserver.noRounds)
        })
    })

    describe('when rounds have been played', () => {
        it('getHistory sends the rounds to the UI', () => {
            const playRoundUIObserver = {
                invalid: () => {},
                tie: () => {},
                p1Win: () => {},
                p2Win: () => {},
            }
            requests.playRPS('rock', 'daruma', playRoundUIObserver)
            requests.playRPS('rock', 'rock', playRoundUIObserver)
            requests.playRPS('rock', 'scissors', playRoundUIObserver)
            requests.playRPS('rock', 'paper', playRoundUIObserver)

            const getHistoryUIObserver = {
                rounds: Sinon.spy(),
            }
            requests.getHistory(getHistoryUIObserver)

            const firstCall = getHistoryUIObserver.rounds.firstCall
            expect(firstCall).toBeDefined
            expect(firstCall.args[0]).toEqual(
                [
                    new Round('rock', 'daruma', 'invalid'),
                    new Round('rock', 'rock', 'tie'),
                    new Round('rock', 'scissors', 'p1Win'),
                    new Round('rock', 'paper', 'p2Win'),
                ]
            )
        })
    })
})
