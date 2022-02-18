createGrid();

let grid = document.querySelector('.grid');
grid.addEventListener('mouseover', changeColor);

document.querySelector('button').addEventListener('click', clear);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        clear()
        console.log(e.key);
    } else return;
});

function clear() {
    let grid = document.getElementsByClassName('gridSquare');
    const gridLength = grid.length;
    for (let i = 0; i < gridLength; i++) {
        const container = document.querySelector('.grid');

        container.removeChild(grid[0]);
    }
    createGrid();
}

function width() {
    let width;

    while (true) {
       width = prompt('How many squares accross would you like? Please pick between 16-96','16');

       if (width >= 16 && width <= 96) {
           break;
       } else if (width === null) {
           width = 16;
           break;
       }
        alert('Invalid. Please enter a number between 16-96.');   
    }
    return width;
}

function createGrid() {
    /* x is number of squares accross. calculate size of boxes based on 16x9 ratio.
    Add all squares as individual <div>'s.
    Grid <div> class containing all newly imported <div>'s set as flex container with wraping.*/
    const x = parseFloat(width());
    const y = parseFloat(x/(16/9));
    const numbOfSquares = parseFloat(x * y);
    const sideLength = parseFloat(Math.sqrt((960*540)/numbOfSquares));
    console.log(x,y,numbOfSquares);

    for (let i = 0; i < numbOfSquares; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('gridSquare');
        gridSquare.classList.add(`${i}`);
        gridSquare.style.width = `${sideLength}px`;
        gridSquare.style.maxHeight = `${sideLength}px`;
        const container = document.querySelector('.grid');
        container.appendChild(gridSquare);
        console.log( gridSquare.style.width);
    }
}

function changeColor(event) {
    let red = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    // event.target refers to the child element in the <div class="grid"> element that is targeted.
    event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;  
}