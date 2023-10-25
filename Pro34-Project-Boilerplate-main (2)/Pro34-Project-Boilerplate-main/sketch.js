
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola
var cesta
var pontos = 1
var cestaImg, bolaImg
var backgroundImg

function preaload(){
  bolaImg = loadImage("./assets/bola.png");
  cestaImg = loadImage("./assets/cesta.png");
  backgroundImg = loadImage("./assets/background.jpg"); 
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  
}


function draw() {
  background(backgroundImg);
  
  Engine.update(engine);
  
  drawSprites();
}

