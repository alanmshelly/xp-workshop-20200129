import {Requests} from '../src/Requests'
import * as Sinon from 'sinon'
import {FakeRoundRepo} from './FakeRoundRepo'

describe('playRPS', () => {
    let requests

    beforeEach(() => {
        const fakeRoundRepo = new FakeRoundRepo()
        requests = new Requests(fakeRoundRepo)
    })

    describe('p1wins', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = {
                p1Win: Sinon.spy(),
            }
        })

        it('rock vs scissors', () => {
            requests.playRPS('rock', 'scissors', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p1Win)
        })

        it('scissors vs paper', () => {
            requests.playRPS('scissors', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p1Win)
        })

        it('paper vs rock', () => {
            requests.playRPS('paper', 'rock', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p1Win)
        })
    })

    describe('p2wins', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = {
                p2Win: Sinon.spy(),
            }
        })

        it('scissors vs rock', () => {
            requests.playRPS('scissors', 'rock', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p2Win)
        })

        it('paper vs scissors', () => {
            requests.playRPS('paper', 'scissors', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p2Win)
        })

        it('rock vs paper', () => {
            requests.playRPS('rock', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p2Win)
        })

    })

    describe('tie', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = {
                tie: Sinon.spy(),
            }
        })

        it('paper vs paper', () => {
            requests.playRPS('paper', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.tie)
        })

        it('rock vs rock', () => {
            requests.playRPS('rock', 'rock', spyObserver)


            Sinon.assert.calledOnce(spyObserver.tie)
        })

        it('scissors vs scissors', () => {
            requests.playRPS('scissors', 'scissors', spyObserver)


            Sinon.assert.calledOnce(spyObserver.tie)
        })
    })

    describe('invalid', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = {
                invalid: Sinon.spy(),
            }
        })

        it('rock vs invalid', () => {
            requests.playRPS('rock', 'daruma', spyObserver)


            Sinon.assert.calledOnce(spyObserver.invalid)
        })

        it('invalid vs paper', () => {
            requests.playRPS('daruma', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.invalid)
        })

        it('invalid vs invalid', () => {
            requests.playRPS('daruma', 'daruma', spyObserver)


            Sinon.assert.calledOnce(spyObserver.invalid)
        })
    })
})
