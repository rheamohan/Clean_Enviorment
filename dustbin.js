
class Dustbin{
    constructor(x,y,width,height){
         var options={
             isStatic: true,
             restitution:0.3,
             friction:0.7
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/dustbin.png");
        World.add(world,this.body);
    }
 
    display(){
        var pos = this.body.position
        push ();
        fill ("red");
        stroke ("red");
        rectMode(CENTER);
        rect(pos.x ,pos.y,this.width,this.height);
        imageMode (CENTER);
        image(this.image,640,550,240,240);
        
        pop ();
    }
};