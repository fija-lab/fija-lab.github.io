var W = 800;
var H = 600;
var INTERVAL = 15;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var res = 50;
var grid = [], rows = Math.floor(W / res), cols = Math.floor(H / res);
var fish;
/*
Ok so:
- Grid (just cuz i like grids);
- Fish movement randomly
- Fish food with mouse on click
- Fish food bar
*/

window.onload = function() {

  for(var i; i < rows; i++) {
    for(var j; j < cols; j++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  setInterval(() => {

  }, INTERVAL);

}

function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.show = function(c) {
    this.x = this.i*res;
    this.y = this.j*res;

    c.beginPath();
    c.rect(this.x, this.y, res, res);
    c.stroke();
    c.fillStyle === "#1a7a3f";
    c.fill();

  }
}

function draw() {
  var c = canvas.getContext('2d');
}

function drawCanvas(canvas) {
  var c = canvas.getContext('2d');

  grid.forEach((g) => {
      g.show(c);
  });
}

function update() {

}
