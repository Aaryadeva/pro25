class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        fill("green");
        /*rectMode(CENTER);
        rect(this.image,this.body.position.x,this.body.position.y,this.width,this.height)*/
        imageMode(CENTER);
        image(this.image,600,500,100,140);
    }
}