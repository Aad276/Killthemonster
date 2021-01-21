const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world

var backgroundimg,GamingBackground
var superhero1
function preload() {
//preload the images here
backgroundimg =loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(1200, 800);
engine=Engine.create()
world=engine.world

superhero1= new Superhero(100,80,50)




}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
 superhero1.display()

}

