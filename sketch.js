
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var Tree1, stone1,ground1, launcher1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone1=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	Tree1=new Tree1(1050,580);
	ground1=new ground(width/2,600,width,20);
	launcher1=new launcher(stone1.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  

  Tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone1.display();

  ground1.display();
  launcher1.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  launcher1.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }