const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, chain;
var ground;
var roof;
var boxes = []


function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    roof = new Ground(200,50,200,20)
    ball = new Ball(180,550,80)
    chain = new Chain(roof.body, ball.body)
    for(var i = 0; i<7; i++){
        var box = new Box(350, 100,70,70)
        boxes.push(box)
        var box = new Box(450, 100,70,70)
        boxes.push(box)
        var box = new Box(550, 100,70,70)
        boxes.push(box)
    }
}

function draw(){
    background(255);
    Engine.update(engine);
    chain.display();
    ground.display();
    roof.display();
    ball.display();
    for(var i=0; i<boxes.length; i++){
        boxes[i].display()
    }
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}
