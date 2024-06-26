const grid = document.querySelector(".grid");
let gridWidth = window.innerWidth;
grid.style.width = `${gridWidth}px`;

const createButton = document.querySelector(".create-button");

const clearButton = document.querySelector(".clear-button");

function isValidGridSize(size) {
    // check the user input is between 1 and 100 (exclusive)
    if (size < 1 || size > 100) {
        alert("Please enter a value between 1 and 100");
        return false;
    }

    return true;
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function createGrid(size) {
    // create a new grid
    const gridSize = size * size;
    for (let i = 1; i <= gridSize; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", `square square-${i}`);
        
        // set the width of the grid
        square.style.width = `${gridWidth / size}px`;

        // add an event listener to change the div background on mouse hover
        square.addEventListener("mouseover", () => {
            square.classList.add("draw");
        });
        grid.appendChild(square);
    }
}

createButton.addEventListener("click", () => {
    // clear existing grid
    clearGrid();

    // get the size of the new grid to be created
    let userInput = prompt("Enter size of new grid between 1 - 100");

    if (isValidGridSize(userInput)) {
        createGrid(userInput);
    }
});

clearButton.addEventListener("click", () => {
    // clear existing grid
    clearGrid();
});
