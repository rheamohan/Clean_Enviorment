class Paper {
    constructor (x,y,radius){
        
        var options ={
            'isStatic' : false,
            'restitution' :0.5,
            'friction' : 0.5,
            'density' : 1.2
        }
        
       
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("Sprites/paper.png")
        World.add(world, this.body);
    }

    display(){
    
    var pos = this.body.position
    push ();
    ellipseMode(RADIUS);
    circle(pos.x, pos.y, this.radius, this.radius);
    imageMode(CENTER);
    image(this.image, 600, 610, this.radius,this.radius);
    pop ();
    }
    
};

