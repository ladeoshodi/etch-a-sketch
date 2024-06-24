const grid = document.querySelector(".grid");
const GRIDWIDTH = 900;
grid.style.width = `${GRIDWIDTH}px`;

const createButton = document.querySelector(".create-button");

const clearButton = document.querySelector(".clear-button");

function isValidGridSize(size) {
    // check the user input is between 1 and 100 (exclusive)
    if (size < 1 || size > 20) {
        alert("Please enter a value between 1 and 20");
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
        square.style.width = `${GRIDWIDTH / size}px`;

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
    let userInput = prompt("Enter size of new grid between 1 - 20");

    if (isValidGridSize(userInput)) {
        createGrid(userInput);
    }
});

clearButton.addEventListener("click", () => {
    // clear existing grid
    clearGrid();
});
