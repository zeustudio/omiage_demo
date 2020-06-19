

var NORTH = 0;
var NORTHEAST = 1;
var EAST = 2;
var SOUTHEAST = 3;
var SOUTH = 4;
var SOUTHWEST = 5;
var WEST = 6;
var NORTHWEST = 7;
var direction;

var stepSize = 1;
var diameter = 1;

var posX;
var posY;

var poX=20;
var poY=20;

var n = 0;

var canvas;

var w = 400, h = 400;
var button;
var u = w / 2, v = h / 2;
let pg;
function setup() {
  canvas = createCanvas(w, h);
  canvas.parent('main');
  centerCanvas()
  button = createButton('clear');
  button.position(10, h + 10);
  button.mousePressed(clearAction);
  strokeWeight(0.75);
  posX = width / 2;
  posY = height / 2;
  background(0);
  pg = createGraphics(w, h);
  frameRate(30);
}

function centerCanvas() {
  var x = (windowWidth/2 - w) / 2;
  var y = (windowHeight - h) / 2;
  canvas.position(x, y);
}

function draw() {
  ellipse(0, 0, 20);
  fill(0);
  
  if (n % 5 == 0) {
    c = color(random(0,255),random(0,255),random(0,255))
    stroke(c);
    ++n;
  }
  /*
  if(mouseIsPressed){
    for(i = 0;i < TWO_PI; i += TWO_PI / 24){
      var px = pmouseX * cos(i) - pmouseY * sin(i) - u * cos(i) + v * sin(i) + u;
      var py = pmouseX * sin(i) + pmouseY * cos(i) - u * sin(i) - v * cos(i) + v;
      var x = mouseX * cos(i) - mouseY * sin(i) - u * cos(i) + v * sin(i) + u;
      var y = mouseX * sin(i) + mouseY * cos(i) - u * sin(i) - v * cos(i) + v;
      line(px, py, x, y);
    }
  }
  */
  translate(u,v)
  var poiX = poX;
  var poiY = poY;
  poX = poiX + random(0, 10);
  poY = poiY + random(0, 10);

  for (i = 0; i < TWO_PI; i += TWO_PI / 24) {
    var px = poiX * cos(i) - poiY * sin(i) ;
    var py = poiX * sin(i) + poiY * cos(i);
    var x = poX * cos(i) - poY * sin(i) ;
    var y = poX * sin(i) + poY * cos(i);
    line(px, py, x, y);
  }
  if (sqrt(sq(poX)+sq(poY)) > 150) {
    poX = 20;
    poY = 20;
    n += 1;
  }
}

  

function clearAction(){
  background(0);
}



function windowResized() {
}