import React, { useState } from 'react'
    import { Board } from './Board'

    function App() {
      const [board, setBoard] = useState([
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ])
      const [turn, setTurn] = useState('X')
      const [winner, setWinner] = useState(null)

      function handleCellClick(rowIndex: number, cellIndex: number) {
        if (board[rowIndex][cellIndex] !== ' ') {
          return
        }
        board[rowIndex][cellIndex] = turn
        setBoard(board)
        setTurn(turn === 'X' ? 'O' : 'X')
      }

      function handleRestartGame() {
        setBoard([
          [' ', ' ', ' '],
          [' ', ' ', ' '],
          [' ', ' ', ' ']
        ])
        setTurn('X')
        setWinner(null)
      }

      return (
        <div>
          <h1>Tic Tac Toe Game</h1>
          <Board board={board} />
          {winner && (
            <p className="text-lg font-bold mt-4">
              Winner: {winner}
            </p>
          )}
          <button
            className="bg-gray-200 hover:bg-gray-300 text-lg py-2 px-4 rounded-lg"
            onClick={handleRestartGame}
          >
            Restart Game
          </button>
        </div>
      )
    }

    export default App
