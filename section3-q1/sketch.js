// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(128);
  balloon("プログラミング演習");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 9;
  fill(0);
  rect(150 ,150,w * 2,3 * h);
  fill(255);
  text(t, 175, 150 + 1.5 * h + h);

  fill()
}
