class Dino{
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("trex-1.png")
    this.gif = createImg("assets/Trex.gif");
   this.fake = createSprite(this.x,this.y,this.width,this.height)
  
    
    }

    move(){
        this.x = this.x + 5;
        this.y = this.y+5;
    }
    
    display(){
   
    this.fake.x = dino.x-170;
    this.fake.y = dino.y - 20;
    this.fake.width = dino.width-100;
    this.fake.height = dino.height - 100;

       
       this.gif.size(150,150)
       imageMode(CENTER)
       image(this.image,this.x-100,this.y,this.width-100,this.height-100)
       
   
    }
}