class plinko {
    constructor(x,y) {
      var options = {
          restitution: 1,
          friction: 0,
          isStatic: true
      }
      this.r=10;
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var ang =this.body.angle;
push();
translate(pos.x,pos.y);
rotate(ang);
fill("orange");
 imageMode(CENTER);     
noStroke();   
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r); 
pop();
     
    }
  };