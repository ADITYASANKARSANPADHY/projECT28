
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8, mango9,mango10;
var world,boy,tChain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2= new mango(1000,100,30);
	mango3= new mango(1050,130,30);
	mango4= new mango(1200,200,30);
	mango5= new mango(970,180,30);
	mango6= new mango(1060,230,30);
	mango6.scale = 0.6;
	mango7= new mango(1130,180,30);
	mango7.scale = 0.9;
	mango8= new mango(1111,30,30);
	mango9= new mango(1111,130,30);
	mango9.scale = 0.8;
	mango10= new mango(950,250,30);
	mango10.scale = 0.7;

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new Stone(240,410,30);
	
	tChain = new Slingshot(stoneObj.body,{x: 240,y:4100});
	Engine.run(engine);

}

function draw() {

  background("lightBlue");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();
  stoneObj.display();
  tChain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	tChain.fly();
}
