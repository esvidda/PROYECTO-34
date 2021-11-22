const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

var batgirl, batgirlImg;

var score=0;

function preload(){

  //imagen de la pelota
  //polygon_img=loadImage("polygon.png");
  //A
  polygon_img=loadImage("image/batarang.png");
  batgirlImg =loadImage("image/hero.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(690,260,250,10);
  //stand2 = new Stand(700,200,200,10);
 
  //B
 batgirl=createSprite(140,280,10,10);
 batgirl.addImage(batgirlImg);
 batgirl.scale = 0.33;

  //nivel uno
  block1 = new Block(600,235,30,40);
  block2 = new Block(630,235,30,40);
  block3 = new Block(660,235,30,40);
  block4 = new Block(690,235,30,40);
  block5 = new Block(720,235,30,40);
  block6 = new Block(750,235,30,40);
  block7 = new Block(780,235,30,40);
  //nivel dos
  block8 = new Block(630,195,30,40);
  block9 = new Block(660,195,30,40);
  block10 = new Block(690,195,30,40);
  block11 = new Block(720,195,30,40);
  block12 = new Block(750,195,30,40);
  //nivel tres
  block13 = new Block(660,155,30,40);
  block14 = new Block(690,155,30,40);
  block15 = new Block(720,155,30,40);
  //parte superior
  block16 = new Villana(690,115,30,40);

  //1 crear y agregar al mundo una pelota
  ball = Bodies.circle(250,200,15);
  World.add(world, ball);

  //2 crear un resorte para lanzar la pelota
  //Recuerda que lo logramos con una restricción
  //entre un cuerpo y un punto
  slingShot= new Slingshot(this.ball, {x:250, y:200});

}
function draw() {
  background(56,44,44); 
  
  textSize(20);
  fill("lightyellow");
  noStroke();
  text("Puntuacion: " + score,600,50);

  
  
  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  //E
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  imageMode(CENTER);
  //image(polygon_img, ball.position.x, ball.position.y, 30,30);
  //C
  image(polygon_img, ball.position.x, ball.position.y, 80,80);

  slingShot.display();
  drawSprites();
}

//4
// function mouseDragged(){
//   Matter.Body.setposition(this.ball, {x:mouseX, y:mouseY});
// }
 function mouseDragged(){
   Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
 }
// function mouseDragged(){
//   Matter.setPosition(this.ball, {x:mouseX, y:mouseY});
// }


//5
// function mouseReleased(){
//   slingShot.fly;
// }
function mouseReleased(){
   slingShot.fly();
}
// function mouseReleased(){
//   slingShot.fly(sling);
// }




//10
// function keyPressed(){
//   if(keyCode === 32){
//     slingShot.attach(ball);
//   }
// }
// function keyCode(){
//   if(keyPressed === 32){
//     slingShot.attach(this.ball);
//   }
// }
 function keyPressed(){
   if(keyCode === 32){
     slingShot.attach(this.ball);
      }
    }