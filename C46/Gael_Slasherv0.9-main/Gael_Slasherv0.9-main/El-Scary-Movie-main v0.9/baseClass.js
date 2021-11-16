class baseClass {
constructor(x,y,width,height,angle){
var options = {
    'restitution':0.1,
    'friction':0.1,
    'density':0.1
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("BetaBackground.jpg");
this.imageJump = loadImage("sprites/Ghostface (The Killer)/Slasher07.png");
this.imageKill = loadImage("sprites/Ghostface (The Killer)/Slasher02.png");
this.imageKill2 = loadImage("sprite/Ghostface (The Killer)/Slasher09.png");

World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}

Jump(){
    this.body.position.y = this.body.position.y -15;
}

Moveset(){
this.body.position.x = this.body.position.x +0.5;
}

Moveset2(){
this.body.position.x = this.body.position.x -1;    
}

Kill(){
image(this.imageKill,0,0,this.width,this.height);
}

Kill2(){

}

}