import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { observe } from './services/Game'

const root = document.getElementById('root')

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
)
/*
ReactDOM.render(
  <Board knightPosition={[7, 0]} />, 
  document.getElementById('root')
)
*/