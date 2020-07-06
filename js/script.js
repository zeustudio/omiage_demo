
var second_text = '<p id="comments"> 気になった作品を3つ選択してください．</p> <div id=img_works>';
var works_1_text = '<p id="h2_works_1">あなたはこの作品にどのような感情を持ちましたか？</p>';
var works_2_text = '<p id="h2_works_2">あなたはこの作品にどのような感情を持ちましたか？</p>';
var works_3_text = '<p id="h2_works_3">あなたはこの作品にどのような感情を持ちましたか？</p>';
var comment_text = '<div id=comments_box><p id="comments">選んだ作品や展覧会全体について<br>コメントをお書きください．</p><textarea name="comment" id="area1" onkeyup="viewStrLen();"></textarea ></div>';

var items = ['first', 'second', 'works_1', 'works_2', 'works_3', 'comment', 'final'];
//遷移する画面のリストです
var works = ['展示空間', '気配のふるまい', 'Inside-Out,Outside-In,Or', 'emotional distance', '大爆走！オーディオレーシング', 'ぼやける境界', '対雨', 'Graviter', '居の中の蛙', 'NUM. (Ningen Unique Mirror)', '未選択'];
//作品のリストです
var works_desc = ['あなたがつけている色眼鏡は何色だろうか，あなたの不自由は何色だろうか．',
  '気配とは何か．この場でのあなたの気配はどうふるまうだろうか．',
  '内に出る，外に入る，内は外で，外は内．\nあるいは…', 
  '感情の色をまとったアバターとなってバーチャル空間で交流しよう',
  '音だけで疾走するレースゲーム！キミはそこにどんな世界を視る？',
  'ディスプレイを紙で覆うことで境界を曖昧にする映像作品',
  'ディスプレイを水面に見立て，雨の移ろいを表現した映像作品',
  '重力からの解放は自由か不自由か．',
  'これは井戸の生配信である．限られた素材を使う蛙の表現とはー',
  '数・數・number・número・संख्या・رقم・Число・সংখ্যা・数字・nummer・nomer・숫자・ਗਿਣਤੀ・సంఖ్య・nombre・संख्या・எண்・numero…'
];
var impressions = ["楽しい", "嬉しい", "視点が変わった", "愉快だった", "また体験したい", "もう一息", "提案がある", "発見があった"]
//リストに表示される感情のリストです
var impressions_p = [2, 3, 5, 7, 11, 13, 17, 19];
var picked_works = [];
var current_works_impression = 1;
var works_impression_n=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]
var works_impression = [1,1,1];


window.onload = function () {

  for (let step = 0; step < works.length - 1; step++) {
    second_text = second_text
      + '<img src="img_works/'
      + step
      + '.png" id='
      + step
      + ' onclick="counting();this.src=\'works_title/'
      +step
      + '.png\'" onmouseover="this.src=\'works_title/'
      + step
      + '.png\'"'
      + ' onmouseout="this.src=\'img_works/'
      + step
      +'.png\'"> ';
  }
  second_text+'</div>'
  document.getElementById('second').innerHTML = second_text;
  //secondのコードを書いています．

  

}

document.getElementById("second").style.display = "none";
document.getElementById("works_1").style.display = "none";
document.getElementById("works_2").style.display = "none";
document.getElementById("works_3").style.display = "none";
document.getElementById("comment").style.display = "none";
document.getElementById("final").style.display = "none";
document.getElementById("to_first").style.display = "none";
document.getElementById("to_back").style.display = "none";
//htmlのそれぞれの要素の非表示を規定しています．


var count_items = 0; //ページ数

var len = 0;
function viewStrLen() {
     len = document.getElementById("area1").value.length;
}
//文字数カウントをしています

function counting(e) {
  var e = e || window.event;
  var elem = e.target || e.srcElement;
  var elemId = elem.id;
  picked_works.push(elemId);
  //console.log(picked_works)
  window.event.srcElement.onmouseout = "";
  if (picked_works.length == 3) {
    to_next()
    document.getElementById("to_next").style.display = "block";
  }
}
//リスト"picked_works"に選んだ作品を順番に入れています

