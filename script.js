// script.js
const container = document.getElementById('gridContainer');

function createGrid(size) {
  container.innerHTML = ''; // Clear any existing squares
  const totalSquares = size * size;
  const squareSize = 960 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

// Initial load
createGrid(16);
