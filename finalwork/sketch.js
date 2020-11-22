//オセロゲーム
let size;
let x,y,w,z;
let Clicked1W,Clicked1B,Clicked2W,Clicked2B,Clicked3W,Clicked3B,Clicked4W,Clicked4B,Clicked5W,Clicked5B,Clicked6W,Clicked6B,Clicked7W,Clicked7B,Clicked8W,Clicked8B;
let Clicked9W,Clicked9B,Clicked10W,Clicked10B,Clicked11W,Clicked11B,Clicked12W,Clicked12B,Clicked13W,Clicked13B,Clicked14W,Clicked14B,Clicked15W,Clicked15B,Clicked16W,Clicked16B;
let Clicked17W,Clicked17B,Clicked18W,Clicked18B,Clicked19W,Clicked19B,Clicked20W,Clicked20B,Clicked21W,Clicked21B,Clicked22W,Clicked22B,Clicked23W,Clicked23B,Clicked24W,Clicked24B;
let Clicked25W,Clicked25B,Clicked26W,Clicked26B,Clicked27W,Clicked27B,Clicked28W,Clicked28B,Clicked29W,Clicked29B,Clicked30W,Clicked30B,Clicked31W,Clicked31B,Clicked32W,Clicked32B;
let Clicked33W,Clicked33B,Clicked34W,Clicked34B,Clicked35W,Clicked35B,Clicked36W,Clicked36B,Clicked37W,Clicked37B,Clicked38W,Clicked38B,Clicked39W,Clicked39B,Clicked40W,Clicked40B;
let Clicked41W,Clicked41B,Clicked42W,Clicked42B,Clicked43W,Clicked43B,Clicked44W,Clicked44B,Clicked45W,Clicked45B,Clicked46W,Clicked46B,Clicked47W,Clicked47B,Clicked48W,Clicked48B;
let Clicked49W,Clicked49B,Clicked50W,Clicked50B,Clicked51W,Clicked51B,Clicked52W,Clicked52B,Clicked53W,Clicked53B,Clicked54W,Clicked54B,Clicked55W,Clicked55B,Clicked56W,Clicked56B;
let Clicked57W,Clicked57B,Clicked58W,Clicked58B,Clicked59W,Clicked59B,Clicked60W,Clicked60B,Clicked61W,Clicked61B,Clicked62W,Clicked62B,Clicked63W,Clicked63B,Clicked64W,Clicked64B;


function setup(){
  createCanvas(400,500);
  background(34,139,34);
  size = width/8
  for (let i = 0; i < 9; i ++){
    for(let j = 0; j < 9; j ++){
     strokeWeight(2);
     line(size * i , 0, size * i, 400);
     line(0,size * i, 400, size * i);

    if(i == 2 && j == 2 || i == 2 && j == 6 || i == 6 && j == 2 || i == 6 && j == 6){
      fill(0);
      ellipse(i * size, j * size , 7);
      }

    if(i == 3 || i == 4){
      fill(255,255,255);
      ellipse(i * size +　size /2, i * size +size/2,35)

    if(i == 3 && j == 4 || i == 4 && j == 3){
      fill(0);
      ellipse(i * size + size /2, j * size + size/2,35);
      ellipse(j * size + size /2, i * size + size /2,35);

    fill(0);
    text("ルール設定",20,410,30);
    text("・マスの中心部分をクリックすると白石を置く",20,440,30);
    text("・マスの端をクリックすると黒石を置く",20,460,30);
    }

    }
  }
  }
}

