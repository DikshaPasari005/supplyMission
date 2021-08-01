var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var container1,container2,contaner3,container4




function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false
	packageSprite.debug = true

	container1 = createSprite(200,600,20,120);
	container1.shapeColor = "red";

	container2 = createSprite(250,550,100,20);
	container2.shapeColor = "red";

	container3 = createSprite(300,585,20,90);
	container3.shapeColor = "red";

	container4 = createSprite(340,635,100,20);
	container4.shapeColor = "red";


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	Matter.Body.setStatic(packageBody,false);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  /*packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y */

  drawSprites();
  packageSprite.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//packageSprite.x = packageBody.x;
	//packageSprite.y = packageBody.y;
	packageSprite.velocityY = 5;
	packageSprite.visible = true    
  }


  if(keyCode === LEFT_ARROW)
  {
	  helicopterSprite.VeloctiyX = -5;
	}

	if(packageSprite.isTouching(container4))
	{
		packageSprite.velocityY = 0;
		packageSprite.shapeColor = "black";
		Text("package recieved",200,200);
		fontSize = 25;
	}
}



