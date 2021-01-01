const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1,tree1,stone,launcherObj;
var mango1, mango2,mango3,mango4, mango5, mango6;
var mango7,mango8,mango9,mango10,mango11,mango12;
function preload()
{
	 treeImg=loadImage("tree.png")
	 boyImg=loadImage("boy.png")
	 bgImg=loadImage("bg.jpg")
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;
	 
	//Create the Bodies Here.
	stone= new Stone(390,345,30)
	
	//#leaveline
	mango1 = new Fruit(1100,150,30);
    mango2 = new Fruit(1170,130,30);
	mango3 = new Fruit(1010,140,30);
	mango4 = new Fruit(1000,70,30);
	mango5 = new Fruit(1100,70,30);
	mango6 = new Fruit(1000,230,30);
	//leave a line for neatness
	mango7 = new Fruit(900,230,30);
	mango8 = new Fruit(1140,150,30);
	mango9 = new Fruit(1090,200,30);
	mango10 = new Fruit(1200,200,30);
	mango11 = new Fruit(1050,250,30);
	mango12 = new Fruit(900,160,30);

	tree1=createSprite(1050, 280, 450, 600)
	tree1.addImage(treeImg)
	tree1.scale=0.5;
	World.add(world,tree1)

	ground1 = Bodies.rectangle(width/2, 600, width, 20 , {isStatic: true});
  World.add(world, ground1)
	launcherObj= new launcher(stone.body,{x:390,y:355})
}
function draw() {
  background(bgImg);
  
  Engine.update(engine)
  image(boyImg, 350, 273, 200, 300);
  drawSprites()
  
  tree1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 mango10.display()
 mango11.display()
 mango12.display()
 stone.display()
 
 rectMode(CENTER);
 fill(0,255,0);
 rect(ground1.position.x, ground1.position.y, width, 40);
 launcherObj.display()
 detectCollision(stone, mango1);
 detectCollision(stone, mango2);
 detectCollision(stone, mango3);
 detectCollision(stone, mango4);
 detectCollision(stone, mango5);
 detectCollision(stone, mango6);
 detectCollision(stone, mango7);
 detectCollision(stone, mango8);
 detectCollision(stone, mango9);
 detectCollision(stone, mango10);
 detectCollision(stone, mango11);
 detectCollision(stone, mango12);
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}); 
}

function mouseReleased()
{
	launcherObj.fly();
}
function keyPressed() {

  if (keyCode === 32) 
  {
    Matter.Body.setPosition(stone.body, {x:390, y:355});
	  launcherObj.attach(stone.body);
	}
}

function detectCollision(lstone, lmango)
{
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance <= lmango.radius + lstone.radius)
  {
  	  Matter.Body.setStatic(lmango.body, false);
  }
}