var gridSize = prompt("Select grid size 'small', 'medium' or 'large'");
var canvas = document.getElementById("canvas");


if (gridSize === "small") {
    for (small = 0; small < 64; small++) {
        var smallCell = document.createElement("div")
        smallCell.classList.add("smallCell")
        smallCell.addEventListener("click", fill)
        canvas.appendChild(smallCell);
        canvas.classList.add("canvasSm")
    }
} else if (gridSize === "medium") {
    for (medium = 0; medium < 361; medium++) {
        var mediumCell = document.createElement("div")
        mediumCell.classList.add("mediumCell")
        mediumCell.addEventListener("click", fill)
        canvas.appendChild(mediumCell);
        canvas.classList.add("canvasMd")
    }
} else if (gridSize === "large") {
    for (large = 0; large < 2500; large++) {
        var largeCell = document.createElement("div")
        largeCell.classList.add("largeCell")
        largeCell.addEventListener("click", fill)
        canvas.appendChild(largeCell)
        canvas.classList.add("canvasLg")
    }
};


function pointer() {
    canvas.style.cursor = "pointer";
    palette.style.cursor = "pointer";

};

var palette = document.getElementById("palette");

var colors = ["#3268E8", "#881D36", "#8F3039", "#838795", "#29335C",
    "#553D36", "#808782", "#6A7062", "#87A0B2", "#D5C7BC", "#FB8B24", "#FDE74C", "#F3A712", "#CE8147", "#E4572E",
    "#1C7C54", "#29BF12", "#A2D729", "#19381F", "#A1E44D", "#D3BDB0", "#CB8589", "#D90368", "#414288", "#682D63",
    "#FFFFFF", "#000000", "#272932", "#B4E1FF", "#9D5C63", "#FFACE4", "#D4AFB9"
];

for (var i = 0; i < colors.length; i++) {
    var color = document.createElement("div")
    color.classList.add("colors")
    color.style.backgroundColor = colors[i]
    color.addEventListener("click", chooseColor)
    palette.appendChild(color)
};

canvas.addEventListener("mouseover", pointer);
palette.addEventListener("mouseover", pointer);

function fill() {
    event.target.style.backgroundColor = pen;
};

var pen = color.style.backgroundColor;

function chooseColor() {
    pen = event.target.style.backgroundColor;
};


