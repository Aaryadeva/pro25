
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paperBall=new Paper(100,350);
  ground=new Ground(400,580,800,20);
 // dustbin1=new Dustbin(600,563,100,15);
 // dustbin2=new Dustbin(550,500,5,135);
  dustbin=new Dustbin(650,500,135,135);
  wall1=new Wall(550,500,10,125)
  wall2=new Wall(650,500,10,125)
  keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  //dustbin1.display();
  //dustbin2.display();
  paperBall.display();
  dustbin.display();
  wall1.display()
  wall2.display()
  
  rect(550,500,10,125)
  rect(650,500,10,125)
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Body.applyForce(paperBall.body,paperBall.body.position,{x:98,y:-98});
  }
}


