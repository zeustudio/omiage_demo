var len = 0;

function viewStrLen() {
    len = document.getElementById("area1").value.length;
    document.getElementById("comments_num").innerText = len + "文字";

    //c = Math.random() * 50;
    //m = (Math.random()+0.5) * 30;
    //d = Math.random() * 50;
    background(0);
    t = 0;
    loop();
}

var cnv;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}


function setup() {//最初に1回だけ実行
    cnv = createCanvas(500, 500);
    //canvas.parent('sketch-holder');
    centerCanvas();
    background(0); 
  }

var count_1 = 0;
function counting_1() {
    count_1++;
    document.getElementById("count_1").innerHTML = count_1;
    background(0);
}
var count_2=0;
function counting_2() {
    count_2++;
    document.getElementById("count_2").innerHTML = count_2;
    background(0);
}
var count_3 = 0;
function counting_3() {
    count_3++;
    document.getElementById("count_3").innerHTML = count_3;
    background(0);
}
//noprotect
//スピログラフ（内トロコイド）のパラメータ
//定円半径 c、動円半径 m、描画点半径 d、m,d 共に負なら外トロコイド
var c=37, m=28, d=18; 

var t=0;
var input_message = "";
let ls = [c, m, d, rgb_r, rgb_g, rgb_b, len];

function draw() {
    // これまでの軌跡を表示
    
    if (ls.length!==0){
    for (let i in ls) {
        var c = ls[i][1];
        var m = ls[i][2];
        var d = ls[i][3];
        var rgb_r = ls[i][4];
        var rgb_g = ls[i][5];
        var rgb_b = ls[i][6];
        var len = ls[i][7];

        strokeWeight(5); stroke(rgb_r, rgb_g, rgb_b);
        var maxt = 5000
        var w2 = width / 2, h2 = height / 2;
        var r = abs(c - m) + abs(d);
        var cyc = 360 * abs(m);//画像の外接半径と周回数
    
        for (var i = 0; t >= cyc * Math.log(len + 1) / Math.log(15) + 1000; t += cyc / maxt)
            point(w2 * (1 + (c - m) * cos(radians(t)) / r + d * cos((c - m) / m * radians(t)) / r),
                h2 * (1 - (c - m) * sin(radians(t)) / r + d * sin((c - m) / m * radians(t)) / r));
        }
    }
    
    //点や線の太さと色
    var count_sum = count_1 + count_2 + count_3;
    var rgb_r = count_1 / count_sum * 256;
    var rgb_g = count_2 / count_sum * 256;
    var rgb_b = count_3 / count_sum * 256;
    strokeWeight(5); stroke(rgb_r, rgb_g, rgb_b);
    console.log(len);
    //描画準備
    var maxt=5000, speed=40*(len+1);//点の数と描画速度
    var w2=width/2, h2=height/2;
    var r = abs(c - m) + abs(d);
    var cyc = 360 * abs(m);//画像の外接半径と周回数
    //描画 radians()は度→ラジアン変換
    if (len == 0) { 
        background(0);
        speed = 10;
        strokeWeight(25);
        for (var i = 0; i < speed; i++, t += cyc / maxt)
            point(w2 * (1 + (c - m) * cos(radians(t)) / r + d * cos((c - m) / m * radians(t)) / r),
                h2 * (1 - (c - m) * sin(radians(t)) / r + d * sin((c - m) / m * radians(t)) / r));
    } else {
        for (var i = 0; i < speed; i++, t += cyc / maxt)
            point(w2 * (1 + (c - m) * cos(radians(t)) / r + d * cos((c - m) / m * radians(t)) / r),
                h2 * (1 - (c - m) * sin(radians(t)) / r + d * sin((c - m) / m * radians(t)) / r));
        if (t >= cyc * Math.log(len + 1) / Math.log(15)+1000) noLoop();
    }    
}

function reset() {
    background(0);
}

function windowResized() {
    centerCanvas();
  }

function save() {
    save(test.png);
}