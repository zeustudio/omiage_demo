var pointCount = 300;
var lissajousPoints = [];
var lissajousPoints_works = [];
var freqX = 10;
var freqY = 10;
var phi = -90;

var modFreqX = 1;
var modFreqY = 2;

var lineWeight = 0.1;
var lineColor;
var lineAlpha = 100;

var connectionRadius = 80;
var connectionRamp = 6;

var i1 = 0;
var w1 = 0;
var s = 0;

function setup() {
  createCanvas(300, 300);
  colorMode(RGB, 255, 255, 255, 100);
  blendMode(ADD);
  noFill();
};

function draw() {
  calculateLissajousPoints();
  drawLissajous_intro();
  if (i1 < pointCount) {
    i1 += 1;
  }

  if(s == 1){
  calculateLissajousPoints_works();
  drawLissajous_works();
  if (w1 < pointCount) {
    w1 += 1;
    }
  }
}

function calculateLissajousPoints() {
  for (var i = 0; i <= pointCount; i++) {
    var angle = map(i, 0, pointCount, 0, TAU);
    var x = sin(angle * freqX + radians(phi)) * cos(angle * modFreqX);
    var y = sin(angle * freqY) * cos(angle * modFreqY);
    x *= width / 2 - 30;
    y *= height / 2 - 30;
    lissajousPoints[i] = createVector(x, y);
  }
}

function drawLissajous_intro() {
  // p.background(255); //白背景で前回の描画図形を消す
  background(0, 0, 0, 0); //重ねるために透明にする
  lineColor = color(0, 0, 0); //イントロ曲線の色
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var i2 = 0; i2 < i1; i2++) {
    var d = lissajousPoints[i1].dist(lissajousPoints[i2]);
    var a = pow(1 / (d / connectionRadius + 1), 6);
    if (d <= connectionRadius) {
      stroke(lineColor, a * lineAlpha);
      line(
        lissajousPoints[i1].x,
        lissajousPoints[i1].y,
        lissajousPoints[i2].x,
        lissajousPoints[i2].y
      );
    }
  }
  pop();
}


function calculateLissajousPoints_works() {
  for (var i = 0; i <= pointCount; i++) {
    var angle = map(i, 0, pointCount, 0, TAU);
    var x = sin(angle * (freqX + 30) + radians(phi)) * cos(angle * modFreqX);
    var y = sin(angle * freqY) * cos(angle * modFreqY);
    x *= width / 2 - 30;
    y *= height / 2 - 30;
    lissajousPoints_works[i] = createVector(x, y);
  }
}

function drawLissajous_works() {
  background(0, 0, 0, 0); //重ねるために透明にする
  lineColor_works = color(0, 50, 200); //作品の色
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var w2 = 0; w2 < w1; w2++) {
    var d = lissajousPoints_works[w1].dist(lissajousPoints_works[w2]);
    var a = pow(1 / (d / connectionRadius + 1), 6);
    if (d <= connectionRadius) {
      stroke(lineColor_works, a * lineAlpha);
      line(
        lissajousPoints_works[w1].x,
        lissajousPoints_works[w1].y,
        lissajousPoints_works[w2].x,
        lissajousPoints_works[w2].y
      );
    }
  }
  pop();
}

function keyPressed() {
  if (keyCode == ENTER) {
    s += 1
  }
}
