grid = document.querySelector(".grid");

// create 256 square divs (16*16)
for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", `square square-${i}`);
    grid.appendChild(square);
}

