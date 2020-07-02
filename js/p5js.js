var pointCount = 1000;
var pointCount_works = 1000;
var lissajousPoints = [];
var lissajousPoints_works1 = [];
var lissajousPoints_works2 = [];
var lissajousPoints_works3 = [];

var divisors1 = [];
var divisors2 = [];
var divisors3 = [];

var phi = -90;
var freqX = 10;
var freqY = 10;
var modFreqX = 1;
var modFreqY = 2;

var freqX_works = 2;
var freqY_works = 3;
var modFreqX_works = 7;
var modFreqY_works = 8;

var lineWeight = 0.1;
// var lineColor;
// var lineColor_works1;
// var lineColor_works2;
// var lineColor_works3;
var lineAlpha = 100; //透明度の最大値

var connectionRadius = 80; //描写する線分の最大値
var connectionRadius_works = 90;
var connectionRamp = 6;

var i1 = 0;
var w1 = 0;
var f1 = 0;
var t1 = 0;

var s1 = 0;
var s2 = 0;
var s3 = 0;

// works[id]
// 0 'ぼやける境界',
// 1 '気配の振る舞い',
// 2 'オーディオレーシングゲーム',
// 3 '展示空間',
// 4 'graviter',
// 5 '内と外',
// 6 '居の中の蛙',
// 7 'emotional distance',
// 8 'N.U.M',
// 9 '対雨',
// 10 '未選択'

var colorWorks = [
    [200, 150, 100], //0 'ぼやける境界',
    [100, 200, 150], //1 '気配の振る舞い',
    [150, 100, 200], //2 'オーディオレーシングゲーム',
    [100, 100, 200], //3 '展示空間',
    [50, 200, 200], //4 'graviter',
    [200, 50, 200], //5 '内と外',
    [200, 200, 50], //6 '居の中の蛙',
    [200, 50, 50], //7 'emotional distance',
    [50, 200, 50], //8 'N.U.M',
    [50, 50, 200], //9 '対雨',
    [0, 0, 0] //10 '黒線'
];


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

  drawWorks_triger();

  if(s1 == 1){
      calculateLissajousPoints_works1();
      drawLissajous_works1();
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
  // background(255); //白背景で前回の描画図形を消す
  background(0, 0, 0, 0); //重ねるために透明にする
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var i2 = 0; i2 < i1; i2++) {
    var d = lissajousPoints[i1].dist(lissajousPoints[i2]);
    var a = pow(1 / (d / connectionRadius + 1), 6); //1/(d/connectionRadius+1)の6乗
    if (d <= connectionRadius) {
      stroke(...colorWorks[10], a * lineAlpha); //透明度が0〜lineAlphaの値に振られる
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


function calculateLissajousPoints_works1() {
  for (var i = 0; i <= pointCount_works; i++) {
    var angle = map(i, 0, pointCount_works, 0, TAU);
    var x = sin(angle * (freqX_works + divisors1[0] + divisors1[1]) + radians(phi)) * cos(angle * (modFreqX_works + divisors1[2] + divisors1[3]));
    var y = sin(angle * (freqY_works + divisors1[4] + divisors1[5])) * cos(angle * (modFreqY_works + divisors1[6] + divisors1[7]));
    x *= width / 2 - 40;
    y *= height / 2 - 40;
    lissajousPoints_works1[i] = createVector(x, y);
  }
}

function drawLissajous_works1() {
  background(0, 0, 0, 0); //重ねるために透明にする
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);
  for (var w2 = 0; w2 < w1; w2++) {
    var d = lissajousPoints_works1[w1].dist(lissajousPoints_works1[w2]);
    var a = pow(1 / (d / connectionRadius_works + 1), 6);
    if (d <= connectionRadius_works) {
      stroke(...colorWorks[picked_works[0]], a * lineAlpha); //透明度が0〜lineAlphaの値に振られる
      line(
        lissajousPoints_works1[w1].x,
        lissajousPoints_works1[w1].y,
        lissajousPoints_works1[w2].x,
        lissajousPoints_works1[w2].y
      );
    }
  }
  pop();
}

function calculateLissajousPoints_works2() {
  for (var i = 0; i <= pointCount_works; i++) {
    var angle = map(i, 0, pointCount_works, 0, TAU);
    var x = sin(angle * (freqX_works + divisors2[0] + divisors2[1]) + radians(phi)) * cos(angle * (modFreqX_works + divisors2[2] + divisors2[3]));
    var y = sin(angle * (freqY_works + divisors2[4] + divisors2[5])) * cos(angle * (modFreqY_works + divisors2[6] + divisors2[7]));
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
      stroke(...colorWorks[picked_works[1]], a * lineAlpha); //透明度が0〜lineAlphaの値に振られる
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
    var x = sin(angle * (freqX_works + divisors3[0] + divisors3[1]) + radians(phi)) * cos(angle * (modFreqX_works + divisors3[2] + divisors3[3]));
    var y = sin(angle * (freqY_works + divisors3[4] + divisors3[5])) * cos(angle * (modFreqY_works + divisors3[6] + divisors3[7]));
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
      stroke(...colorWorks[picked_works[2]], a * lineAlpha); //透明度が0〜lineAlphaの値に振られる
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

function drawWorks_triger() {
  if (count_items == 6) {
    // background(255); //白背景で前回の描画図形を消す
    impressions_count_1();
    impressions_count_2();
    impressions_count_3();

    s1 = 1;
    s2 = 1;
    s3 = 1;
  }
}


//感情ボタン反映
//素因数分解

function impressions_count_1() {
    var value1 = works_impression[0];
    var exponent1 = 0;
    for(var number1 = 2; number1 <= value1; number1++) {
        if(value1 % number1 === 0) {
          exponent1 = 0; //前の約数の分のカウントをリセットする
          while(value1 % number1 === 0) {
            //valueをnumberで除算していき、ループごとにカウントを一つ増やして累乗の指数を求める
            exponent1++;
            value1 /= number1;
          }
          divisors1.push(exponent1);
        }
        if(value1 % number1 > 0) {
          exponent1 = 0; //前の約数の分のカウントをリセットする
          divisors1.push(exponent1);
        }
        //この流れを(value / number === 1)になるまで繰り返す
    }
}

function impressions_count_2() {
    var value2 = works_impression[1];
    var exponent2 = 0;
    for(var number2 = 2; number2 <= value2; number2++) {
        if(value2 % number2 === 0) {
          exponent2 = 0; //前の約数の分のカウントをリセットする
          while(value2 % number2 === 0) {
            //valueをnumberで除算していき、ループごとにカウントを一つ増やして累乗の指数を求める
            exponent2++;
            value2 /= number2;
          }
          divisors2.push(exponent2);
        }
        if(value2 % number2 > 0) {
          exponent2 = 0; //前の約数の分のカウントをリセットする
          divisors2.push(exponent2);
        }
        //この流れを(value / number === 1)になるまで繰り返す
    }
}

function impressions_count_3() {
    var value3 = works_impression[2];
    var exponent3 = 0;
    for(var number3 = 2; number3 <= value3; number3++) {
        if(value3 % number3 === 0) {
          exponent3 = 0; //前の約数の分のカウントをリセットする
          while(value3 % number3 === 0) {
            //valueをnumberで除算していき、ループごとにカウントを一つ増やして累乗の指数を求める
            exponent3++;
            value3 /= number3;
          }
          divisors3.push(exponent3);
        }
        if(value3 % number3 > 0) {
          exponent3 = 0; //前の約数の分のカウントをリセットする
          divisors3.push(exponent3);
        }
        //この流れを(value / number === 1)になるまで繰り返す
    }
}
