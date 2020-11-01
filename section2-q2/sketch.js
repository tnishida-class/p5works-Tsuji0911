// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
     fill(196);
     if(i % 2 == 0 && j % 2 == 1　|| i % 2 == 1 && j % 2 == 0){
       fill(128);
  　　 }
      else{
       fill(255) ;
      }
     rect(size * i, size * j, size, size);
    }
  }
  for(let k = 0; k <= 8; k++){
    for(let l = 0; l <= 8;l++){
     if((k % 2 == 1 && l % 2 == 0 || k % 2 == 0 && l % 2 == 1) && l <= 3 ){
       fill(288,0,0)
       ellipse(k * size - size/2, l * size - size/2, 20)
      }
      else if(( k % 2 == 1 && l % 2 == 0 || k % 2 == 0 && l % 2 == 1) && l > 5 && l <= 8 ){
        fill(0)
        ellipse(k * size - size/2 , l * size - size/2, 20)
      }
    }
  }
}
