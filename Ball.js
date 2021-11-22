class Ball {
  constructor(x, y, r) {
    var options = { 
      density: 1, 
      };

    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
   
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(cartImg, 0, 0, this.width, this.height);
    pop();
  }
}
