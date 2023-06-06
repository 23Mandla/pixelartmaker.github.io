"use strict";

let width = document.getElementById("inputWidth");
let height = document.getElementById("inputHeight");
let size = document.getElementById("size");
let canvas = document.getElementById("pixelCanvas");

size.addEventListener("click", (evt) => {
  evt.preventDefault();
  makeGrid();
  canvas.firstChild.remove();
  makeGrid();
});

function makeGrid() {
  for (let i = 0; i < height.value; ++i) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < width.value; ++j) {
      let column = row.insertCell(j);
    }
  }
}

canvas.addEventListener("click", (evt) => {
  const color = document.getElementById("colorPicker");
  let background = color.value;
  evt.target.style.backgroundColor = background;
});
