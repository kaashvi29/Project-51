var alien, alieng, alienIMG;
var aster, asterg, asterIMG;
var bgImg;
var boost,boostg;
var destroy,destroyg;
var bullet, bulletg;
var ubullet, ubulletg;
var spguard;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var TotalScore =0;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

//PRELOADING THEM
function preload(){;
bgImg=loadImage("assets/Background.png");
alien=loadImage("assets/Alien.png");
aster=loadImage("assets/Asteroid.png");
boost=loadImage("assets/Boost Power up.png");
bullet=loadImage("assets/Bullet.png");
ubullet=loadImage("assets/The Ultra Saber Bullet.png");
spguard=loadImage("assets/SpaceGuardian.png");
}

function setup(){
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.velocityY= 4;
  spguard= createSprite(70,580,20,20);
  spguard.addImage("assets/SpaceGuardian.png");
  spguard.scale=0.5;
  spguard.debug = true;
   spguard.setCollider("rectangle",0,0,300,300);
}

//creating sprites to depict lives remaining
heart1 = createSprite(displayWidth-150,40,20,20)
heart1.visible = false
 heart1.addImage("heart1",heart1Img)
 heart1.scale = 0.4

 heart2 = createSprite(displayWidth-100,40,20,20)
 heart2.visible = false
 heart2.addImage("heart2",heart2Img)
 heart2.scale = 0.4

 heart3 = createSprite(displayWidth-150,40,20,20)
 heart3.addImage("heart3",heart3Img)
 heart3.scale = 0.4

 //CREATING GROUP FOR ASTEROIDS AND ALIEN
 asterg= newGroup();
 alieng= newGroup();

 function draw() {
  background(0);
//moving the player left and right and making the game mobile compatible using touches
  if(keyDown("LEFT_ARROW")||touches.length>0){
    spguard.x = spguard.x-30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
   spguard.x = spguard.x+30
  }
  if(asterg.isTouching(spguard)){
 

    for(var i=0;i<asterg.length;i++){     
         
     if(asterg[i].isTouching(spguard)){
          asterg[i].destroy()
          } 
    }
   }
   if(alieng.isTouching(spguard)){
 

    for(var i=0;i<alieng.length;i++){     
         
     if(alieng[i].isTouching(spguard)){
          alieng[i].destroy()
          } 
    }
   }
  enemy();
drawSprites();
}

function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    aster=createSprite(random(500,1000),random(100,500),40,40);

    aster.addImage(asterIMG)
    aster.scale = 0.15
    aster.velocityX = -3
    aster.debug= true
    aster.setCollider("rectangle",0,0,400,400)
   
    aster.lifetime = 400
    asterg.add(aster);
    
    alien.addImage(alienIMG)
    alien.scale = 0.15
    alien.velocityX = -3
    alien.debug= true
    alien.setCollider("rectangle",0,0,400,400)
   
    alien.lifetime = 400
    alieng.add(alien);
    
  }}
