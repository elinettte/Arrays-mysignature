let circleSize, posX, posY, offSet, numShapes, space;
let myColor = ['#AC08FC','yellow','#A8B1FF','#73FFB8','#FCA2D0','#FFBAAB','#F9ABFF','#2768FF','#9C6AFC','#FC7EFC'];


function setup() {
  createCanvas(400, 400);
  
  numShapes = 10;
  circleSize = width-50;
  space = circleSize/numShapes;
  offSet = 10;
  
  posX = width/2;
  posY = height/2;
  
}

function draw() {
  background(79,97,78);
  
  for (i = 0; i < numShapes; i++)
    {
      fill(myColor[i]);
      // print(myColor[i])
      strokeWeight(4);
      stroke('brown');
      circle (posX+offSet*i, posY, circleSize-space*i);
      
    }
  
  mySignature();
  
  function mySignature()
  {
    textSize(20);
    strokeWeight(4);
    stroke('black');
    fill('pink');
    text('Eliann Tulve',width-350,height-30);
  }
  
}