import React from 'react';

function GridComponent({ cols, rows, onClick }) {
  return (
    <div className={`grid grid-cols-${cols} gap-4`}>
      {Array(rows).fill(0).map((_, rowIndex) => (
        Array(cols).fill(0).map((_, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="bg-gray-200 p-4 h-20">
            <button
              className="w-full h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onClick(rowIndex, colIndex)}
            >
              Click me!
            </button>
          </div>
        ))
      ))}
    </div>
  );
}

export { GridComponent };
