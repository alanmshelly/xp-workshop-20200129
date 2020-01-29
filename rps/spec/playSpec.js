import {Requests} from '../src/Requests'
import * as Sinon from 'sinon'

describe('play', () => {
    let requests
    beforeEach(() => {
        requests = new Requests()
    })

    describe('p1wins',  () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = {
                p1Wins: Sinon.spy(),
            }
        })

        it('rock vs scissors', () => {
            requests.play('rock', 'scissors', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p1Wins)
        })

        it('scissors vs paper', () => {
            requests.play('scissors', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p1Wins)
        })

        it('paper vs rock', () => {
            requests.play('paper', 'rock', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p1Wins)
        })
    })

    describe('p2wins', () => {
        let spyObserver
        beforeEach(() => {
            spyObserver = {
                p2Wins: Sinon.spy(),
            }
        })

        it('scissors vs rock', () => {
            requests.play('scissors', 'rock', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p2Wins)
        })

        it('paper vs scissors', () => {
            requests.play('paper', 'scissors', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p2Wins)
        })

        it('rock vs paper', () => {
            requests.play('rock', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.p2Wins)
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
            requests.play('paper', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.tie)
        })

        it('rock vs rock', () => {
            requests.play('rock', 'rock', spyObserver)


            Sinon.assert.calledOnce(spyObserver.tie)
        })

        it('scissors vs scissors', () => {
            requests.play('scissors', 'scissors', spyObserver)


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
            requests.play('rock', 'daruma', spyObserver)


            Sinon.assert.calledOnce(spyObserver.invalid)
        })

        it('invalid vs paper', () => {
            requests.play('daruma', 'paper', spyObserver)


            Sinon.assert.calledOnce(spyObserver.invalid)
        })

        it('invalid vs invalid', () => {
            requests.play('daruma', 'daruma', spyObserver)


            Sinon.assert.calledOnce(spyObserver.invalid)
        })
    })
})