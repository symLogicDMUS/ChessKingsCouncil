import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import { observe, waitData } from './Game'
import 'semantic-ui-css/semantic.min.css'

waitData().then( ([data]) => {
  observe((board, turn) => 
    ReactDOM.render(<Board board={board} turn={turn} />, document.getElementById('root')))
})