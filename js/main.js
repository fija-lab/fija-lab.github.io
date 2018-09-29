var W = 800;
var H = 600;
var INTERVAL = 15;
var canvas;
var context;
var res = 40;
var grid = [];
var rows = Math.floor(W / res), cols = Math.floor(H / res);
var fish;
var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

/*
Ok so:
- Grid (just cuz i like grids);
- Fish movement randomly
- Fish food with mouse on click
- Fish food bar
*/

window.onload = function() {

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    fish = new Fish();
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
          var cell = new Cell(i, j);
          grid.push(cell);
        }
      }

  setInterval(() => {
    
    update();
    draw(canvas);
  }, INTERVAL);

}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.x = this.i*res;
  this.y = this.j*res;

  this.show = function(c) {

    c.beginPath();
    c.rect(this.x, this.y, res, res);
    c.stroke();
    c.fillStyle = "#255";
    c.fill();

  }
}

function draw(canvas) {
  var c = canvas.getContext('2d');
  drawCanvas(canvas);
  
  fish.draw(c);    
}

function drawCanvas(canvas) {
  var c = canvas.getContext('2d');

  grid.forEach((g) => {
      g.show(c);
  });
}

function update() {

    fish.update();
    fish.move();

}


function dist(ax, ay, bx, by) {
    return Math.floor(Math.sqrt((bx - ax) * (bx - ax) + (by - ay) * (by - ay)));
 }
