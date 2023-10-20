
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftside;
var rightside;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);

	

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.

	ball = Bodies.circle(50,60,20,ball_options);

	World.add(world,ball);

	Engine.run(engine);

	groundObj =new Ground(width/2,670,width,20);
	rightside = new Ground(670,600,20,120);
	leftside = new Ground(1100,600,20,120);

  ellipsMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);

  drawSprites();
  ball.display();
  groundObj.display();
  rightside.display();
  leftside.display()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:0});
	}
}

