var second_text = '<p id="comments"> 気になった作品を3つ選択してください</p> <div id=img_works>';
var works_1_text = '<p id="h2_works_1">あなたはこの作品にどのような感情を持ちましたか？</p>';
var works_2_text = '<p id="h2_works_2">あなたはこの作品にどのような感情を持ちましたか？</p>';
var works_3_text = '<p id="h2_works_3">あなたはこの作品にどのような感情を持ちましたか？</p>';
var comment_text = '<div id=comments_box><p id="comments">選んだ作品や展示について<br>コメントがあればお書きください</p><textarea name="comment" id="area1" onkeyup="viewStrLen();"></textarea ></div>';

var items = ['first', 'second', 'works_1', 'works_2', 'works_3', 'comment', 'final'];
//遷移する画面のリストです
var works = ['ぼやける境界', '気配の振る舞い', 'オーディオレーシングゲーム', '展示空間', 'graviter', '内と外', '居の中の蛙', 'emotional distance', 'N.U.M', '対雨', '未選択'];
//作品のリストです
var works_desc = ['ディスプレイを紙で覆うことで境界を曖昧にする映像作品。',
  '気配とは何か．この場でのあなたの気配はどうふるまうだろうか．',
  '音だけで疾走するレースゲーム！キミはそこにどんな世界を視る？',
  'あなたがつけている色眼鏡は何色だろうか，あなたの不自由は何色だろうか．',
  '重力からの解放は自由か不自由か。',
  '内に出る、外に入る、内は外で、外は内。\nあるいは…',
  'これは井戸の生配信である。限られた素材を使う蛙の表現とはー',
  '感情の色をまとったアバターとなってバーチャル空間で交流しよう',
  '数・數・number・número・संख्या・رقم・Число・সংখ্যা・数字・nummer・nomer・숫자・ਗਿਣਤੀ・సంఖ్య・nombre・संख्या・எண்・numero…',
  'ディスプレイを水面に見立て、雨の移ろいを表現した映像作品'];
var impressions = ["楽しい", "嬉しい", "視点が変わった", "愉快だった", "11月にまたみたい", "もう一息", "提案がある", "発見があった"]
//リストに表示される感情のリストです
var impressions_p = [1, 1, 0.5, 0.7, 0.2, 0.2, 0, 0.9];
//それぞれの感情に合わせた興奮度を[0,1]の数値にしたリストです
var picked_works = [];

window.onload = function () {

  for (let step = 0; step < works.length-1; step++){
    second_text = second_text
      + '<img src="img_works/'
      + step
      + '.png" id='
      + step
      + ' onclick="counting();">';
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
//htmlのそれぞれの要素の非表示を規定しています．


var count_items = 0;

var len = 0;
function viewStrLen() {
     len = document.getElementById("area1").value.length;
     document.getElementById("comments_num").innerText = len + "文字";
}
//文字数カウントをしています

function counting(e) {
  var e = e || window.event;
  var elem = e.target || e.srcElement;
  var elemId = elem.id;
  picked_works.push(elemId);
  console.log(picked_works)
  if (picked_works.length == 3) {
    to_next()
    document.getElementById("to_next").style.display = "block";
  }
}
//リスト"picked_works"に選んだ作品を順番に入れています

function impressed(e) {
  var e = e || window.event;
  var elem = e.target || e.srcElement;
  var elemId = elem.id;
  var current_works_impression = impressions_p[elemId];
  var current_works = picked_works[count_items - 2];
}
// 感情がクリックされたときに走るfunctionです．
//"current_works"には，現在感情を選んでいる作品の番号が入ります．番号と作品の対応は上部のリストを確認してください．
//"current_works_impression"に感情価が入ります（本当は足さなきゃいけません）

function to_next() {
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

 
 
  if (count_items == 0) {
    document.getElementById("to_next").style.display = "block";
    document.getElementById("to_first").style.display = "none";
    to_fitst()
  }
  if (count_items == 1) {
    document.getElementById("to_next").style.display = "none";
  }
  if (count_items == 2) {
   
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
  }

  if (count_items == 6) {
    document.getElementById("to_next").style.display = "none";
    document.getElementById("to_first").style.display = "block";
  }
}

function to_fitst(){
  picked_works = [];
  comment_text = '<div id=comments_box><p id="comments">選んだ作品や展示について<br>コメントがあればお書きください</p><textarea name="comment" id="area1" onkeyup="viewStrLen();"></textarea ></div>';

}
