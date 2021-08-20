const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var bob1 , bob2 , bob3 , bob4 , bob5 


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;


	
	var roof_options={
		isStatic:true			
	}

	var bob1_options = {
		restitution: 0.95,
		isStatic:true
	  }

	  var bob2_options = {
		restitution: 0.95,
		isStatic:true
	  }

	  var bob3_options = {
		restitution: 0.95,
		isStatic:true
	  }

	  var bob4_options = {
		restitution: 0.95,
		isStatic:true
	  }

	  var bob5_options = {
		restitution: 0.95,
		isStatic:true
	  }

	roof = Bodies.rectangle(400,100,230,100,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(220,200,20,bob1_options);
  World.add(world,bob1);

  bob2 = Bodies.circle(320,200,20,bob2_options);
  World.add(world,bob2);

  bob3 = Bodies.circle(420,200,20,bob3_options);
  World.add(world,bob3);

  bob4 = Bodies.circle(520,200,20,bob4_options);
  World.add(world,bob4);

  bob5 = Bodies.circle(650,200,20,bob5_options);
  World.add(world,bob5);



  

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,720,20);

  //call display() to show ropes here
  rope.display()

 
  
  //create ellipse shape for multiple bobs here

  ellipse(bob1.position.x,bob1.position.y,20);

  ellipse(bob2.position.x,bob2.position.y,20);

  ellipse(bob3.position.x,bob3.position.y,20);

  ellipse(bob4.position.x,bob4.position.y,20);

  ellipse(bob5.position.x,bob5.position.y,20);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed (){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(bob1,bob1.position , {x : 85, y : -85})
	  }
  }
