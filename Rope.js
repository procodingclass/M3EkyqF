class Rope {
  constructor(firstBody, secondBody) {
    var options = {
      bodyA: firstBody,
      bodyB: secondBody,
      stiffness: 0.5,
      length: 200
    };

  
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  
  display() {
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      line(pointB.x, pointB.y, pointA.x, pointA.y);
    
  }
}

