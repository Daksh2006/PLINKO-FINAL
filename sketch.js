const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
function preload() {

}

var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight=300;
var score = 0;
var particle;
var turns = 0;
var gamestate= "start";

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    for (var k = 0; k <=width; k=k + 80) {
        divisions.push(new Division(k, height-divisionsHeight/2,20,300,divisionsHeight)); 
     }
     for (var j = 40; j <=width; j=j+50){
         plinkos.push(new Plinko(j,75,10));
     }
 
     for (var j = 15; j <=width-10; j=j+50){
         plinkos.push(new Plinko(j,175,10));
     }
     
     for (var j = 5; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,250,10));
    }

    for (var j = 1; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,325,10));
    }

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    if (frameCount%60===0){
        particles.push(new Particle(random(20,380),10,10))
    }
    
    for (var j = 0; j < particles.length; j++){
        particles[j].display();
    }

    for (var k = 0; k < plinkos.length; k++){
        plinkos[k].display();
    }

    for (var j = 0; j < divisions.length; j++){
        divisions[j].display();
    }
    
}
