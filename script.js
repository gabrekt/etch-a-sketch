const container = document.getElementById('gridContainer');
const colorPicker = document.getElementById('colorPicker');
const randomBtn = document.getElementById('randomColorBtn');
const eraserBtn = document.getElementById('eraserBtn');
const resetBtn = document.getElementById('resetBtn');
const resizeBtn = document.getElementById('resizeBtn');

let currentMode = 'color'; // 'color', 'random', 'erase'
let currentColor = colorPicker.value;

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  return '#' + Array.from({ length: 6 }, () =>
    letters[Math.floor(Math.random() * 16)]
  ).join('');
}

function colorSquare(square) {
  if (currentMode === 'color') {
    square.style.backgroundColor = currentColor;
  } else if (currentMode === 'random') {
    square.style.backgroundColor = getRandomColor();
  } else if (currentMode === 'erase') {
    square.style.backgroundColor = '';
  }
}

function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', () => colorSquare(square));
    container.appendChild(square);
  }
}

// Event Listeners
colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
  currentMode = 'color';
});

randomBtn.addEventListener('click', () => currentMode = 'random');
eraserBtn.addEventListener('click', () => currentMode = 'erase');

resetBtn.addEventListener('click', () => {
  const squares = container.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = '');
});

resizeBtn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createGrid(newSize);
});

// Load initial grid
createGrid(16);
