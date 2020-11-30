const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;
const Constraint = Matter.Constraint;

var base1,base2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

var world;
var engine;
var  polygon;
var polygonImage;
var score=0;
function preload(){
 var polygonImage= loadImage("polygon.png");
}


function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  //base1 = new Ground (350,775,600,10);
  base2= new Ground(600,550,600,10);
//level 1
  block1= new Box(635,400,30,40);
//level 2
  block2= new Box(605,440,30,40);
  block3= new Box(635,440,30,40);
  block4= new Box(665,440,30,40);
//level 3
  block5= new Box(575,480,30,40);
  block6= new Box(605,480,30,40);
  block7= new Box(635,480,30,40);
  block8= new Box(665,480,30,40);
  block9= new Box(695,480,30,40);
  //level 4
  block10= new Box(555,520,30,40);
  block11= new Box(575,520,30,40);
  block12= new Box(605,520,30,40);
  block13= new Box(635,520,30,40);
  block14= new Box(665,520,30,40);
  block15= new Box(695,520,30,40);
  block16= new Box(725,520,30,40);
  

polygon= Bodies.circle(50,400,20);
World.add(world,polygon);

slingShot= new SlingShot(this.polygon,{x:150, y :400})


 
}

function draw() {

  Engine.update(engine);
 
  getTime();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  base2.display();
 


  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();;
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  

  text("Score:"+ score,50,50);
  ellipseMode(RADIUS)
  ellipse(polygon.position.x,polygon.position.y,20,20);
  
  
  
  

  drawSprites();
  slingShot.display();
 
 
}

function mouseDragged(){
  
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
  slingShot.fly();
}


function keyPressed(){
if(keyCode === 32){
  slingShot.attach(this.polygon);
}
}
async function getTime(){
var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var jsonFormat = await response.json();
  var dayTime = jsonFormat.currentDateTime;
  var hour = dayTime.slice(11,13);
console.log("hour= " + hour);
  if (hour > 6 && hour < 18) {
    background(0)
   }
   else {
       
    background(255)
   }
}
