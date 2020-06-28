//p5js関係のコードはここからです．

var x = 0.1, y = 0.1;
var x2 = 0.1, y2 = 0.1;
var x3 = 0.1, y3 = 0.1;

// var a = -1.0, b = 0.05, c = 2.275,  d = -0.5;
var a2 =  1.0, b2 = 0.0,  c2 = - 2.25, d2 = 0.2;
var a3 =  1.0, b3 = 0.0,  c3 = - 1.9,  d3 = 0.4;
var a = -1.0, b = 0.1,  c = 1.52,   d = -0.8;
//var a = -1.0, b = 0.1,  c = 1.6,    d = -0.8;
// var a3 =  2.0,  b3 = -0.2, c3 = - 1.75, d3 = 1.;
// var a3 = -2.0, b3 = -0.05, c3 = 2.6, d3 = -0.5;
// var a =  1.0,  b = -0.1, c = - 1.75, d = -1.;


function setup() {
  createCanvas(400, 400);
  blendMode(ADD);
  background(0, 0, 0, 0);
}

function draw() {

    // GIFアニメーションの位置指定
    animationGif_transparent.position(0,0);

  var _x, _y;
  var A;

  var _x2, _y2;
  var A2;

  var _x3, _y3;
  var A3;

  for (var i = 0; i < 100; i++) {

    A = a * (x * x + y * y) + b * x * (x * x - 3 * y * y) + c;
    _x = A * x + d * (x * x - y * y);
    _y = A * y - 2 * d * x * y;
    stroke(124, 155, 255, 50); //color
    point(_x * 100 + width/2, - _y * 100 + height/2);

    x = _x;
    y = _y;

  }

    for (var i2 = 0; i2 < 100; i2++) {

    A2 = a2 * (x2 * x2 + y2 * y2) + b2 * x2 * (x2 * x2 - 3 * y2 * y2) + c2;
    _x2 = A2 * x2 + d2 * (x2 * x2 - y2 * y2);
    _y2 = A2 * y2 - 2 * d2 * x2 * y2;
    stroke(0, 100, 20, 50); //color
    point(_x2 * 100 + width/2, - _y2 * 100 + height/2);

    x2 = _x2;
    y2 = _y2;

  }

    for (var i3 = 0; i3 < 100; i3++) {

    A3 = a3 * (x3 * x3 + y3 * y3) + b3 * x3 * (x3 * x3 - 3 * y3 * y3) + c3;
    _x3 = A3 * x3 + d3 * (x3 * x3 - y3 * y3);
    _y3 = A3 * y3 - 2 * d3 * x3 * y3;
    stroke(200, 10, 80, 50); //color
    point(_x3 * 100 + width/2, - _y3 * 100 + height/2);

    x3 = _x3;
    y3 = _y3;
  }
}


let animationGif_transparent;;

function preload() {
    // GIFアニメーションのp5.jsイメージ
    animationGif_transparent = createImg(src="./img/intro.gif");
}

//p5js関係のコードはここまでです．
