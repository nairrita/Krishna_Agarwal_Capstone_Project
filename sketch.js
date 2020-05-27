

var gif;
var n = 5
var p = 5
var bg;


function preload(){
  bg = loadImage("assets/sample.png");
}


function setup() {
  createCanvas(1200, 400)
  gif = createImg('assets/Trex.gif');
  gif.position(n,p)
  fake = createSprite(n+200,p,100,100)

building = new Building(400,200,100,100)
  //fake.visible = false;

}

function draw() {
  background(bg);
 
  if(keyIsDown(RIGHT_ARROW)){
    gif.position(n,0)
    fake.x = fake.x + 3
  }
  

  if(keyIsDown(DOWN_ARROW)){
    gif.position(null,n)
    fake.y = fake.y+3
  }

  else if(keyIsDown(LEFT_ARROW)){
    gif.position(p,0)
    fake.x = fake.x - 3
  }
   
  else if(keyIsDown(UP_ARROW)){
    gif.position(0,p)
    fake.y = fake.y - 3
  }
 n= n+2;
 p = p-2;

 if(n >=1200){
   n = 20
 }

 if(fake.x>1200){
   fake.x=20;
 }

 if(p>=400){
   p=50;
 }

 if(fake.y>400){
   fake.y=50;
 }
 building.display();

 //if(fake.hit(building)){
   //building.invisible();
 //}
 drawSprites();

}


//to create hit function
