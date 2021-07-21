var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var balloonsGroup;
var arrowsGroup;

var select_balloon;

var score = 0;

var END = 1;
var PLAY = 0;
var gameState = PLAY;

function preload()
{  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png"); 

  balloonsGroup = new Group();
  
  arrowsGroup = new Group();
}

function setup() 
{
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

}

function draw() 
{
 background(190);

  if(gameState===PLAY)
  {
    // moving ground
    scene.velocityX = -3 

    if (scene.x < 0)
    {
      scene.x = scene.width/2;
    }
    
    //moving bow
    bow.y = World.mouseY
    
    // release arrow when space key is pressed
    if (keyDown("space"))
    {
      createArrow();
    }

    //spawning balloons
    if (World.frameCount % 100 === 0)
    {
      select_balloon = Math.round(random(1,4));
    
      switch(select_balloon)
    
      {
        case 1: redBalloon();
                break;
    
        case 2: blueBalloon();
                break;
                  
        case 3: greenBalloon();
                break;
    
        case 4: pinkBalloon();
                break;
    
        default: break;
      }
    }
  }
  if(gameState == END)
  {
    scene.velocityX = 0;
    balloonsGroup.setvelocityXEach(0);
    arrowsGroup.setvelocityXEach(0);
  }

  if(balloonsGroup.isTouching(arrowsGroup))
  {
    score += 1;
    balloonsGroup.destroyEach();
    arrowsGroup.destroyEach();
  }
  
  drawSprites();

  //score
  text("Score: "+score,300,40);
}


// Creating  arrows for bow
 function createArrow()
 {
  if(frameCount%10 == 0)
  {
    var arrow= createSprite(100, 100, 60, 10);
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.y=bow.y;
    arrow.velocityX = -6;
    arrow.lifetime = 80;
    arrow.scale = 0.2;
    arrowsGroup.add(arrow);
  }
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  balloonsGroup.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  balloonsGroup.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  balloonsGroup.add(green);
}

function pinkBalloon() 
{
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;
  balloonsGroup.add(pink);
}
