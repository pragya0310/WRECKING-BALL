class blocks{
constructor(x,y,w,h){
    this.w=w
    this.h=h
    this.body=Matter.Bodies.rectangle(x,y,w,h);

Matter.World.add (YW,this.body)
}
display(){
    push();
    rectMode(CENTER);
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
rect(0,0,this.w,this.h)
pop();
}


}