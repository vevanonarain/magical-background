var r,g,b,mouse1,back;

function setup() {
createCanvas(1500,800);
back=createSprite(750,400,1500,800);
back.shapeColor="orange";
mouse1 =createSprite(400,400,50,50);
mouse1.shapeColor="blue";
}
function draw(){
background(250);
  mouse1.x=World.mouseX;
mouse1.y=World.mouseY;

if(mouse1.x>0&&mouse1.x<350) {
back.shapeColor="green";
mouse1.shapeColor="orange";
}
if(mouse1.x>350&&mouse1.x<1000) {
  back.shapeColor="red";
  mouse1.shapeColor="green";
  }
  if(mouse1.x>1000&&mouse1.x<1500) {
    back.shapeColor="orange";
    mouse1.shapeColor="red";
    }
  drawSprites();
}
