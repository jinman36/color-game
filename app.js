"use strict"
// total squares possible
var numSquares = 12;
// generate random colors
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
// generate color code for choosing
var rgbCode = document.getElementById("rgbCode");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
// button variables
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var extraHardButton = document.querySelector("#extraHardButton");


// Easy Button
easyButton.addEventListener("click", function() {
  hardButton.classList.remove("selected");
  extraHardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
});

// hard Button
hardButton.addEventListener("click", function() {
  easyButton.classList.remove("selected");
  extraHardButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "block";
    }
  }
});

// Harder Button
extraHardButton.addEventListener("click", function() {
  easyButton.classList.remove("selected");
  hardButton.classList.remove("selected");
  extraHardButton.classList.add("selected");
  numSquares = 12;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
    square[i].style.display = "block";
  }
});

// Reset button
resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  this.textContent = "New Color";
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
})

// color chooser
rgbCode.textContent = pickedColor;

// determining correct answer by click
for (var i = 0; i < square.length; i++) {
  square[i].style.background = colors[i];
  square[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      alert("Good Job!");
      clearTimeout(myVar)
      resetButton.textContent = "Play again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#000000";
      // alert("Try Again");
    }
  })
}

function changeColors(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function myFunction() {
    alert('Try again');
  }
  // myFunction();
console.log(easyButton);