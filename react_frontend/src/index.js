import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import { observe } from './Game'
import 'semantic-ui-css/semantic.min.css'

observe(board => 
  ReactDOM.render(<Board board={board} />, document.getElementById('root')))