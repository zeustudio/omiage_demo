//const { random } = require("./anime.min");


var second_text = '<h2>気になった作品を3つ選択してください</h2>';
var works_1_text='<p id="h2_works_1">この作品について，どのような感想を持ちましたか？</p><p>具体的な感想は，後ほど記入してください．</p>'
var works_2_text='<p id="h2_works_2">この作品について，どのような感想を持ちましたか？</p><p>具体的な感想は，後ほど記入してください．</p>'
var works_3_text='<p id="h2_works_3">この作品について，どのような感想を持ちましたか？</p><p>具体的な感想は，後ほど記入してください．</p>'

  
var items = ['first', 'second', 'works_1', 'works_2', 'works_3', 'comment', 'final'];
var works = ['ぼやける境界', '気配の振る舞い', 'オーディオレーシングゲーム', '展示空間','graviter','内と外','居の中の蛙','感情の写像','emotional distance','N.U.M','対雨','未選択'];
var impressions =["楽しい","嬉しい","視点が変わった","愉快だった","11月にまたみたい","もう一息","提案がある","発見があった"]
var picked_works = [];

window.onload = function () {

  for (let step = 0; step < works.length-1; step++){
    second_text = second_text
      + '<input type="button" value='
      + works[step]
      + ' id='
      + step
      + ' onclick="counting();">';
    console.log(second_text)
  }
  document.getElementById('second').innerHTML = second_text;
  
  for (let step = 0; step < impressions.length-1; step++){
    works_1_text = works_1_text
      + '<input type="button" value='
      + impressions[step]
      + ' id='
      + step
      + ' onclick="impressed();">';
    works_2_text = works_2_text
      + '<input type="button" value='
      + impressions[step]
      + ' id='
      + step
      + ' onclick="impressed();">';
    works_3_text = works_3_text
      + '<input type="button" value='
      + impressions[step]
      + ' id='
      + step
      + ' onclick="impressed();">';
  }
  document.getElementById('works_1').innerHTML = works_1_text;
  document.getElementById('works_2').innerHTML = works_2_text ;
  document.getElementById('works_3').innerHTML = works_3_text;
  console.log(works_3_text)

}

document.getElementById("second").style.display = "none";
document.getElementById("works_1").style.display = "none";
document.getElementById("works_2").style.display = "none";
document.getElementById("works_3").style.display = "none";
document.getElementById("comment").style.display = "none";
document.getElementById("final").style.display = "none";
document.getElementById("to_first").style.display = "none";

//p5js関係のコードはここからです．

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

var w = 100, h = 100;
var button;
var u = w / 2, v = h / 2;
let pg;
function setup() {
  canvas = createCanvas(w, h);
  canvas.parent('p5js');
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
  
  if (sqrt(sq(poX)+sq(poY)) > 40) {
    poX = 0;
    poY = 0;
    n += 1;
  }
}

function clearAction(){
  background(0);
}

function windowResized() {
  centerCanvas()
}


//p5js関係のコードはここまでです．

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

function counting(e) {
  var e = e || window.event;
  var elem = e.target || e.srcElement;
  var elemId = elem.id;
  picked_works.unshift(elemId);
  console.log(picked_works)
  if (picked_works.length == 3) {
    counting_4()
    document.getElementById("to_next").style.display = "block";
  }
}


function counting_4() {
  document.getElementById(items[count_items]).style.display ="none";
  count_items++;
  console.log(count_items)

  if (count_items > 6) {
    count_items = 0;
  }
  if (count_items > 1 && count_items < 5) {
    if (picked_works[count_items - 2] == 11) {
      count_items = 5;
    }
  }

  document.getElementById(items[count_items]).style.display = "block";

  if (count_items == 6) {
    document.getElementById("to_next").style.display = "none";
    document.getElementById("to_first").style.display = "block";
  }
  if (count_items == 1) {
    document.getElementById("to_next").style.display = "none";
  }
  if (count_items == 0) {
    document.getElementById("to_next").style.display = "block";
    document.getElementById("to_first").style.display = "none";
    to_fitst()
  }

  document.getElementById("h2_works_1").innerText = works[picked_works[0]] + "について，どのような感想を持ちましたか？";
  document.getElementById("h2_works_2").innerText = works[picked_works[1]] + "について，どのような感想を持ちましたか？";
  document.getElementById("h2_works_3").innerText = works[picked_works[2]] + "について，どのような感想を持ちましたか？";

  console.log(works[picked_works[0]])
}




function to_fitst(){
  picked_works = [];
}