function hex(num) {
  // 10進数を16進数に変換する
  var hex = String(num.toString(16));
  if (num < 16) hex = "00";
  hex = hex.slice(-2);
  return hex;
}

function impressed(e) {
  var e = e || window.event;
  var elem = e.target || e.srcElement;
  var elemId = elem.id;
  current_works_impression = current_works_impression * impressions_p[elemId];
  var current_works = picked_works[count_items - 2];
  var current_color = colorWorks[current_works];

  works_impression_n[count_items - 2][elemId]++;

  window.event.srcElement.style.border = "1px solid #" + hex(current_color[0]).slice(-2) + hex(current_color[1]).slice(-2) + hex(current_color[2]).slice(-2);
  window.event.srcElement.value = impressions[elemId] + "+"+works_impression_n[count_items - 2][elemId];
  
  

}

// 感情がクリックされたときに走るfunctionです．
//"current_works"には，現在感情を選んでいる作品の番号が入ります．番号と作品の対応は上部のリストを確認してください．
//"current_works_impression"に感情価が入ります（本当は足さなきゃいけません）

function to_next() {
  document.getElementById(items[count_items]).style.display ="none";
  count_items++;
  //console.log(count_items)

  if (count_items > 6) {
    count_items = 0;
  }
  if (count_items > 1 && count_items < 5) {
    if (picked_works[count_items - 2] == 11) {
      count_items = 5;
    }
  }

  document.getElementById(items[count_items]).style.display = "block";

 
 
  if (count_items == 0) {
    document.getElementById("to_next").style.display = "block";
    document.getElementById("to_first").style.display = "none";
    document.getElementById("to_speak").style.display = "block";
    document.getElementById("to_next").textContent="体験する→"
    to_fitst()
    save("mySketch.png");
  } else if (count_items == 1) {
    document.getElementById("to_next").textContent="次に進む→"
    document.getElementById("to_next").style.display = "none";
    document.getElementById("to_speak").style.display = "none";
  }else if (count_items == 2) {
    document.getElementById("to_back").style.display = "block";
  works_1_text = '<div id=works_box><img src="img_works/'
  + picked_works[0]
      + '.png" id=img_works> <div id=works_text><p id=comments>'
      + works[picked_works[0]]
      +'について</p > '
    + '<p id=contents>'
    + works_desc[picked_works[0]]
    + '</p></div></div><div id=sentiment_list>'
    + '<p id=comments>あなたはこの作品に<br>どのような感情を持ちましたか？</p>';
    works_2_text = '<div id=works_box><img src="img_works/'
  + picked_works[1]
      + '.png" id=img_works> <div id=works_text><p id=comments>'
      +works[picked_works[1]]
      + 'について</p > '
    + '<p id=contents>'
    + works_desc[picked_works[1]]
      + '</p></div></div><div id=sentiment_list>'
      + '<p id=comments>あなたはこの作品に<br>どのような感情を持ちましたか？</p>';
    works_3_text = '<div id=works_box><img src="img_works/'
    + picked_works[2]
      + '.png" id=img_works> <div id=works_text> <p id=comments>'
      +works[picked_works[2]]
      +'について</p > '
      + '<p id=contents>'
      + works_desc[picked_works[2]]
      + '</p></div></div><div id=sentiment_list>'
      + '<p id=comments>あなたはこの作品に<br>どのような感情を持ちましたか？</p>';
    
        for (let step = 0; step < impressions.length; step++){
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
        document.getElementById('works_1').innerHTML = works_1_text+'</div>';
        document.getElementById('works_2').innerHTML = works_2_text+'</div>';
        document.getElementById('works_3').innerHTML = works_3_text+'</div>';
        //works_nのコードを書いています．
    
        comment_text = '<div id=comment_works_box><img src="img_works/'
        + picked_works[0]
        + '.png" id=img_works><img src="img_works/'
        + picked_works[1]
        + '.png" id=img_works><img src="img_works/'
        + picked_works[2]
        + '.png" id=img_works></div>'
        + comment_text
      document.getElementById('comment').innerHTML = comment_text;

  } else if (count_items == 3) {
    works_impression[count_items-3]=current_works_impression;
    current_works_impression = 1;
  } else if (count_items == 4) {
    works_impression[count_items-3]=current_works_impression;
    current_works_impression = 1;
  } else if (count_items == 5) {
    works_impression[count_items-3]=current_works_impression;
    current_works_impression = 1;
  } else if (count_items == 6) {
    document.getElementById("to_next").style.display = "none";
    document.getElementById("to_back").style.display = "none";
    document.getElementById("to_first").style.display = "block";
    var user_text = document.getElementById("area1").value;

    const store = new SteinStore(
      "https://api.steinhq.com/v1/storages/5efdf0f283c30d0425e2c5c3"
    );
  
    store
      .append("Sheet1", [
        {
          "impression": user_text,
          "works_1": picked_works[0],
          "works_2": picked_works[1],
          "works_3": picked_works[2],
          "iris_11": works_impression[0],
          "iris_12": works_impression[1],
          "iris_13": works_impression[2],
          "date":Date.now()
        }
      ]);
      //.then(res => {
      //  console.log(res);
      //});
    
    
    console.log("csrf-token", $('meta[name="csrf-token"]').attr('content'))
    $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    $.ajax({
      type: "POST",
      url: "https://extra2020-dev.iiiexhibition.com/souvenirs.json",
      data: JSON.stringify({
          "impression":user_text,
          "works_1":picked_works[0],
          "works_2":picked_works[1],
          "works_3":picked_works[2],
          "iris_11":works_impression[0],
          "iris_12":works_impression[1],
          "iris_13":works_impression[2],
          "iris_14":0,
          "iris_21":0,
          "iris_22":0,
          "iris_23":0,
          "iris_24":0,
          "iris_31":0,
          "iris_32":0,
          "iris_33":0,
          "iris_34":0
      }),
      dataType: "json",
      contentType: "application/json",
      error: function(e) {
          console.log(e);
      }
   })
  }
}

function to_back() {
  document.getElementById(items[count_items]).style.display ="none";
  count_items = count_items - 1;

  document.getElementById(items[count_items]).style.display = "block";

 
 
  if (count_items == 0) {
    document.getElementById("to_next").style.display = "block";
    document.getElementById("to_first").style.display = "none";
    document.getElementById("to_back").style.display = "none";
    document.getElementById("to_speak").style.display = "block";
    document.getElementById("to_next").textContent="体験する→"

  }else if (count_items == 1) {
    document.getElementById("to_next").style.display = "none";
    document.getElementById("to_speak").style.display = "none";
    document.getElementById("to_back").style.display = "none";
    document.getElementById("to_next").textContent="次に進む→"
    to_fitst()
  } else {
    document.getElementById("to_back").style.display = "block";
    document.getElementById("to_next").textContent="次に進む→"
  }
  
  if (count_items == 6) {
    document.getElementById("to_next").style.display = "none";
    document.getElementById("to_first").style.display = "block";
    save("mySketch.png");
  }
}

function to_fitst(){
  picked_works = [];
  comment_text = '<div id=comments_box><p id="comments">選んだ作品や展示について<br>コメントがあればお書きください．</p><textarea name="comment" id="area1" onkeyup="viewStrLen();"></textarea ></div>';
  current_works_impression = 1;
  works_impression = [];
  works_impression_n = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  
  second_text = '<p id="comments"> 気になった作品を3つ選択してください．</p> <div id=img_works>';
  for (let step = 0; step < works.length - 1; step++) {
    second_text = second_text
      + '<img src="img_works/'
      + step
      + '.png" id='
      + step
      + ' onclick="counting();this.src=\'works_title/'
      +step
      + '.png\'" onmouseover="this.src=\'works_title/'
      + step
      + '.png\'"'
      + ' onmouseout="this.src=\'img_works/'
      + step
      +'.png\'"> ';
  }
  second_text+'</div>'
  document.getElementById('second').innerHTML = second_text;
}
