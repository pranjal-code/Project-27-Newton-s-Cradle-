
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

const Render = Matter.Render;
const Constraint = Matter.Constraint;

//creating bob objects
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
//rope objects
var rope1,rope2,rope3, rope4,rope5;


function setup() 
{
	createCanvas(2000, 800);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//roof dimensions
	roofObject = new roof(width/2,height/4,width/7,30);
	bobDiameter=60;

	//bob starting position (x and y)
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	//imp* ( each bob positions related )
	bobObject1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);

	bobObject3 = new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4 = new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	
	//Create a Ground

	var render = Render.create
	({
	  element : document.body,
	  engine : engine,

	  options: 
		{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	//adding rope between bob and roof. rope class
 
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 1)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)

	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	//running engine
	Engine.run(engine);
	
  
}


function draw() 
{
  
  
  rectMode(CENTER);
  background(255, 196, 184);

  //displaying
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	

}

//movement
function keyPressed() 
{
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-170,y:-185});

  	}
}

//constaint for bob
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position
	roofBodyOffset=constraint.pointB;
	
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	

	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



