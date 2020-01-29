import {Requests} from '../src/Requests'
import * as Sinon from 'sinon'

describe('play', () => {
    it('rock vs scissors', () => {
        const spyObserver = {
            p1Wins: Sinon.spy(),
        }


        new Requests().play('rock', 'scissors', spyObserver)


        Sinon.assert.calledOnce(spyObserver.p1Wins)
    })

    it('scissors vs rock', () => {
        const spyObserver = {
            p2Wins: Sinon.spy(),
        }


        new Requests().play('scissors', 'rock', spyObserver)


        Sinon.assert.calledOnce(spyObserver.p2Wins)
    })

    it('scissors vs paper', () => {
        const spyObserver = {
            p1Wins: Sinon.spy(),
        }


        new Requests().play('scissors', 'paper', spyObserver)


        Sinon.assert.calledOnce(spyObserver.p1Wins)
    })

    it('paper vs scissors', () => {
        const spyObserver = {
            p2Wins: Sinon.spy(),
        }


        new Requests().play('paper', 'scissors', spyObserver)


        Sinon.assert.calledOnce(spyObserver.p2Wins)
    })

    it('paper vs rock', () => {
        const spyObserver = {
            p1Wins: Sinon.spy(),
        }


        new Requests().play('paper', 'rock', spyObserver)


        Sinon.assert.calledOnce(spyObserver.p1Wins)
    })

    it('rock vs paper', () => {
        const spyObserver = {
            p2Wins: Sinon.spy(),
        }


        new Requests().play('rock', 'paper', spyObserver)


        Sinon.assert.calledOnce(spyObserver.p2Wins)
    })

    it('paper vs paper', () => {
        const spyObserver = {
            tie: Sinon.spy(),
        }


        new Requests().play('paper', 'paper', spyObserver)


        Sinon.assert.calledOnce(spyObserver.tie)
    })

    it('rock vs rock', () => {
        const spyObserver = {
            tie: Sinon.spy(),
        }


        new Requests().play('rock', 'rock', spyObserver)


        Sinon.assert.calledOnce(spyObserver.tie)
    })

    it('scissors vs scissors', () => {
        const spyObserver = {
            tie: Sinon.spy(),
        }


        new Requests().play('scissors', 'scissors', spyObserver)


        Sinon.assert.calledOnce(spyObserver.tie)
    })

    it('rock vs invalid', () => {
        const spyObserver = {
            invalid: Sinon.spy(),
        }


        new Requests().play('rock', 'daruma', spyObserver)


        Sinon.assert.calledOnce(spyObserver.invalid)
    })

    it('invalid vs paper', () => {
        const spyObserver = {
            invalid: Sinon.spy(),
        }


        new Requests().play('daruma', 'paper', spyObserver)


        Sinon.assert.calledOnce(spyObserver.invalid)
    })

    it('invalid vs invalid', () => {
        const spyObserver = {
            invalid: Sinon.spy(),
        }


        new Requests().play('daruma', 'daruma', spyObserver)


        Sinon.assert.calledOnce(spyObserver.invalid)
    })
})