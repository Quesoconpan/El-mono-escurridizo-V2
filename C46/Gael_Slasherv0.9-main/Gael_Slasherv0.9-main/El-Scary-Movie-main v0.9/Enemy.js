class Enemy extends baseClass {

    constructor(x,y,width,height) {
    super(x,y,width,height);
    this.image = loadImage("Enemy malecho.png");
}
    display(){
        super.display();
    }
    
    }