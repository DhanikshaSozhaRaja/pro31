class particles {
    constructor(x,y,r) {
      var options = {
          restitution: 0.4,
         
      }
      this.r=r;
      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var ang =this.body.angle;
push();
translate(pos.x,pos.y);
rotate(ang);
fill(this.color);  
noStroke();   
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r); 
pop();
     
    }
  };