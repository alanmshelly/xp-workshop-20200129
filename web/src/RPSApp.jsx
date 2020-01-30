import React from 'react'

export default class RPSApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: '',
        }
    }

    invalid() {
        this.setState({result: 'INVALID!'})
    }

    tie() {
        this.setState({result: 'TIE!'})
    }

    handlePlayButtonClick() {
        this.props.requests.play(undefined, undefined, this)
    }

    render() {
        return <button onClick={this.handlePlayButtonClick.bind(this)}>
            {this.state.result}
        </button>
    }
}
