class Box {
  constructor(x, y, w, h) {
    var options = {
        'density':1,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
  
    push();
    translate(pos.x, pos.y);
    //rotate(this.body.angle)
    imageMode(CENTER);
    image(boyImg, 0, 0, this.width, this.height);
    pop();
  }
}