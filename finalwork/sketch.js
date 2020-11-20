//五目並べゲーム
function setup(){
  createCanvas(400,400);
  background(0);
  fill(255,255,255);
  textSize(30);
  text("五目並べゲーム",100,190);
  fill(255,255,255);
  textSize(18);
  text("〜『a』ボタンを押してスタート〜",62,220);
}

let x , y ,w, z
function keyPressed(){
  if(key == "a"){reset(); }
}

function reset(){
  createCanvas(700,700);
  background(184,134,11);
  strokeWeight(1);
  size = 40;
  for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j ++){
    　line( (size * i) + 20 , 20,  (size * i) + 20  , 620);
      line(20,(size * i)+ 20,  620, (size * i)+ 20);

    if (i == 3 && j == 3 ||  i == 3 && j == 12 || i == 12 && j == 3 || i == 12 && j == 12){
      fill(0);
      ellipse((i * size) + 20 , (j * size) + 20, 7);

  textSize(12);
  text("ルール設定",20,640);
  text("・マウスをクリックすると黒石を置く",20,660);
  text("・マウスをダブルクリックすると白石を置く",20,680);
      }
    }
  }
}


function draw(){
  fill(0);
  ellipse(x,y,35);
  fill(255,255,255);
  ellipse(w ,z ,35);
 }

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function doubleClicked(){
  w = mouseX;
  z = mouseY;
}
