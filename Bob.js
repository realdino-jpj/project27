class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0,
          density:1.2
      }

      this.body = Bodies.circle(x,y,25,options);
      this.radius = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, 25,25);
    pop();
    }
  }