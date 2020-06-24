//const { random } = require("./anime.min");

document.getElementById("second").style.display = "none";
document.getElementById("works_1").style.display = "none";
document.getElementById("works_2").style.display = "none";
document.getElementById("works_3").style.display = "none";
document.getElementById("comment").style.display = "none";
document.getElementById("final").style.display = "none";
document.getElementById("to_first").style.display ="none";

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

var poX=0;
var poY=0;

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
  background(255);
  pg = createGraphics(w, h);
  frameRate(30);
}

function centerCanvas() {
  var x = (windowWidth/2 - w) / 2;
  var y = (windowHeight - h) / 2;
  canvas.position(x, y);
}

function draw() {
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

  ellipse(0, 0, 35);
  fill(0);
  
  if (sqrt(sq(poX)+sq(poY)) > 150) {
    poX = 0;
    poY = 0;
    n += 1;
  }
}

var items = ['first', 'second', 'works_1', 'works_2', 'works_3', 'comment', 'final'];
var works = ['ぼやける境界', '気配の振る舞い', 'オーディオレーシングゲーム', '展示空間','graviter','内と外','居の中の蛙','感情の写像','emotional distance','N.U.M','対雨'];
var picked_works = [0,0,0];

var count_items = 0;

var len = 0;
function viewStrLen() {
     len = document.getElementById("area1").value.length;
     document.getElementById("comments_num").innerText = len + "文字";

     //c = Math.random() * 50;
     //m = (Math.random()+0.5) * 30;
     //d = Math.random() * 50;
     //background(0);
     //t = 0;
     //loop();
}

function counting_4() {
  document.getElementById(items[count_items]).style.display ="none";
  count_items ++;


  if (count_items > 6) {
    count_items = 0;
    console.log("if")
  }

  document.getElementById(items[count_items]).style.display = "block";
  if (count_items == 6) {
    document.getElementById("to_next").style.display = "none";
    document.getElementById("to_first").style.display = "block";
  }
  if (count_items == 0) {
    document.getElementById("to_next").style.display = "block";
    document.getElementById("to_first").style.display = "none";
  }
  document.getElementById("h2_works_1").innerText = works[picked_works[0]] + "文字";
  document.getElementById("h2_works_2").innerText = works[picked_works[0]] + "文字";
  document.getElementById("h2_works_3").innerText = works[picked_works[0]] + "文字";


  console.log(count_items)
}

function counting_810() {
  picked_works.push(0);
  console.log( works[picked_works[0]] );
}

  

function clearAction(){
  background(0);
}

function windowResized() {
  centerCanvas()
}
