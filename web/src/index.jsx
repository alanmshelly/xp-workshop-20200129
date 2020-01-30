import RPSApp from './RPSApp'
import React from 'react'
import ReactDOM from 'react-dom'
import {Requests} from 'rps/src/Requests'

const requests = new Requests()
ReactDOM.render(
    <RPSApp requests={requests}/>,
    document.querySelector('#app'),
)
