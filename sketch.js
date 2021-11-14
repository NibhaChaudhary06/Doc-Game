var bg , backGround;
var character , girlWalking , girlDucking , girlJumping;
var boy , boyWalking , boyDucking , boyJumping; 
var Corona , virus 
var mask , sanitizer , vaccine;
function preload(){
  bg= loadImage("Background.jpg");
  corona = loadImage("Corona Image.png")
  virus = loadImage("Viruses.png")
 mask = loadImage("Mask.png")
 vaccine = loadImage("Vaccine.png")
 sanitizer = loadImage("Sanitizer.png")
 girlWalking = loadAnimation("Girl_assets/girl_1_walking.png","Girl_assets/girl_2_walking.png","Girl_assets/girl_3_walking.png","Girl_assets/girl_4_walking.png","Girl_assets/girl_5_walking.png","Girl_assets/girl_6_walking.png")
 girlDucking = loadAnimation("Girl_assets/girl_ducking_1.png","Girl_assets/girl_ducking_2.png","Girl_assets/girl_ducking_3.png","Girl_assets/girl_ducking_4.png","Girl_assets/girl_ducking_5.png","Girl_assets/girl_ducking_6.png")
 girlJumping = loadAnimation("Girl_assets/girl_jumping_1.png","Girl_assets/girl_jumping_2.png","Girl_assets/girl_jumping_3.png","Girl_assets/girl_jumping_4.png","Girl_assets/girl_jumping_5.png","Girl_assets/girl_jumping_6.png")
 boyJumping = loadAnimation("Boy_assets/boy_jumping_1.png","Boy_assets/boy_jumping_2.png","Boy_assets/boy_jumping_3.png","Boy_assets/boy_jumping_4.png","Boy_assets/boy_jumping_5.png","Boy_assets/boy_jumping_6.png")
 boyDucking = loadAnimation("Boy_assets/boy_ducking_1.png","Boy_assets/boy_ducking_2.png","Boy_assets/boy_ducking_3.png","Boy_assets/boy_ducking_4.png","Boy_assets/boy_ducking_5.png","Boy_assets/boy_ducking_6.png")
}

function setup() {
  createCanvas(1350, 650);
  backGround = createSprite(0,325,1550,650)
  backGround.addImage(bg);
  backGround.velocityX = -4;
  backGround.scale = 0.3;
  character = createSprite(100,520)
  character.addAnimation("girlWalking",girlWalking)
 
  character.scale = 0.3
}

function draw() {
  background(0);
  
  if(backGround.x < 0){
    backGround.x = 400
 
  }

  if(keyDown("UP_ARROW")){
    character.vecocityY = -10
    character.addAnimation("girlJumping",girlJumping)
  character.changeAnimation("girlJumping");
 }
 if(keyDown("DOWN_ARROW")){
  character.addAnimation("girlDucking",girlDucking)
  character.changeAnimation("girlDucking",girlDucking);
 }
 if(keyDown("RIGHT_ARROW")){
  character.addAnimation("girlWalking",girlWalking)
  character.changeAnimation("girlWalking")
 }
  spawnObstacles();
  spwanProtection()
  drawSprites();
}
function keyPressed(){
  

}
function spawnObstacles(){
 if(frameCount%120 === 0){
  var Virus = createSprite(1350,490,40,10);
    Virus.y = Math.round(random(300,600));
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: Virus.addImage(corona);
      Virus.scale = 0.05
              break;
      case 2: Virus.addImage(virus);
      Virus.scale = 0.3
              break;
      default: break;
    }
    
    Virus.velocityX = -4 
    Virus.lifetime = 338;
 }

}

 function spwanProtection(){
  if(frameCount%200 === 0){
    var Protection = createSprite(1350,490,40,10);
      Protection.y = Math.round(random(300,600));
      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1: Protection.addImage(mask);
        Protection.scale = 0.3
                break;
        case 2: Protection.addImage(vaccine);
        Protection.scale = 0.3
                break;
        case 3: Protection.addImage(sanitizer);
        Protection.scale = 0.3
                break;
        default: break;
      }
      Protection.velocityX = -4
      Protection.lifetime = 338;
 }

}
