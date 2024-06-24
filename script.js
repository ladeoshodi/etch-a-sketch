grid = document.querySelector(".grid");

// create 256 square divs (16*16)
for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", `square square-${i}`);
    // add an event listener to change the div background on mouse hover
    square.addEventListener("mouseover", () => {
        square.classList.add("draw");
    });
    grid.appendChild(square);
}

