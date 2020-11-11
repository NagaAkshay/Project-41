const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boyAnm;
var thunder, boy;
var maxDrops;
var drops = [];
var img1, img2, img3, img4;

function preload(){
    boyAnm = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");

    img1 = loadImage("images/thunderbolt/1.png");
    img2 = loadImage("images/thunderbolt/2.png");
    img3 = loadImage("images/thunderbolt/3.png");
    img4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   engine = Engine.create();
    world = engine.world;
    
    maxDrops = 100;

    for (var i=0; i<maxDrops; i++) {
        drops.push(new Drop(random(0, displayWidth), random(0, displayHeight)))
    }
}

function draw(){
    createCanvas(displayWidth-20, displayHeight-30);
    drops.rePosition();
    spawnThunder();
}   

function spawnThunder() {
    if (frameCount % 10 === 0) {
        thunder = createSprite(random(displayWidth), 10)
    
    var rand = Math.round(random(1,4))

    switch(rand){
        case 1:
        thunder.addImage(img1);
        break;
        case 2:
        thunder.addImage(img2);
        break;
        case 3:
        thunder.addImage(img3);
        break;
        case 4:
        thunder.addImage(img4);
        break;
        default:
        break;

    }
}
}

