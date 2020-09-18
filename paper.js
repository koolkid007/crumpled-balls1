class paper {
  constructor(x,y) {
    var options ={
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
   } 

    this.body = Bodies.circle(x, y, 25, options);
    //this.image = loadImage("paper1.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("aqua");
    stroke("aqua");
    ellipseMode(RADIUS);
    ellipse(0,0,25,25);
    pop();
   }
};


  



  


