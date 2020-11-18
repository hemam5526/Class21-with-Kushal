var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(400,200,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;
}

function draw() {
  background(0,0,0);  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  if(myisTouching())
  {
    //true
    rect2.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else
  {
    //false
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  drawSprites();
}

function myisTouching()
{
  if (rect2.x - rect1.x < rect1.width/2 + rect2.width/2
    && rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2
    && rect1.y - rect2.y < rect1.height/2 + rect2.height/2) {
 
      return true;
}
else {
     return false;
 }
}