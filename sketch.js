
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,50,50,500);
bob1 = new Bob(200,300,100);
bob2 = new Bob(300,300,100);
bob3 = new Bob(400,300,100);
bob4 = new Bob(500,300,100);
bob5 = new Bob(600,300,100);
rope1 = new String(bob1.body,roof.body,-100,0)
World.add(world,rope1);

rope2 = new String(bob2.body,roof.body,-50,0);
World.add(world,rope1);

rope3 = new String(bob3.body,roof.body,0,0);
World.add(world,rope1);

rope4 = new String(bob4.body,roof.body,50,0);
World.add(world,rope1);


rope5 = new String(bob5.body,roof.body,100,0);
World.add(world,rope1);




	Engine.run(engine);
  



}


function draw() {
  background(0)
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){

if (keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:90});

}



}

