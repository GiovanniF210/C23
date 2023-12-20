
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball1, ball2, ball3, ball4, ball5, block1, block2, giro1, giro2, giro3; 
var angle1 = 60, angle2 = 60, angle3 = 60;

function setup() {
	createCanvas(550, 600);

	engine = Engine.create();
	world = engine.world;

	var options = {isStatic: true}

	ground = Bodies.rectangle (600, height, 1200, 20, options)
	World.add(world, ground)
	block1 = Bodies.rectangle (100, 400, 150, 20, options)
	World.add(world, block1)
	block2 = Bodies.rectangle (400, 400, 150, 20, options)
	World.add(world, block2)
	giro1 = Bodies.rectangle (250, 200, 150, 20, options)
	World.add(world, giro1)
	giro2 = Bodies.rectangle (250, 200, 150, 20, options)
	World.add(world, giro2)
	giro3 = Bodies.rectangle (250, 200, 150, 20, options)
	World.add(world, giro3)

	var options2 = {
		restitution:0.5,
		friction:0.02
	}

	ball1 = Bodies.circle (220, 10, 15, options2)
	World.add(world, ball1)
	ball2 = Bodies.circle (225, 10, 15, options2)
	World.add(world, ball2)
	ball3 = Bodies.circle (230, 10, 15, options2)
	World.add(world, ball3)
	ball4 = Bodies.circle (235, 10, 15, options2)
	World.add(world, ball4)
	ball5 = Bodies.circle (240, 10, 15, options2)
	World.add(world, ball5)

	fill ("red")
	rectMode(CENTER)
	ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.run(engine);

  rect(ground.position.x, ground.position.y, 1200, 20)
  rect(block1.position.x, block1.position.y, 150, 20)
  rect(block2.position.x, block2.position.y, 150, 20)

	ellipse(ball1.position.x, ball1.position.y, 15)
	ellipse(ball2.position.x, ball2.position.y, 15)
	ellipse(ball3.position.x, ball3.position.y, 15)
	ellipse(ball4.position.x, ball4.position.y, 15)
	ellipse(ball5.position.x, ball5.position.y, 15)

	Matter.Body.rotate(giro1, angle1)
	push ()
	translate (giro1.position.x, giro1.position.y)
	rotate(angle1)
	rect(0, 0, 150, 20)
	pop ()
	angle1 += 0.3

	Matter.Body.rotate(giro2, angle2)
	push ()
	translate (giro2.position.x, giro2.position.y)
	rotate(angle2)
	rect(0, 0, 150, 20)
	pop ()
	angle2 += 0.6

	Matter.Body.rotate(giro3, angle3)
	push ()
	translate (giro3.position.x, giro3.position.y)
	rotate(angle3)
	rect(0, 0, 150, 20)
	pop ()
	angle3 += 0.9

}



