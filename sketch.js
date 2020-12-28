
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	

	engine = Engine.create();
	world = engine.world;

    paper1= new Paper(100,200,20,20);
	ground1= new Ground(600,365,1200,10);
	dustbin1 =new Dustbin(1100,300,20,100);
	dustbin2= new Dustbin(1000,300,200,20);
	dustbin3 = new Dustbin(900,300,20,100);







	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  KeyPressed();
  drawSprites();
 paper1.display();
 ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}


function KeyPressed (){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85});

}


}

