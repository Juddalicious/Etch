const container = document.querySelector('#container');

let gridX = 80;
let gridY = gridX;

gridSize = gridX * gridX;

for (i = 1; i <= gridSize; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell')
    cell.setAttribute('id', `cell${[i]}`)
    container.appendChild(cell);
}

const cell = document.querySelectorAll('.cell');

for (i = 0; i < cell.length; i++) {
    (function (i) {
        cell[i].addEventListener('mouseover', () => cell[i].style.backgroundColor = 'black');
    })(i);
}



const red = document.querySelector('#red');

red.addEventListener('click', () => resetGridRed())

function resetGridRed() {
    for (i = 0; i < cell.length; i++) {
        (function (i) {
            cell[i].addEventListener('mouseover', () => cell[i].style.backgroundColor = 'red');
        })(i);
    }
}

const black = document.querySelector('#black');

black.addEventListener('click', () => resetGridBlack())

function resetGridBlack() {
    for (i = 0; i < cell.length; i++) {
        (function (i) {
            cell[i].addEventListener('mouseover', () => cell[i].style.backgroundColor = 'black');
        })(i);
    }
}


const reset = document.querySelector('#reset');



for (i = 0; i < cell.length; i++) {
    (function (i) {
        reset.addEventListener('click', () => cell[i].style.backgroundColor = 'red');
    })(i);
}

for (i = 0; i < cell.length; i++) {
    (function (i) {
        red.addEventListener('dblclick', () => cell[i].style.backgroundColor = 'red');
    })(i);
}

for (i = 0; i < cell.length; i++) {
    (function (i) {
        black.addEventListener('dblclick', () => cell[i].style.backgroundColor = 'black');
    })(i);
}