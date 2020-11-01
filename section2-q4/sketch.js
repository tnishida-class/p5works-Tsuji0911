// キューバ国旗
  function setup(){
    createCanvas(225,150);
    background(255);
    let d = height / 5

    fill(0,0,255)
     for(let i = 0; i < 5; i++){
      if(i%2==0){
      rect(0, i * d, width, d);
      }
    }
    fill(255,0,0)
     triangle(0,0,100,75,0,height)

    fill(255)
    noStroke();
    star(35,75,20)
    function star(cx,cy,r){
    beginShape();
    for(let k=0 ; k<5; k++){
      const theta =TWO_PI * k * 2/5 - HALF_PI;
      const x = cx + cos(theta) * r;
      const y = cy + sin(theta) * r;
      vertex(x,y);
      }
      endShape(CLOSE);
    }
   }
