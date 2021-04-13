var car1,car1IMG,car2,car2IMG,thief,thiefIMG,police,policeIMG,play=1,pliceTXT,ThiefTXT,PoliceIXTIMG,thiefTXTIMG,backgroundIMG;
var gameState = "start";
var lose,loseIMG,reset,resetIMG;
var cargroup;
function preload(){
    car1IMG = loadImage("Blue.png");
    car2IMG = loadImage("White.png");
    thiefIMG = loadImage("Thief.png");
    car1IMG = loadImage("Blue.png");
    policeTXTIMG = loadImage("policeButton.jpg");
    thiefTXTIMG = loadImage("thiefButton.PNG");
    thiefIMG = loadImage("Thief.png");
    backgroundIMG = loadImage("track.png");
    policeIMG = loadImage("Police.png");
    loseIMG = loadImage("lose.jpg");
    resetIMG = loadImage("reset.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-100,displayHeight-200);
    canvas.position(50,50)
    policeTXT = createSprite(700,400,150,150);
    policeTXT.addImage(policeTXTIMG);
    policeTXT.visible = false;
    thiefTXT=createSprite(700,460,150,150);
    thiefTXT.addImage(thiefTXTIMG);
    thiefTXT.visible=false;
    thief  = createSprite(700,200,100,100);
    thief.addImage(thiefIMG);
    thief.debug = true;
    thief.scale=1.319
    thief.visible=false;
    police = createSprite(700,480,100,100)
    police.addImage(policeIMG);
    police.visible=false;
    cargroup = new Group();
}

function draw(){
    background(0);
    image(backgroundIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
    if(gameState === "start"){
        policeTXT.visible = true;
        policeTXT.scale = 0.5;
        thiefTXT.visible = true;
        thiefTXT.scale = 1.45;
        if(mousePressedOver(thiefTXT)){
            gameState= "play1";
            thief.visible=true;
        }else if(mousePressedOver(policeTXT)){
            gameState= "play2";
            police.visible = true
        }
    }
    else if(gameState=== "play1"){
    spwancar();
    policeTXT.visible = false;
    thiefTXT.visible = false;
    
    camera.position.x=thief.x;
    camera.position.y=thief.y;
   if(keyDown(UP_ARROW)){
       thief.y=thief.y-50
   }
   if(keyDown(LEFT_ARROW)&&thief.x!==230){
       thief.x = thief.x-25
   }
   if(keyDown(RIGHT_ARROW)&&thief.x>=330){
       thief.x=thief.x+25
   }
   if(thief.isTouching(cargroup)){
       gameState="end";
   }
    }else if(gameState==="play2"){
        spwancar();
        policeTXT.visible = false;
        thiefTXT.visible = false;
    
   camera.position.x=police.x;
   camera.position.y=police.y;
    if(keyDown(UP_ARROW)){
        police.y=police.y-50}
    
    if(police.isTouching(cargroup)){
        gameState="end";
    }}else if(gameState==="end"){
     lose = createSprite(camera.position.x,camera.position.y)
     lose.addImage(loseIMG)
     reset = createSprite(displayWidth-150,50);
     reset.addImage(resetIMG);
    }

    drawSprites();
}   
function spwancar(){
    if(frameCount%100===0){
car1 = createSprite(random(100,1200),camera.position.y-200)
car1.debug= true;
car1.setCollider("rectangle",0,0,200,350);
rand = Math.round(random(1,2))
if(rand===1){
    car1.addImage(car1IMG);
}else{
    car1.addImage(car2IMG)
}
car1.scale=0.45;
car1.velocityY = 2
cargroup.add(car1);
}}