function mouseClicked (){
  Clicked1W = dist(size/2, size/2,x,y)<10
  Clicked1B = dist(size/2, size/2,x,y)>10 && dist(size /2, size/2,x,y)<25
  Clicked2W = dist(size + size /2, size/2,x,y)<10
  Clicked2B = dist(size + size /2, size/2,x,y)>10 && dist(size + size /2,size/2,x,y)<25
  Clicked3W = dist(2*size+size/2,size/2,x,y)<10
  Clicked3B = dist(2*size+size/2,size/2,x,y)>10 && dist(2*size+size/2,size/2,x,y)<25
  Clicked4W = dist(3*size+size/2,size/2,x,y)<10
  Clicked4B = dist(3*size+size/2,size/2,x,y)>10 && dist(3*size+size/2,size/2,x,y)<25
  Clicked5W = dist(4*size+size/2,size/2,x,y)<10
  Clicked5B = dist(4*size+size/2,size/2,x,y)>10 && dist(4*size+size/2,size/2,x,y)<25
  Clicked6W = dist(5*size+size/2,size/2,x,y)<10
  Clicked6B = dist(5*size+size/2,size/2,x,y)>10 && dist(5*size+size/2,size/2,x,y)<25
  Clicked7W = dist(6*size+size/2,size/2,x,y)<10
  Clicked7B = dist(6*size+size/2,size/2,x,y)>10 && dist(6*size+size/2,size/2,x,y)<25
  Clicked8W = dist(7*size+size/2,size/2,x,y)<10
  Clicked8B = dist(7*size+size/2,size/2,x,y)>10 && dist(7*size+size/2,size/2,x,y)<25
  Clicked9W = dist(size/2,size+size/2,x,y)<10
  Clicked9B = dist(size/2,size+size/2,x,y)>10 && dist(size/2,size+size/2,x,y)<25
  Clicked10W = dist(size + size/2,size+size/2,x,y)<10
  Clicked10B = dist(size + size/2,size+size/2,x,y)>10 && dist(size + size/2,size+size/2,x,y)<25
  Clicked11W = dist(2*size+size/2,size+size/2,x,y)<10
  Clicked11B = dist(2*size+size/2,size+size/2,x,y)>10 && dist(2*size+size/2,size+size/2,x,y)<25
  Clicked12W = dist(3*size+size/2,size+size/2,x,y)<10
  Clicked12B = dist(3*size+size/2,size+size/2,x,y)>10 && dist(3*size+size/2,size+size/2,x,y)<25
  Clicked13W = dist(4*size+size/2,size+size/2,x,y)<10
  Clicked13B = dist(4*size+size/2,size+size/2,x,y)>10 && dist(4*size+size/2,size+size/2,x,y)<25
  Clicked14W = dist(5*size+size/2,size+size/2,x,y)<10
  Clicked14B = dist(5*size+size/2,size+size/2,x,y)>10 && dist(5*size+size/2,size+size/2,x,y)<25
  Clicked15W = dist(6*size+size/2,size+size/2,x,y)<10
  Clicked15B = dist(6*size+size/2,size+size/2,x,y)>10 && dist(6*size+size/2,size+size/2,x,y)<25
  Clicked16W = dist(7*size+size/2,size+size/2,x,y)<10
  Clicked16B = dist(7*size+size/2,size+size/2,x,y)>10 && dist(7*size+size/2,size+size/2,x,y)<25
  Clicked17W = dist(size/2,2*size+size/2,x,y)<10
  Clicked17B = dist(size/2,2*size+size/2,x,y)>10 && dist(size/2,2*size+size/2,x,y)<25
  Clicked18W = dist(size+size/2,2*size+size/2,x,y)<10
  Clicked18B = dist(size+size/2,2*size+size/2,x,y)>10 && dist(size+size/2,2*size+size/2,x,y)<25
  Clicked19W = dist(2*size+size/2,2*size+size/2,x,y)<10
  Clicked19B = dist(2*size+size/2,2*size+size/2,x,y)>10 && dist(2*size+size/2,2*size+size/2,x,y)<25
  Clicked20W = dist(3*size+size/2,2*size+size/2,x,y)<10
  Clicked20B = dist(3*size+size/2,2*size+size/2,x,y)>10 && dist(3*size+size/2,2*size+size/2,x,y)<25
  Clicked21W = dist(4*size+size/2,2*size+size/2,x,y)<10
  Clicked21B = dist(4*size+size/2,2*size+size/2,x,y)>10 && dist(4*size+size/2,2*size+size/2,x,y)<25
  Clicked22W = dist(5*size+size/2,2*size+size/2,x,y)<10
  Clicked22B = dist(5*size+size/2,2*size+size/2,x,y)>10 && dist(5*size+size/2,2*size+size/2,x,y)<25
  Clicked23W = dist(6*size+size/2,2*size+size/2,x,y)<10
  Clicked23B = dist(6*size+size/2,2*size+size/2,x,y)>10 && dist(6*size+size/2,2*size+size/2,x,y)<25
  Clicked24W = dist(7*size+size/2,2*size+size/2,x,y)<10
  Clicked24B = dist(7*size+size/2,2*size+size/2,x,y)>10 && dist(7*size+size/2,2*size+size/2,x,y)<25
  Clicked25W = dist(size/2,3*size+size/2,x,y)<10
  Clicked25B = dist(size/2,3*size+size/2,x,y)>10 && dist(size/2,3*size+size/2,x,y)<25
  Clicked26W = dist(size+size/2,3*size+size/2,x,y)<10
  Clicked26B = dist(size+size/2,3*size+size/2,x,y)>10 && dist(size+size/2,3*size+size/2,x,y)<25
  Clicked27W = dist(2*size+size/2,3*size+size/2,x,y)<10
  Clicked27B = dist(2*size+size/2,3*size+size/2,x,y)>10 && dist(2*size+size/2,3*size+size/2,x,y)<25
  Clicked28W = dist(3*size+size/2,3*size+size/2,x,y)<10
  Clicked28B = dist(3*size+size/2,3*size+size/2,x,y)>10 && dist(3*size+size/2,3*size+size/2,x,y)<25
  Clicked29W = dist(4*size+size/2,3*size+size/2,x,y)<10
  Clicked29B = dist(4*size+size/2,3*size+size/2,x,y)>10 && dist(4*size+size/2,3*size+size/2,x,y)<25
  Clicked30W = dist(5*size+size/2,3*size+size/2,x,y)<10
  Clicked30B = dist(5*size+size/2,3*size+size/2,x,y)>10 && dist(5*size+size/2,3*size+size/2,x,y)<25
  Clicked31W = dist(6*size+size/2,3*size+size/2,x,y)<10
  Clicked31B = dist(6*size+size/2,3*size+size/2,x,y)>10 && dist(6*size+size/2,3*size+size/2,x,y)<25
  Clicked32W = dist(7*size+size/2,3*size+size/2,x,y)<10
  Clicked32B = dist(7*size+size/2,3*size+size/2,x,y)>10 && dist(7*size+size/2,3*size+size/2,x,y)<25
  Clicked33W = dist(size/2,4*size+size/2,x,y)<10
  Clicked33B = dist(size/2,4*size+size/2,x,y)>10 && dist(size/2,4*size+size/2,x,y)<25
  Clicked34W = dist(size+size/2,4*size+size/2,x,y)<10
  Clicked34B = dist(size+size/2,4*size+size/2,x,y)>10 && dist(size+size/2,4*size+size/2,x,y)<25
  Clicked35W = dist(2*size+size/2,4*size+size/2,x,y)<10
  Clicked35B = dist(2*size+size/2,4*size+size/2,x,y)>10 && dist(2*size+size/2,4*size+size/2,x,y)<25
  Clicked36W = dist(3*size+size/2,4*size+size/2,x,y)<10
  Clicked36B = dist(3*size+size/2,4*size+size/2,x,y)>10 && dist(3*size+size/2,4*size+size/2,x,y)<25
  Clicked37W = dist(4*size+size/2,4*size+size/2,x,y)<10
  Clicked37B = dist(4*size+size/2,4*size+size/2,x,y)>10 && dist(4*size+size/2,4*size+size/2,x,y)<25
  Clicked38W = dist(5*size+size/2,4*size+size/2,x,y)<10
  Clicked38B = dist(5*size+size/2,4*size+size/2,x,y)>10 && dist(5*size+size/2,4*size+size/2,x,y)<25
  Clicked39W = dist(6*size+size/2,4*size+size/2,x,y)<10
  Clicked39B = dist(6*size+size/2,4*size+size/2,x,y)>10 && dist(6*size+size/2,4*size+size/2,x,y)<25
  Clicked40W = dist(7*size+size/2,4*size+size/2,x,y)<10
  Clicked40B = dist(7*size+size/2,4*size+size/2,x,y)>10 && dist(7*size+size/2,4*size+size/2,x,y)<25
  Clicked41W = dist(size/2,5*size+size/2,x,y)<10
  Clicked41B = dist(size/2,5*size+size/2,x,y)>10 && dist(size/2,5*size+size/2,x,y)<25
  Clicked42W = dist(size+size/2,5*size+size/2,x,y)<10
  Clicked42B = dist(size+size/2,5*size+size/2,x,y)>10 && dist(size+size/2,5*size+size/2,x,y)<25
  Clicked43W = dist(2*size+size/2,5*size+size/2,x,y)<10
  Clicked43B = dist(2*size+size/2,5*size+size/2,x,y)>10 && dist(2*size+size/2,5*size+size/2,x,y)<25
  Clicked44W = dist(3*size+size/2,5*size+size/2,x,y)<10
  Clicked44B = dist(3*size+size/2,5*size+size/2,x,y)>10 && dist(3*size+size/2,5*size+size/2,x,y)<25
  Clicked45W = dist(4*size+size/2,5*size+size/2,x,y)<10
  Clicked45B = dist(4*size+size/2,5*size+size/2,x,y)>10 && dist(4*size+size/2,5*size+size/2,x,y)<25
  Clicked46W = dist(5*size+size/2,5*size+size/2,x,y)<10
  Clicked46B = dist(5*size+size/2,5*size+size/2,x,y)>10 && dist(5*size+size/2,5*size+size/2,x,y)<25
  Clicked47W = dist(6*size+size/2,5*size+size/2,x,y)<10
  Clicked47B = dist(6*size+size/2,5*size+size/2,x,y)>10 && dist(6*size+size/2,5*size+size/2,x,y)<25
  Clicked48W = dist(7*size+size/2,5*size+size/2,x,y)<10
  Clicked48B = dist(7*size+size/2,5*size+size/2,x,y)>10 && dist(7*size+size/2,5*size+size/2,x,y)<25
  Clicked49W = dist(size/2,6*size+size/2,x,y)<10
  Clicked49B = dist(size/2,6*size+size/2,x,y)>10 && dist(size/2,6*size+size/2,x,y)<25
  Clicked50W = dist(size+size/2,6*size+size/2,x,y)<10
  Clicked50B = dist(size+size/2,6*size+size/2,x,y)>10 && dist(size+size/2,6*size+size/2,x,y)<25
  Clicked51W = dist(2*size+size/2,6*size+size/2,x,y)<10
  Clicked51B = dist(2*size+size/2,6*size+size/2,x,y)>10 && dist(2*size+size/2,6*size+size/2,x,y)<25
  Clicked52W = dist(3*size+size/2,6*size+size/2,x,y)<10
  Clicked52B = dist(3*size+size/2,6*size+size/2,x,y)>10 && dist(3*size+size/2,6*size+size/2,x,y)<25
  Clicked53W = dist(4*size+size/2,6*size+size/2,x,y)<10
  Clicked53B = dist(4*size+size/2,6*size+size/2,x,y)>10 && dist(4*size+size/2,6*size+size/2,x,y)<25
  Clicked54W = dist(5*size+size/2,6*size+size/2,x,y)<10
  Clicked54B = dist(5*size+size/2,6*size+size/2,x,y)>10 && dist(5*size+size/2,6*size+size/2,x,y)<25
  Clicked55W = dist(6*size+size/2,6*size+size/2,x,y)<10
  Clicked55B = dist(6*size+size/2,6*size+size/2,x,y)>10 && dist(6*size+size/2,6*size+size/2,x,y)<25
  Clicked56W = dist(7*size+size/2,6*size+size/2,x,y)<10
  Clicked56B = dist(7*size+size/2,6*size+size/2,x,y)>10 && dist(7*size+size/2,6*size+size/2,x,y)<25
  Clicked57W = dist(size/2,7*size+size/2,x,y)<10
  Clicked57B = dist(size/2,7*size+size/2,x,y)>10 && dist(size/2,7*size+size/2,x,y)<25
  Clicked58W = dist(size+size/2,7*size+size/2,x,y)<10
  Clicked58B = dist(size+size/2,7*size+size/2,x,y)>10 && dist(size+size/2,7*size+size/2,x,y)<25
  Clicked59W = dist(2*size+size/2,7*size+size/2,x,y)<10
  Clicked59B = dist(2*size+size/2,7*size+size/2,x,y)>10 && dist(2*size+size/2,7*size+size/2,x,y)<25
  Clicked60W = dist(3*size+size/2,7*size+size/2,x,y)<10
  Clicked60B = dist(3*size+size/2,7*size+size/2,x,y)>10 && dist(3*size+size/2,7*size+size/2,x,y)<25
  Clicked61W = dist(4*size+size/2,7*size+size/2,x,y)<10
  Clicked61B = dist(4*size+size/2,7*size+size/2,x,y)>10 && dist(4*size+size/2,7*size+size/2,x,y)<25
  Clicked62W = dist(5*size+size/2,7*size+size/2,x,y)<10
  Clicked62B = dist(5*size+size/2,7*size+size/2,x,y)>10 && dist(5*size+size/2,7*size+size/2,x,y)<25
  Clicked63W = dist(6*size+size/2,7*size+size/2,x,y)<10
  Clicked63B = dist(6*size+size/2,7*size+size/2,x,y)>10 && dist(6*size+size/2,7*size+size/2,x,y)<25
  Clicked64W = dist(7*size+size/2,7*size+size/2,x,y)<10
  Clicked64B = dist(7*size+size/2,7*size+size/2,x,y)>10 && dist(7*size+size/2,7*size+size/2,x,y)<25



 }


