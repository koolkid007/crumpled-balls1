class dustbin {
  constructor(x,y,width,height) {

    var options = {
      isStatic: true  
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.leftWall = Bodies.rectangle(x-width/2,y-height/2-30,15,100,options);
    this.rightWall = Bodies.rectangle(x+width/2,y-height/2-30,15,100,options);

    this.image = loadImage("dustbin.png");
    World.add(world,this.body);
    World.add(world,this.leftWall);
    World.add(world,this.rightWall);
  }

  display() {
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop();
    
    var posL = this.leftWall.position
    push();
    translate(posL.x, posL.y);
    rectMode(CENTER);
    rect(0,0, 15,100);
    pop();

    var posR = this.rightWall.position
    push();
    translate(posR.x, posR.y);
    rectMode(CENTER);
    rect(0,0, 15,100);
    pop();
    

  }

}
