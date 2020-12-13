const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground;
var paper,paperImg;

var dustbin1,dustbin2,dustbin3;

function preload(){	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);

    dustbin1 = new Dustbin (640,659,190,20);
	dustbin2 = new Dustbin (540,566,20,205);
	dustbin3 = new Dustbin (740,566,20,205);
	
	paper = new Paper(70,500,20);
	
	

	


	Engine.run(engine);
}


function draw() {
  background("red");
  Engine.update(engine);

  rectMode(CENTER);

	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	paper.display();


	 
	

	

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-80})
	}
	
}
