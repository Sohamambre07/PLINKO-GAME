const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var plinko=[]
var division=[]
var particle= []



function setup() {
  createCanvas(480,800);
  
  engine= Engine.create()
  world= engine.world

  Engine.run (engine)

ground1= new Ground(20,780,480,20)
ground2= new Ground(0,00,20,800)
ground3= new Ground(460,00,20,800)

// create division
for(i=16;i<480;i=i+65)
{
division.push(new Division(i,650))
}

// create plinko 
for(i=0;i<innerWidth;i=i+50)
{
plinko.push(new Plinko(i,50))
}

// plinko row 2
for(i=30;i<=innerWidth;i=i+50)
{
plinko.push(new Plinko(i,150))
}

// plinko row 3
for(i=50;i<width;i=i+50)
{
plinko.push(new Plinko(i,250))
}

// plinko row 4
for(i=30;i<width;i=i+50)
{
plinko.push(new Plinko(i,350))
}

// plinko row 5
for(i=20;i<width;i=i+50)
{
plinko.push(new Plinko(i,450))
}


}

function draw() {
  background(0);  
  drawSprites();

  
ground1.display();
ground2.display()
ground3.display()
  
// particle creation
if( frameCount% 30===0)
{
   particle.push( new Particle())
}
   
// particle display

for(i=0;i<particle.length;i++)
{
particle[i].display()
}

//division display
for(i=0;i<division.length;i++)
{
  division[i].display();
}

// plinko display
for(i=0;i<plinko.length;i++)
{
plinko[i].display()
}
}