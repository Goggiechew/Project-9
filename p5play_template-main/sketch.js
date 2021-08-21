var box;
function setup() {
  createCanvas(400,400);
  background("Purple");
  box=createSprite(200,200,10,10);
}

function draw() 
{
 
if(keyIsDown(LEFT_ARROW)){
  background("Blue");
}
if(keyIsDown(RIGHT_ARROW)){
  background("Pink");
}
if(keyIsDown(UP_ARROW)){
background("Red");
}
if(keyIsDown(DOWN_ARROW)){
  background("Green");
}
drawSprites();
}




