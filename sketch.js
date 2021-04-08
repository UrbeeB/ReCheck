const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4;
var roof;
var rope1;
var bob1Diameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(250, 600, 100);
    bob2 = new Bob(350, 600, 100);
    bob3 = new Bob(450, 600, 100);
    bob4 = new Bob(550, 600, 100);
	  roof = new Roof(400, 100, 400, 30);
    rope1 = new Rope(bob1.body, roof.body, -bob1Diameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope1.display();

  drawSprites();
 
}



