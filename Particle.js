class Particle{
    constructor(x, y, radius) {
        var options = {
            restitution:0.4, 
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color=color(random(0, 255), random(0,255), random(0,255));
        World.add(world, this.body);
        this.radius = radius;
      }
      display(){
        var pos;
        var angle;
        angle = this.body.angle;
        pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
    }
  