
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log = ground.x;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0;
}


function draw() {
  background("white")
  
  if (keyDown("space")&& monkey.y >= 160) {
    monkey.velocityY = -14;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:", + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime:", + survivalTime, 100, 50)
  
  drawSprites();
  
  banana();
  obstacle();
}

function banana() {
  if (frameCount % 80 === 0) {
  var banana = createSprite(400,180,20,20);
  banana.addAnimation("moving", bananaImage);
  banana.velocityX = -5;
  banana.scale = 0.1;
  banana.lifeTime = 360;
  
  bananaGroup.add(banana);
  }
}

function obstacle() {
  if (frameCount % 300 === 0) {
  var obstacle = createSprite(320,330,20,20);
    obstacle.addAnimation("moving", obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    obstacle.lifeTime = 360;
  
    
    obstacleGroup.add(obstacle);
  }
}



