createGrid();

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        clear()
        console.log(e.key);
    } else return;
});

function clear() {
    // function that clears the board and re-input grid size
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
    /* x is number of squares accross. calculate size of boxes based on 19x9 ratio.
    Add all squares as individual <div>'s.
    Grid <div> class containing all newly imported <div>'s set as flex container with wraping so
    they should fit perfectly if sized correctly.*/
    const x = parseFloat(width());
    const y = parseFloat(x/(16/9));
    const numbOfSquares = parseFloat(x * y);
    const sideLength = parseFloat(Math.sqrt((960*540)/numbOfSquares));
    console.log(x,y,numbOfSquares);

    for (let i = 1; i <= numbOfSquares; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add('gridSquare');
        gridSquare.style.width = `${sideLength}px`;
        gridSquare.style.maxHeight = `${sideLength}px`;
        gridSquare.style.backgroundColor = 'blue';
        const container = document.querySelector('.grid');
        container.appendChild(gridSquare);
        console.log( gridSquare.style.width);
    }
}