// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle
  if(keyIsDown(" ".charCodeAt(0))){count = (count + 3) % cycle};
  fill(288,0,0);
  ellipse(width / 2, height / 2, count);
   if(count > 90) {count = -(count + 1) % cycle};
  ;
}
