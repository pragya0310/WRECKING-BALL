const W1=Matter.World,
E=Matter.Engine,
B=Matter.Bodies,
C=Matter.Constraint;

var YW,YE,WB;
var cons;
var block1;
function setup(){
createCanvas(800,800);

YE=Matter.Engine.create()
YW=YE.world

WB=Matter.Bodies.circle(200,200,100,{density:1})

block1=new blocks(400,50,50,50);
block2=new blocks(400,100,50,50);
block3=new blocks(400,150,50,50);
block4=new blocks(400,200,50,50);
block5=new blocks(400,250,50,50);
block6=new blocks(400,300,50,50);
block7=new blocks(400,350,50,50);
block8=new blocks(400,400,50,50);
block9=new blocks(400,450,50,50);
block10=new blocks(400,500,50,50);
block11=new blocks(400,550,50,50);
block12=new blocks(500,600,50,150);
block13=new blocks(500,750,50,150);

ground=Matter.Bodies.rectangle(400,790,800,20,{isStatic:true})

cons=Matter.Constraint.create({
pointA:{x:200,y:100},
bodyB:WB,
stiffness:1,
length:300

})
Matter.World.add(YW,[WB,cons,ground])
}
function draw(){
background("cyan");
Matter.Engine.update(YE)
ellipseMode(RADIUS)
ellipse(WB.position.x,WB.position.y,100)
rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,20)
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
line(cons.pointA.x,cons.pointA.y,WB.position.x,WB.position.y)
textSize(20)
text("WRECKING BALL\n press up arrow key to move the wrecking ball",100,50)
}
function keyPressed(){
    if(keyCode==UP_ARROW){
        Matter.Body.applyForce(WB,WB.position,{x:500,y:500})
    }
}