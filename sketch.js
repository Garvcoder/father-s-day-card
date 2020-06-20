const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var gameState;

function preload() {
  img = loadImage("h.jpg");
  img1 = loadImage("f.jpg");
  img2 = loadImage("a.png");
  img3 = loadImage("a - Copy.png");
  img4 = loadImage("a - Copy (3).png");
}

function setup() {
  createCanvas(1000,600);
   engine = Engine.create();
    world = engine.world;
    gameState = "ready";
}

function draw() {
  background(246,232,177);
  Engine.update(engine); 

 //if(gameState === "fade"){
    image(img,0,0,750,600);
 // }

if(keyCode === 49){
  image(img,0,0,750,600);
}
if(keyCode === 50){
  image(img1,0,0,750,600);
}
if(keyCode === 51){
  image(img2,0,0,750,600);
}
if(keyCode === 52){
  image(img3,0,0,750,600);
}
if(keyCode === 53){
  image(img4,0,0,750,600);
}

//  if(keyCode === 39 ){
//    gameState = "fade";
//  }

//   if (gameState === "fade"){
//   image(img1,0,0,750,600);
//   }

// if(keyCode === 40){
//   image(img,0,0,750,600);
// }

  // if(keyCode = 39 && ){
    
  //   gameState = "z"
  // }

  // if(gameState === "z"){
  //   image(img2,0,0,750,600);
  // }
 
    textSize(21);
    textFont("Stencil");
    text("Happy Father's Day",770,75);
    textFont("Stencil");
    text("To You",830,100);
    text("This is for you dad",775,170);
    textFont("Times New Roman");
    textSize(30);
    text("😘     🥳",810,260);
    textSize(21);
    textFont("Stencil");
    text("Press 1 - 5",820 ,340);
    text("respectively",800,380);
    text("see a beautiful note",760,420);
    text("in sequence",810,460);
    textSize(30);
    text("😊",850,525);
  drawSprites();
}

// if(gameState === "y"){
//   image(img,0,0,750,600);
// }

// if(keyCode === 32){
//   gameState = "y";
// }
// if(img1,0,0,750,600 && keyCode === 39){
//   ;
// }

// if(gameState === "z"){
  
// }