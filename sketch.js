var bobObject1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(320, 450, 20);
	bobObject2 = new Bob(360, 450, 20);
	bobObject3 = new Bob(400, 450, 20);
	bobObject4 = new Bob(440, 450, 20);
	bobObject5 = new Bob(480, 450, 20);
	
	roof = new Roof(400, 300, 200, 20);	

	rope1 = new Chain(bobObject1.body, roof.body, -80, 0);
	rope2 = new Chain(bobObject2.body, roof.body, -40, 0);
	rope3 = new Chain(bobObject3.body, roof.body, 0, 0);
	rope4 = new Chain(bobObject4.body, roof.body, 40, 0);
	rope5 = new Chain(bobObject5.body, roof.body, 80, 0);
	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#A9C9ED");

  	rope1.display();
 	rope2.display();
  	rope3.display();
  	rope4.display();
  	rope5.display();

    bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof.display();


	drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		//bobObject1.body.position.x = 100;
		//bobObject1.body.position.y = 200;

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -0.07, y: 0.01})



	}
}


