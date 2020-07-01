var pointCount = 1000;
var pointCount_works = 1000;
var lissajousPoints = [];
var lissajousPoints_works = [];
var lissajousPoints_works2 = [];
var lissajousPoints_works3 = [];

var freqX = 10;
var freqY = 10;
var phi = -90;

var modFreqX = 1;
var modFreqY = 2;

var lineWeight = 0.1;
var lineColor;
var lineColor_works;
var lineColor_works2;
var lineColor_works3;
var lineAlpha = 100; //透明度の最大値

var connectionRadius = 80; //描写する線分の最大値
var connectionRadius_works = 90;
var connectionRamp = 6;

var i1 = 0;
var w1 = 0;
var f1 = 0;
var t1 = 0;

var s = 0;
var s2 = 0;
var s3 = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 255, 255, 255, 100);
  blendMode(SOFT_LIGHT);
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
      if (w1 < pointCount_works) {
        w1 += 1;
        }
  }

  if(s2 == 1){
      calculateLissajousPoints_works2();
      drawLissajous_works2();
      if (f1 < pointCount_works) {
        f1 += 1;
        }
  }

  if(s3 == 1){
      calculateLissajousPoints_works3();
      drawLissajous_works3();
      if (t1 < pointCount_works) {
        t1 += 1;
        }
  }
}

function calculateLissajousPoints() {
  for (var i = 0; i <= pointCount; i++) {
    var angle = map(i, 0, pointCount, 0, TAU);
    var x = sin(angle * freqX + radians(phi)) * cos(angle * modFreqX);
    var y = sin(angle * freqY) * cos(angle * modFreqY);
    x *= width / 2 - 10;
    y *= height / 2 - 10;
    lissajousPoints[i] = createVector(x, y);
  }
}

function drawLissajous_intro() {
  // p.background(255); //白背景で前回の描画図形を消す
  background(0, 0, 0, 0); //重ねるために透明にする
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var i2 = 0; i2 < i1; i2++) {
    var d = lissajousPoints[i1].dist(lissajousPoints[i2]);
    var a = pow(1 / (d / connectionRadius + 1), 6); //1/(d/connectionRadius+1)の6乗
    if (d <= connectionRadius) {
      stroke(0, 0, 0, a * lineAlpha); //透明度が0〜lineAlphaの値に振られる
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
  for (var i = 0; i <= pointCount_works; i++) {
    var angle = map(i, 0, pointCount_works, 0, TAU);
    var x = sin(angle * (freqX + 30) + radians(phi)) * cos(angle * modFreqX);
    var y = sin(angle * freqY) * cos(angle * modFreqY);
    x *= width / 2 - 40;
    y *= height / 2 - 40;
    lissajousPoints_works[i] = createVector(x, y);
  }
}

function drawLissajous_works() {
  background(0, 0, 0, 0); //重ねるために透明にする
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var w2 = 0; w2 < w1; w2++) {
    var d = lissajousPoints_works[w1].dist(lissajousPoints_works[w2]);
    var a = pow(1 / (d / connectionRadius_works + 1), 6);
    if (d <= connectionRadius_works) {
      stroke(0, 50, 200, a * lineAlpha); //作品の色
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

function calculateLissajousPoints_works2() {
  for (var i = 0; i <= pointCount_works; i++) {
    var angle = map(i, 0, pointCount_works, 0, TAU);
    var x = sin(angle * (freqX + 2) + radians(phi)) * cos(angle * modFreqX);
    var y = sin(angle * freqY) * cos(angle * modFreqY);
    x *= width / 2 - 40;
    y *= height / 2 - 40;
    lissajousPoints_works2[i] = createVector(x, y);
  }
}

function drawLissajous_works2() {
  background(0, 0, 0, 0); //重ねるために透明にする
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var f2 = 0; f2 < f1; f2++) {
    var d = lissajousPoints_works2[f1].dist(lissajousPoints_works2[f2]);
    var a = pow(1 / (d / connectionRadius_works + 1), 6);
    if (d <= connectionRadius_works) {
      stroke(200, 50, 30, a * lineAlpha); //作品の色
      line(
        lissajousPoints_works2[f1].x,
        lissajousPoints_works2[f1].y,
        lissajousPoints_works2[f2].x,
        lissajousPoints_works2[f2].y
      );
    }
  }
  pop();
}

function calculateLissajousPoints_works3() {
  for (var i = 0; i <= pointCount_works; i++) {
    var angle = map(i, 0, pointCount_works, 0, TAU);
    var x = sin(angle * (freqX + 4) + radians(phi)) * cos(angle * modFreqX);
    var y = sin(angle * freqY) * cos(angle * modFreqY);
    x *= width / 2 - 40;
    y *= height / 2 - 40;
    lissajousPoints_works3[i] = createVector(x, y);
  }
}

function drawLissajous_works3() {
  background(0, 0, 0, 0); //重ねるために透明にする
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var t2 = 0; t2 < t1; t2++) {
    var d = lissajousPoints_works3[t1].dist(lissajousPoints_works3[t2]);
    var a = pow(1 / (d / connectionRadius_works + 1), 6);
    if (d <= connectionRadius_works) {
      stroke(200, 200, 30, a * lineAlpha); //作品の色
      line(
        lissajousPoints_works3[t1].x,
        lissajousPoints_works3[t1].y,
        lissajousPoints_works3[t2].x,
        lissajousPoints_works3[t2].y
      );
    }
  }
  pop();
}

function keyPressed() {
  if (keyCode == ENTER) {
    s += 1
  }

  if (keyCode == RIGHT_ARROW) {
    s2 += 1
  }

  if (keyCode == LEFT_ARROW) {
    s3 += 1
  }
}