function mousePressed(){
  x = mouseX;
  y = mouseY;
}


function draw(){
  if (Clicked1W){
    fill(255,255,255);
    ellipse(size /2, size /2,35);
    }
  if(Clicked1B){
    fill(0);
    ellipse(size /2,size/2,35);
    }
  if(Clicked2W){
    fill(255,255,255);
    ellipse(size + size /2,size/2,35);
   }
  if(Clicked2B){
     fill(0);
     ellipse(size + size /2,size/2,35);
   }
   if(Clicked3W){
     fill(255,255,255);
     ellipse(2*size+size/2,size/2,35);
   }
   if(Clicked3B){
     fill(0);
     ellipse(2*size+size/2,size/2,35);
   }
   if(Clicked4W){
     fill(255,255,255);
     ellipse(3*size+size/2,size/2,35);
   }
   if(Clicked4B){
     fill(0);
     ellipse(3*size+size/2,size/2,35);
   }
   if(Clicked5W){
     fill(255,255,255);
     ellipse(4*size+size/2,size/2,35);
   }
   if(Clicked5B){
     fill(0);
     ellipse(4*size+size/2,size/2,35);
   }
   if(Clicked6W){
     fill(255,255,255);
     ellipse(5*size+size/2,size/2,35);
   }
   if(Clicked6B){
     fill(0);
     ellipse(5*size+size/2,size/2,35);
   }
   if(Clicked7W){
     fill(255,255,255);
     ellipse(6*size+size/2,size/2,35);
   }
   if(Clicked7B){
     fill(0);
     ellipse(6*size+size/2,size/2,35);
   }
   if(Clicked8W){
     fill(255,255,255);
     ellipse(7*size+size/2,size/2,35);
   }
   if(Clicked8B){
     fill(0);
     ellipse(7*size+size/2,size/2,35);
   }
   if(Clicked9W){
     fill(255,255)
     ellipse(size/2,size+size/2,35)
   }
   if(Clicked9B){
     fill(0)
     ellipse(size/2,size+size/2,35)
   }
   if(Clicked10W){
     fill(255,255,255)
     ellipse(size + size/2,size+size/2,35)
   }
   if(Clicked10B){
     fill(0)
     ellipse(size + size/2,size+size/2,35)
   }
   if(Clicked11W){
     fill(255,255,255)
     ellipse(2*size+size/2,size+size/2,35)
   }
   if(Clicked11B){
     fill(0)
     ellipse(2*size+size/2,size+size/2,35)
   }
   if(Clicked12W){
     fill(255,255,255)
     ellipse(3*size+size/2,size+size/2,35)
   }
   if(Clicked12B){
     fill(0)
     ellipse(3*size+size/2,size+size/2,35)
   }
   if(Clicked13W){
     fill(255,255,255)
     ellipse(4*size+size/2,size+size/2,35)
   }
   if(Clicked13B){
     fill(0)
     ellipse(4*size+size/2,size+size/2,35)
   }
   if(Clicked14W){
     fill(255,255,255)
     ellipse(5*size+size/2,size+size/2,35)
   }
   if(Clicked14B){
     fill(0)
     ellipse(5*size+size/2,size+size/2,35)
   }
   if(Clicked15W){
     fill(255,255,255)
     ellipse(6*size+size/2,size+size/2,35)
   }
   if(Clicked15B){
     fill(0)
     ellipse(6*size+size/2,size+size/2,35)
   }
   if(Clicked16W){
     fill(255,255,255)
     ellipse(7*size+size/2,size+size/2,35)
   }
   if(Clicked16B){
     fill(0)
     ellipse(7*size+size/2,size+size/2,35)
   }
   if(Clicked17W){
     fill(255,255,255)
     ellipse(size/2,2*size+size/2,35)
   }
   if(Clicked17B){
     fill(0)
     ellipse(size/2,2*size+size/2,35)
   }
   if(Clicked18W){
     fill(255,255,255)
     ellipse(size+size/2,2*size+size/2,35)
   }
   if(Clicked18B){
     fill(0)
     ellipse(size+size/2,2*size+size/2,35)
   }
   if(Clicked19W){
     fill(255,255,255)
     ellipse(2*size+size/2,2*size+size/2,35)
   }
   if(Clicked19B){
     fill(0)
     ellipse(2*size+size/2,2*size+size/2,35)
   }
   if(Clicked20W){
     fill(255,255,255)
     ellipse(3*size+size/2,2*size+size/2,35)
   }
   if(Clicked20B){
     fill(0)
     ellipse(3*size+size/2,2*size+size/2,35)
   }
   if(Clicked21W){
     fill(255,255,255)
     ellipse(4*size+size/2,2*size+size/2,35)
   }
   if(Clicked21B){
     fill(0)
     ellipse(4*size+size/2,2*size+size/2,35)
   }
   if(Clicked22W){
     fill(255,255,255)
     ellipse(5*size+size/2,2*size+size/2,35)
   }
   if(Clicked22B){
     fill(0)
     ellipse(5*size+size/2,2*size+size/2,35)
   }
   if(Clicked23W){
     fill(255,255,255)
     ellipse(6*size+size/2,2*size+size/2,35)
   }
   if(Clicked23B){
     fill(0)
     ellipse(6*size+size/2,2*size+size/2,35)
   }
   if(Clicked24W){
     fill(255,255,255)
     ellipse(7*size+size/2,2*size+size/2,35)
   }
   if(Clicked24B){
     fill(0)
     ellipse(7*size+size/2,2*size+size/2,35)
   }
   if(Clicked25W){
     fill(255,255,255)
     ellipse(size/2,3*size+size/2,35)
   }
   if(Clicked25B){
     fill(0)
     ellipse(size/2,3*size+size/2,35)
   }
   if(Clicked26W){
     fill(255,255,255)
     ellipse(size+size/2,3*size+size/2,35)
   }
   if(Clicked26B){
     fill(0)
     ellipse(size+size/2,3*size+size/2,35)
   }
   if(Clicked27W){
     fill(255,255,255)
     ellipse(2*size+size/2,3*size+size/2,35)
   }
   if(Clicked27B){
     fill(0)
     ellipse(2*size+size/2,3*size+size/2,35)
   }
   if(Clicked28W){
     fill(255,255,255)
     ellipse(3*size+size/2,3*size+size/2,35)
   }
   if(Clicked28B){
     fill(0)
     ellipse(3*size+size/2,3*size+size/2,35)
   }
   if(Clicked29W){
     fill(255,255,255)
     ellipse(4*size+size/2,3*size+size/2,35)
   }
   if(Clicked29B){
     fill(0)
     ellipse(4*size+size/2,3*size+size/2,35)
   }
   if(Clicked30W){
     fill(255,255,255)
     ellipse(5*size+size/2,3*size+size/2,35)
   }
   if(Clicked30B){
     fill(0)
     ellipse(5*size+size/2,3*size+size/2,35)
   }
   if(Clicked31W){
     fill(255,255,255)
     ellipse(6*size+size/2,3*size+size/2,35)
   }
   if(Clicked31B){
     fill(0)
     ellipse(6*size+size/2,3*size+size/2,35)
   }
   if(Clicked32W){
     fill(255,255,255)
     ellipse(7*size+size/2,3*size+size/2,35)
   }
   if(Clicked32B){
     fill(0)
     ellipse(7*size+size/2,3*size+size/2,35)
   }
   if(Clicked33W){
     fill(255,255,255)
     ellipse(size/2,4*size+size/2,35)
   }
   if(Clicked33B){
     fill(0)
     ellipse(size/2,4*size+size/2,35)
   }
   if(Clicked34W){
     fill(255,255,255)
     ellipse(size+size/2,4*size+size/2,35)
   }
   if(Clicked34B){
     fill(0)
     ellipse(size+size/2,4*size+size/2,35)
   }
   if(Clicked35W){
     fill(255,255,255)
     ellipse(2*size+size/2,4*size+size/2,35)
   }
   if(Clicked35B){
     fill(0)
     ellipse(2*size+size/2,4*size+size/2,35)
   }
   if(Clicked36W){
     fill(255,255,255)
     ellipse(3*size+size/2,4*size+size/2,35)
   }
   if(Clicked36B){
     fill(0)
     ellipse(3*size+size/2,4*size+size/2,35)
   }
   if(Clicked37W){
     fill(255,255,255)
     ellipse(4*size+size/2,4*size+size/2,35)
   }
   if(Clicked37B){
     fill(0)
     ellipse(4*size+size/2,4*size+size/2,35)
   }
   if(Clicked38W){
     fill(255,255,255)
     ellipse(5*size+size/2,4*size+size/2,35)
   }
   if(Clicked38B){
     fill(0)
     ellipse(5*size+size/2,4*size+size/2,35)
   }
   if(Clicked39W){
     fill(255,255,255)
     ellipse(6*size+size/2,4*size+size/2,35)
   }
   if(Clicked39B){
     fill(0)
     ellipse(6*size+size/2,4*size+size/2,35)
   }
   if(Clicked40W){
     fill(255,255,255)
     ellipse(7*size+size/2,4*size+size/2,35)
   }
   if(Clicked40B){
     fill(0)
     ellipse(7*size+size/2,4*size+size/2,35)
   }
   if(Clicked41W){
     fill(255,255,255)
     ellipse(size/2,5*size+size/2,35)
   }
   if(Clicked41B){
     fill(0)
     ellipse(size/2,5*size+size/2,35)
   }
   if(Clicked42W){
     fill(255,255,255)
     ellipse(size+size/2,5*size+size/2,35)
   }
   if(Clicked42B){
     fill(0)
     ellipse(size+size/2,5*size+size/2,35)
   }
   if(Clicked43W){
     fill(255,255,255)
     ellipse(2*size+size/2,5*size+size/2,35)
   }
   if(Clicked43B){
     fill(0)
     ellipse(2*size+size/2,5*size+size/2,35)
   }
   if(Clicked44W){
     fill(255,255,255)
     ellipse(3*size+size/2,5*size+size/2,35)
   }
   if(Clicked44B){
     fill(0)
     ellipse(3*size+size/2,5*size+size/2,35)
   }
   if(Clicked45W){
     fill(255,255,255)
     ellipse(4*size+size/2,5*size+size/2,35)
   }
   if(Clicked45B){
     fill(0)
     ellipse(4*size+size/2,5*size+size/2,35)
   }
   if(Clicked46W){
     fill(255,255,255)
     ellipse(5*size+size/2,5*size+size/2,35)
   }
   if(Clicked46B){
     fill(0)
     ellipse(5*size+size/2,5*size+size/2,35)
   }
   if(Clicked47W){
     fill(255,255,255)
     ellipse(6*size+size/2,5*size+size/2,35)
   }
   if(Clicked47B){
     fill(0)
     ellipse(6*size+size/2,5*size+size/2,35)
   }
   if(Clicked48W){
     fill(255,255,255)
     ellipse(7*size+size/2,5*size+size/2,35)
   }
   if(Clicked48B){
     fill(0)
     ellipse(7*size+size/2,5*size+size/2,35)
   }
   if(Clicked49W){
     fill(255,255,255)
     ellipse(size/2,6*size+size/2,35)
   }
   if(Clicked49B){
     fill(0)
     ellipse(size/2,6*size+size/2,35)
   }
   if(Clicked50W){
     fill(255,255,255)
     ellipse(size+size/2,6*size+size/2,35)
   }
   if(Clicked50B){
     fill(0)
     ellipse(size+size/2,6*size+size/2,35)
   }
   if(Clicked51W){
     fill(255,255,255)
     ellipse(2*size+size/2,6*size+size/2,35)
   }
   if(Clicked51B){
     fill(0)
     ellipse(2*size+size/2,6*size+size/2,35)
   }
   if(Clicked52W){
     fill(255,255,255)
     ellipse(3*size+size/2,6*size+size/2,35)
   }
   if(Clicked52B){
     fill(0)
     ellipse(3*size+size/2,6*size+size/2,35)
   }
   if(Clicked53W){
     fill(255,255,255)
     ellipse(4*size+size/2,6*size+size/2,35)
   }
   if(Clicked53B){
     fill(0)
     ellipse(4*size+size/2,6*size+size/2,35)
   }
   if(Clicked54W){
     fill(255,255,255)
     ellipse(5*size+size/2,6*size+size/2,35)
   }
   if(Clicked54B){
     fill(0)
     ellipse(5*size+size/2,6*size+size/2,35)
   }
   if(Clicked55W){
     fill(255,255,255)
     ellipse(6*size+size/2,6*size+size/2,35)
   }
   if(Clicked55B){
     fill(0)
     ellipse(6*size+size/2,6*size+size/2,35)
   }
   if(Clicked56W){
     fill(255,255,255)
     ellipse(7*size+size/2,6*size+size/2,35)
   }
   if(Clicked56B){
     fill(0)
     ellipse(7*size+size/2,6*size+size/2,35)
   }
   if(Clicked57W){
     fill(255,255,255)
     ellipse(size/2,7*size+size/2,35)
   }
   if(Clicked57B){
     fill(0)
     ellipse(size/2,7*size+size/2,35)
   }
   if(Clicked58W){
     fill(255,255,255)
     ellipse(size+size/2,7*size+size/2,35)
   }
   if(Clicked58B){
     fill(0)
     ellipse(size+size/2,7*size+size/2,35)
   }
   if(Clicked59W){
     fill(255,255,255)
     ellipse(2*size+size/2,7*size+size/2,35)
   }
   if(Clicked59B){
     fill(0)
     ellipse(2*size+size/2,7*size+size/2,35)
   }
   if(Clicked60W){
     fill(255,255,255)
     ellipse(3*size+size/2,7*size+size/2,35)
   }
   if(Clicked60B){
     fill(0)
     ellipse(3*size+size/2,7*size+size/2,35)
   }
   if(Clicked61W){
     fill(255,255,255)
     ellipse(4*size+size/2,7*size+size/2,35)
   }
   if(Clicked61B){
     fill(0)
     ellipse(4*size+size/2,7*size+size/2,35)
   }
   if(Clicked62W){
     fill(255,255,255)
     ellipse(5*size+size/2,7*size+size/2,35)
   }
   if(Clicked62B){
     fill(0)
     ellipse(5*size+size/2,7*size+size/2,35)
   }
   if(Clicked63W){
     fill(255,255,255)
     ellipse(6*size+size/2,7*size+size/2,35)
   }
   if(Clicked63B){
     fill(0)
     ellipse(6*size+size/2,7*size+size/2,35)
   }
   if(Clicked64W){
     fill(255,255,255)
     ellipse(7*size+size/2,7*size+size/2,35)
   }
   if(Clicked64B){
     fill(0)
     ellipse(7*size+size/2,7*size+size/2,35)
   }
}
