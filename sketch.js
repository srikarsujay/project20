var car ,wall,speed,weight




function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed
wall=createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255);  
if(wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX=0
  var diformation=0.5*weight*speed*speed/22509
if(diformation>180){
  car.shapeColor=color(225,0,0)
}
if(diformation<180&&diformation>100){
  car.shapeColor=color(230,0,0)
}
if(diformation<100){
  car.shapeColor=color(0,255,0)
}
}








  drawSprites();
}