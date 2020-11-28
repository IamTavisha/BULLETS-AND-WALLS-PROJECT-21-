var bullet, wall;
var speed, weight;
var thickness;
var damage;
var bulletRightEdge, wallLefEdge;

function setup() {
  createCanvas(1000,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "white";
  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor =(80,80,80);

  bullet.velocityX = speed;
  }

function draw() {
  background("black");
 if (hasCollided(bullet,wall)) {
   bullet.velocityX = 0;
   damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

   if (damage>=10) {
     wall.shapeColor = "red";
   }

   if (damage<10) {
     wall.shapeColor = "green";
   }
 }
  drawSprites();
  bullet.collide(wall);
}

function hasCollided() {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}