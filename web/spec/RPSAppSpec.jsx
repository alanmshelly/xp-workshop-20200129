import React from 'react'
import ReactDOM from 'react-dom'
import RPSApp from '../src/RPSApp'

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
                play: (p1Choice, p2Choice, observer) => observer.invalid(),
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
