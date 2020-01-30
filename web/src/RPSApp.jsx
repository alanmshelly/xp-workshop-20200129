import React from 'react'

export default class RPSApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
    }

    handlePlayButtonClick() {
        this.setState({
            result: 'INVALID!'
        })
    }

    render() {
        return <button onClick={this.handlePlayButtonClick.bind(this)}>
            {this.state.result}
        </button>
    }
}
