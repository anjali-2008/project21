var canvas;
var music;
var block1,block2,block3,block4;
var edge1,edge2,edge3,edge4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
    block1=createSprite(75,600,190,40);
    block1.shapeColor= "blue";
    block2=createSprite(290,600,190,40);
    block2.shapeColor= "green";
    block3=createSprite(500,600,190,40);
    block3.shapeColor= "yellow";
    block4=createSprite(720,600,190,40);
    block4.shapeColor= "red";

    //create box sprite and give velocity
    box=createSprite(random(20,750),550,30,30);
    box.shapeColor="white";
    box.velocityY=3;
    box.velocityX=3;

    //creating edges bcs that damn function is not working ～(　TロT)σ
    edge1=createSprite(400,1,800,3)
    edge2=createSprite(799,300,3,800)
    edge3=createSprite(400,600,800,3)
    edge4=createSprite(1,300,3,799)

   
}
function draw() {
    background("black");
    //how sad I have to create a complete codeline for edge sprites  /(ㄒoㄒ)/~~
    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4);

    if(block1.isTouching(box)){
        box.shapeColor="blue"
        box.velocityX=0
        box.velocityY=0
    }
    
    if(block2.isTouching(box)){
        box.shapeColor="green"
        music.stop();
    }
    
    if(block3.isTouching(box)){
        box.shapeColor="yellow"
        music.play();
    }

    if(block4.isTouching(box)){
        box.shapeColor="red"
    }

//finally this thing is complete  o(*￣▽￣*)o
drawSprites();
}
