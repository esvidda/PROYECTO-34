class Villana {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.02
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity = 255;
    //7
    this.image = loadImage("image/villana.png");
    // this.image = image("image/estrella.png");
    // image = loadImage("image/estrella.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    if (this.body.speed < 3) {
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width+35, this.height+70);
    }
    else {
      //8
      World.remove(world, this.body);
      // World.quit(world, this.body);
      // World.remove(this.body);
      push();
      this.visiblity = this.visiblity - 10;
      //9
      // tint(255, 0);
      // tint(255, visiblity);
      tint(255, this.visiblity);
      image(this.image, pos.x, pos.y, this.width+35, this.height+70)
      pop();
    }
  }
  //D
  // score(){
  //   if(this.visiblity > 0 && this.visiblity > -1005) score--;
  // }

   score(){
     if(this.visiblity < 0 && this.visiblity > -1005) score+=200;
   }

  // score(){
  //   if(visiblity < 0 && visiblity > -1005) score++;
  // }
}
