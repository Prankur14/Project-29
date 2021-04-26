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
var sling;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  bounceSound = loadSound('bounce.mp3');

   poly = new Polygon(110,190, 50, 50)

   slingline = new Slingshot(poly.body, {x: 110, y: 190});
   
   pressSpace = new SpaceBar(450, 37, 500, 60)

  //level one
  block1 = new Block(300,275,30,40);
  
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

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
slingline.display();
  poly.display();

  poly.sound();
  
  // pressSpace.display()
  
  /*if(poly.isTouching(stand1)){
    bounceSound.play;

  }*/
  
  
  // poly.bounceOff(edges)





/* I TRIED DOING SOMETHING WITH THE SPACEBAR.JS CLASS, BUT ID DIDN'T WORK......(UNFORTUNATELY);
GOT TO ASK IT........
btw, what i was trying to do is i wanted that a new class, namely SpaceBar would "EXIST", and it would serve nothing but as an image, for 
images currently dont want to work (MAYBE BECAUSE OF HALF SALARY XD) and i wanted it such that whenever the so called POLYGON has its speed
below 3(PIXELS/METERS per second idk take it as whatever you want), then an image should pop up and it should have tint such that it 
should be visible,,,,then invisible,,,,then again visible,,,,(AND SO ON, YOU GET IT....) and it should say (btw, you can check it out 
  its name is press_space.png) "PRESS SPACE TO RESET THE POLYGON". but, as you might have guessed, it didn't work, it gave my last 3 
  brain cells a load of tension, and leading to their expiry even though it was 66 years from now... They say, you can use expired items 
  for a month more, and thats what i did. Though, i enjoy coding 
  (MAKE SURE ITS ONLY YOU PRANKUR WHO IS READING THIS, IF YOU ARE NOT, THEN PLEASE BURN YOUR COMPUTER AND REPORT IT AS IT IS A MISTAKE)
  FOLLOW DRY PRINCIPLE. This message is meant to be deleted. this is only for the rememberence (dont mind if wrong spelling) as my last
  brain cells have expired, and as usual, the QUESTION "ASK YOUR DOUBTS" is the time when my brain cells want to watch movie instead 
  of remembeing(once again, dont mind the spelling) the doubts. Its just like the hardest question in the world, TELL ME SOMTETHING ABOUT
   YOU.
  this article(or whatever i just wrote it for fun) is subjedted (again, dont mind the spelling) to REMOVANCE(again and again, dont mind
    spellings) as it will help me to remember what i have to ask to .... what was her name? idk see in the top right when you join the 
    class...... (it maybe starts with A).... so yeah! remove this above $@&! as soon as you ask the doubt and further continue.
    */ 



}

function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
slingline.fly();


}
function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(poly.body, {x: 110, y: 190});
  slingline.attach(poly.body)


}
}
