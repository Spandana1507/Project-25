
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20)
	dustbinObject = new dustbin(700,670)
	paper = new Paper(100,600,10)


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine)
  paper.display()
  ground.display()
  dustbinObject.display()
  
  
  
 keyPressed() 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body , paper.body.position,{x:15, y:-15})
	}
}


