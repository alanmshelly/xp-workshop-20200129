import React from 'react'

export default class RPSApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: '',
            p1Choice: '',
            p2Choice: '',
        }
    }

    invalid() {
        this.setState({result: 'INVALID!'})
    }

    tie() {
        this.setState({result: 'TIE!'})
    }

    p1Win() {
        this.setState({result: 'P1 WINS!'})
    }

    p2Win() {
        this.setState({result: 'P2 WINS!'})
    }

    handlePlayButtonClick() {
        this.props.requests.play(this.state.p1Choice, this.state.p2Choice, this)
    }

    handlePlayerChoiceChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return <div>
            {this.state.result}
            <input name="p1Choice" value={this.state.p1Choice} onChange={this.handlePlayerChoiceChange.bind(this)}/>
            <input name="p2Choice" value={this.state.p2Choice} onChange={this.handlePlayerChoiceChange.bind(this)}/>
            <button onClick={this.handlePlayButtonClick.bind(this)}>PLAY</button>
        </div>
    }
}
