var canvas,backgroundImage;
var gameState=0;
var PlayerCount=0;

var database;
var form,player,game;

function setup(){
  database = firebase.database();
  //console.log(database);
  canvas=createCanvas(400,400);

  game=new Game();
  game.getstate();
  game.start();
}

function draw(){
  drawSprites();
  
}

