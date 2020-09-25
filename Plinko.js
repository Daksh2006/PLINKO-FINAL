class Plinko{
  constructor(x,y,radius) {
      var options = {
          restitution:0.1,
          isStatic:true 
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      this.radius = radius;
    }
    display(){
      var pos;
      pos = this.body.position;
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }
