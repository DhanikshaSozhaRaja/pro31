const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var plinkos = [];
var particle =[];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(width/2,height,20);

  for (var a = 0; a<=width;a=a+80){
    divisions.push(new division(a,height-divisionHeight/2,10,divisionHeight));
  }
  for (var b = 75; b<=width;b=b+50){
    plinkos.push(new plinko(b,75));
  }
  for (var b = 50; b<=width-10;b=b+50){
    plinkos.push(new plinko(b,175));
  }
  for (var b = 75; b<=width;b=b+50){
    plinkos.push(new plinko(b,275));
  }
  for (var b = 50; b<=width-10;b=b+50){
    plinkos.push(new plinko(b,375));
  }
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  //drawSprites();
  for(var a=0;a<divisions.length;a++) {
    divisions[a].display();
  }
  for(var c=0;c<plinkos.length;c++) {
    plinkos[c].display();
  }
if (frameCount%60 === 0){
  particle.push(new particles(random(width/2-30,width/2+30),10,10))
}
for (var b=0;b<particle.length;b++){
  particle[b].display();
}
}