import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import RPSApp from '../src/RPSApp'
import * as Sinon from 'sinon'

describe('play form', () => {
    let domFixture

    beforeEach(() => {
        setupDom()
    })

    afterEach(() => {
        teardownDom()
    })

    describe('when the play use case tells the UI that the input is invalid', () => {
        beforeEach(() => {
            const alwaysInvalidRequests = {
                playRPS: (p1Choice, p2Choice, observer) => observer.invalid(),
            }
            renderApp(alwaysInvalidRequests)
        })

        it('by default does not display the game result', () => {
            expect(page()).not.toContain('INVALID!')
        })

        it('tells the user that their input is invalid', () => {
            submitForm()


            expect(page()).toContain('INVALID!')
        })
    })

    describe('when the play use case tells the UI that result is a tie', () => {
        beforeEach(() => {
            const alwaysTieRequests = {
                playRPS: (p1Choice, p2Choice, observer) => observer.tie(),
            }
            renderApp(alwaysTieRequests)
        })

        it('by default does not display the game result', () => {
            expect(page()).not.toContain('TIE!')
        })

        it('tells the user that the result is a tie', () => {
            submitForm()


            expect(page()).toContain('TIE!')
        })
    })

    describe('when the play use case tells the UI that result is p1wins', () => {
        beforeEach(() => {
            const alwaysP1WinRequests = {
                playRPS: (p1Choice, p2Choice, observer) => observer.p1Win(),
            }
            renderApp(alwaysP1WinRequests)
        })

        it('by default does not display the game result', () => {
            expect(page()).not.toContain('P1 WINS!')
        })

        it('tells the user that the result is p1wins', () => {
            submitForm()


            expect(page()).toContain('P1 WINS!')
        })
    })

    describe('when the play use case tells the UI that result is p2wins', () => {
        beforeEach(() => {
            const alwaysP2WinRequests = {
                playRPS: (p1Choice, p2Choice, observer) => observer.p2Win(),
            }
            renderApp(alwaysP2WinRequests)
        })

        it('by default does not display the game result', () => {
            expect(page()).not.toContain('P2 WINS!')
        })

        it('tells the user that the result is p1wins', () => {
            submitForm()


            expect(page()).toContain('P2 WINS!')
        })
    })

    describe("submitting a game", () => {
        it('sends the users inputs to the play request', () => {
            const playSpy = Sinon.spy()
            renderApp({
                playRPS: playSpy,
            })

            setInputValue(document.querySelector('input[name=p1Choice]'), 'foo')
            setInputValue(document.querySelector('input[name=p2Choice]'), 'bar')


            submitForm()


            Sinon.assert.calledWith(playSpy, 'foo', 'bar', Sinon.match.any)
        })
    })

    function setInputValue(p1ChoiceInput, value) {
        p1ChoiceInput.value = value
        ReactTestUtils.Simulate.change(p1ChoiceInput)
    }

    function setupDom() {
        domFixture = document.createElement('div')
        document.body.appendChild(domFixture)
    }

    function teardownDom() {
        domFixture.remove()
    }

    function renderApp(requests) {
        ReactDOM.render(
            <RPSApp requests={requests}/>,
            domFixture
        )
    }

    function page() {
        return domFixture.textContent
    }

    function submitForm() {
        domFixture.querySelector('button').click()
    }
})














