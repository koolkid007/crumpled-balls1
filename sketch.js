const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new paper(170,200);
	ground = new ground(400,670,800,20);
  dustbin = new dustbin(620,650,150,20);
  /*db1 = new dustbin(690,560,10,170);
	db2 = new dustbin(555,560,10,170);
  db3 = new dustbin(620,655,140,10);*/
  

  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y: -85});
	
  }
}




