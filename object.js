class Building{
    constructor(x,y,width,height){
        
        this.x= x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/b1.png")
        this.visible = 255;
        
     

        
     }   

   

    display(){
        

        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height)

    }

    invisible(){
        
        this.visible = this.visible-5;
        tint(255,this.visible)
        image(this.image,this.x,this.y,this.width,this.height)
        
    }

}
