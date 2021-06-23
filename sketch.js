
var music;
var s1,s2,s3,s4;
var box;

var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   createCanvas(800,600)


    //create 4 different surfaces
 s1=createSprite(100,550,170,20);
 s1.shapeColor='blue';
 s2=createSprite(280,550,170,20);
 s2.shapeColor='red';
 s3=createSprite(460,550,170,20);
 s3.shapeColor='orange';
 s4=createSprite(640,550,170,20);
 s4.shapeColor='green';




    //create box sprite and give velocity
    box=createSprite(400,75)
    box.velocityX=5

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges=createEdgeSprites();

drawSprites();

}
