import React from 'react'

    function Board({ board }) {
      return (
        <div className="grid grid-cols-3 gap-4">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center items-center">
              {row.map((cell, cellIndex) => (
                <button
                  key={cellIndex}
                  className={`w-12 h-12 bg-gray-200 rounded-lg flex justify-center items-center text-lg ${cell === 'X' ? 'text-red-500' : cell === 'O' ? 'text-blue-500' : ''}`}
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                >
                  {cell}
                </button>
              ))}
            </div>
          ))}
        </div>
      )
    }

    export default Board
