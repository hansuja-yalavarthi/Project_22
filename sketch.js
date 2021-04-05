var starImg, fairyImg, bgImg;
var star, starBody;
var fairy, fairyImg;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  starImg = loadImage("star.png");
  bgImg = loadImage("starNight.png");
  fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
  music = loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  music.play();

  fairy = createSprite(100, 600);
  fairy.addAnimation("fairyImage", fairyImg);
  fairy.scale = 0.15;

  star = createSprite(750, 50);
  star.addImage(starImg);
  star.scale = 0.2;

  engine = Engine.create();
  world = engine.world;
  starBody = Bodies.circle(650, 30, 5, {
    restitution: 0.5,
    isStatic: true
  });
  World.add(world, starBody);



  Engine.run(engine);



}


function draw() {
  background(bgImg);
  drawSprites();
}

function keyPressed() {

  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(starBody, false);
  }

  if (keyPressed("LEFT_ARROW")) {
    fairy.x = fairy.x - 5;
  }

  if (keyPressed("RIGHT_ARROW")) {
    fairy.x = fairy.x + 5;
  }

}