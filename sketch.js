var bullet, bullet2, bullet3, bullet4;
var wall, wall2, wall3, wall4;
var speed, speed2, speed3, speed4;
var weight, weight2, weight3, weight4;
var damage, damage2, demage3, demage4;
var thickness, thickness2, thickness3, thickness4;
var line, line2, line3;

function setup(){
createCanvas(1600,500);

speed=random(223,321);
speed2=random(223,321);
speed3=random(223,321);
speed4=random(223,321);

weight=random(30,52);
weight2=random(30,52);
weight3=random(30,52);
weight4=random(30,52);

thickness=random(22,83);
thickness2=random(22,83);
thickness3=random(22,83);
thickness4=random(22,83);

bullet = createSprite(50,100,70,10);
bullet.velocityX=speed;
wall = createSprite(1500,100,60,50);

bullet2 = createSprite(50,200,70,10);
bullet2.velocityX=speed2;
wall2 = createSprite(1500,200,60,50);

bullet3 = createSprite(50,300,70,10);
bullet3.velocityX=speed3;
wall3 = createSprite(1500,300,60,50);

bullet4 = createSprite(50,400,70,10);
bullet4.velocityX=speed4;
wall4 = createSprite(1500,400,60,50);

var line = createSprite(800,150,1800,10);
line.shapeColor=color(255,255,255);

var line2 = createSprite(800,250,1800,10);
line2.shapeColor=color(255,255,255);

var line3 = createSprite(800,350,1800,10);
line3.shapeColor=color(255,255,255);


}

function draw(){
  background(0);
   

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
 
  if(damage>=10){
    wall.shapeColor=color(255,0,0);
  }
  else if(damage<=10){
    wall.shapeColor=color(0,255,0);
  }
  }

  if(hasCollided(bullet2,wall2)){
    bullet2.velocityX=0;
    damage2=(0.5*weight2*speed2*speed2)/(thickness2*thickness2*thickness2);
 
  if(damage2>=10){
    wall2.shapeColor=color(255,0,0);
  }
 
  else if(damage2<=10){
    wall2.shapeColor=color(0,255,0);
  }
}

if(hasCollided(bullet3,wall3)){
  bullet3.velocityX=0;
  damage3=(0.5*weight3*speed3*speed3)/(thickness3*thickness3*thickness3);

if(damage3>=10){
  wall3.shapeColor=color(255,0,0);
}
else if(damage3<=10){
  wall3.shapeColor=color(0,255,0);
}
}

if(hasCollided(bullet4,wall4)){
  bullet4.velocityX=0;
  damage4=(0.5*weight4*speed4*speed4)/(thickness4*thickness4*thickness4);

if(damage4>=10){
  wall4.shapeColor=color(255,0,0);
}
else if(damage4<=10){
  wall4.shapeColor=color(0,255,0);
}
}

  drawSprites();
}


function hasCollided(object1,object2){
  bulletRightEdge=object1.x + object1.width;
  wallLeftEdge=object2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

 

