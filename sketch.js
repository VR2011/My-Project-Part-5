var earth, rocket, net, ground_control, space;
var recta, recto;
var x = 0;
var y, count, between;
var score = 0;
var health = 100;
var sat1, sat2, sat3, sat4;
var sat1i, sat2i, sat3i, sat4i;
var spaceFont;
var level1Debris = [];
var level1Debrisi = [];
var level2Debris = [];
var level2Debrisi = [];
var level3Debris = [];
var level3Debrisi = [];
var gameState = 'one';
var inPlay = false;
var tscore, thide, tgameState, tlevel;
var intro = 0;
var intro1s, intro2s, intro3s, intro4s, Song, collected, boom;
var button;
var ending;
var a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20; 
var damaged1, damaged2, damaged3, damaged4;
var DamagedR;
var ready = false;
var wall;
function preload() {
    earth = loadImage('images/earth.png');
    rocket = loadImage('images/rocket.png');
    net = loadImage('images/net.png');
    sat1i = loadImage('images/satellite.png');
    sat2i = loadImage('images/satellite2.png');
    sat3i = loadImage('images/satellite3.png');
    sat4i = loadImage('images/satellite4.png');
    astronaut = loadImage('images/astronaut.png');
    helmet = loadImage('images/helmet.png');
    scrap1 = loadImage('images/scrap.png');
    scrap2 = loadImage('images/scrap2.png');
    scrap3 = loadImage('images/scrap3.png');
    space = loadImage('images/space.jpg');
    ground_control = loadImage('images/ground-control.png')
    spaceFont = loadFont('Chopsic-K6Dp.ttf');
    damaged1 = loadImage('images/damaged1.png');
    damaged2 = loadImage('images/damaged2.png');
    damaged3 = loadImage('images/damaged3.png');
    damaged4 = loadImage('images/damaged4.png');
    intro1s = loadSound('sounds/Intro1.wav');
    intro2s = loadSound('sounds/Intro2.wav');
    intro3s = loadSound('sounds/Intro3.wav');
    Song = loadSound('sounds/Space_Debris.mp3');
    collected = loadSound('sounds/goal.wav');
    boom = loadSound('sounds/hurt.wav');
    
}

function setup() {
    count = 0;
    button = createButton("Next");
    button.position(625, 430);
    var canvas = createCanvas(800, 800);
    imageMode(CENTER);
    space.width = 800;
    space.height = 800;
    rectMode(CENTER);
    recta = createSprite(150, 300, 50, 50);
    recta.addImage(rocket);
    recto = createSprite(recta.x - 40, recta.y + 80, 50, 50);
    recto.addImage(net);
    recto.debug = true;;
    DamagedR = [rocket, damaged1, damaged2, damaged3, damaged4];
    wall = createSprite(0, 400, 5, 800)
    level1Debris.push(a0);
    level1Debris.push(a1);
    level1Debris.push(a2);
    level1Debris.push(a3);
    level1Debris.push(a4);
    level1Debris.push(a5);
    level1Debris.push(a6);
    level1Debris.push(a7);
    level1Debris.push(a8);
    level1Debris.push(a9);
    level1Debrisi.push(sat1i);
    level1Debrisi.push(helmet);
    level1Debrisi.push(scrap1);
    level1Debrisi.push(scrap2);
    level1Debrisi.push(sat1i);
    level1Debrisi.push(helmet);
    level1Debrisi.push(scrap1);
    level1Debrisi.push(scrap2);
    level1Debrisi.push(sat1i);
    level1Debrisi.push(helmet);
    level2Debris = [b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13];
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level2Debrisi.push(scrap2);
    level2Debrisi.push(scrap3);
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level2Debrisi.push(scrap2);
    level2Debrisi.push(scrap3);
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level2Debrisi.push(scrap2);
    level2Debrisi.push(scrap3);
    level2Debrisi.push(sat2i);
    level2Debrisi.push(astronaut);
    level3Debris = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19];
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    level3Debrisi.push(sat3i);
    level3Debrisi.push(astronaut);
    level3Debrisi.push(sat4i);
    level3Debrisi.push(scrap1);
    level3Debrisi.push(scrap3);
    for(i=0; i<level1Debris.length; i++){
        y = random(250, 400);
        between = random(1, 3)
        level1Debris[i] = createSprite(200*i*between + 900, y, 500, 400);
        level1Debris[i].addImage(level1Debrisi[i]);
    }
    for(j=0; j<level2Debris.length; j++){
        y = random(250, 400);
        between = random(1, 3)
        level2Debris[j] = createSprite(100*j*between + 900, y, 500, 400);
        level2Debris[j].addImage(level2Debrisi[j]);
    }
    for(k=0; k<level3Debris.length; k++){
        y = random(250, 400);
        between = random(1, 3)
        level3Debris[k] = createSprite(75*k*between + 1100, y, 500, 400);
        level3Debris[k].addImage(level3Debrisi[k]);
    }
    if(intro === 1){
        intro1s.play();
    }
    if(intro === 2){
        intro2s.play();
    }
    if(intro === 3){
        intro3s.play();
    }
    Song.loop();
}

function draw() {
    background(0);
    x+=0.02;
    if(inPlay === false && health === 100 && score === 0){
        fill(255);
        textSize(15);
        image(ground_control, 400, 600);
        button.mousePressed(next);
        if(intro === 1){
            text("OH NO!!! Hey Player! A lot of Space Debris", 500, 385);
            text(" was just detected entering the atmosphere", 500, 415);
        }
        if(intro === 2){
            text("You have to clean them up", 500, 385);
            text("by collecting them in your net", 500, 415);
        }
        if(intro === 3){
            text("Don't let your rocket get hit", 500, 385);
            text("Or else it will get damaged!", 500, 415);
        }
        if(intro === 4){
            text("Request accepted.", 400, 260);
            text("I will proceed with", 400, 280);
            text("the mission", 400, 300);
        }
        if(intro === 5){
            inPlay === true;
        }
    }

    if(inPlay === true){
        if(gameState === 'one'){
            background(0, 0, 0);
            recto.setCollider('rectangle', 0, 10, 100, 100);
            for(i=0; i<level1Debris.length; i++){
                level1Debris[i].velocityX = -3*between;
            }
        }
        if(gameState === 'two'){
            for(i=0; i<level1Debris.length; i++){
                level1Debris[i].remove();
            }
            background(0, 0, 0);
            net.width = 150;
            net.height = 181.5;
            recto.setCollider('rectangle', 0, 20, 120, 150);
            for(j=0; j<level2Debris.length; j++){
                level2Debris[j].velocityX = -4*between;
            }
        }
        if(gameState === 'three'){
            for(i=0; i<level2Debris.length; i++){
                level2Debris[i].remove();
            }
            background(0, 0, 0);
            net.width = 200;
            net.height = 242;
            recto.setCollider('rectangle', -10, 20, 150, 200);
            for(k=0; k<level3Debris.length; k++){
                level3Debris[k].velocityX = -5*between;
            }
        }
        image(space, 400, 500, 1600, 1600);
        button.hide();
        push();
        translate(400, 1300);
        rotate(x);
        image(earth, 0, 0, 1600, 1600);
        pop();
    
        textSize(20);
        fill(255);
        textFont(spaceFont);
        tscore = text("Score: " + score, 625, 50);
        thealth = text("Health: " + health + "%", 50, 50);
        tlevel = text("Level", 300, 50);
        textSize(35);
        tgameState = text(gameState, 400, 50);
        
        if(score < 350){
            gameState = "one";
        } else if(score >= 350 && score < 800){
            gameState = "two";
        } else if(score >= 800 && score < 1500){
            gameState = "three";
        } else{
            inPlay = false;
            gameState = 'four';
        }
        
        for(i=0; i<level1Debris.length; i++){
            recto.collide(level1Debris[i], captured);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level1Debris.length; i++){
            recta.collide(level1Debris[i], hurt);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level1Debris.length; i++){
            wall.collide(level1Debris[i], hurtL);
        }
        for(i=0; i<level2Debris.length; i++){
            recto.collide(level2Debris[i], captured);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level2Debris.length; i++){
            recta.collide(level2Debris[i], hurt);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level2Debris.length; i++){
            wall.collide(level2Debris[i], hurtL);
        }
        for(i=0; i<level3Debris.length; i++){
            recto.collide(level3Debris[i], captured);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level3Debris.length; i++){
            recta.collide(level3Debris[i], hurt);
            recto.x=recta.x - 40;
            recto.y=recta.y + 80;
        }
        for(i=0; i<level3Debris.length; i++){
            wall.collide(level3Debris[i], hurtL);
        }

        if(recta.y <= 500){
            if(keyIsDown(40)){
                recta.y += 5;
                recto.y += 5;
            }
        }
        if(recta.y >= 100){
            if(keyIsDown(38)){
                recta.y -= 5;
                recto.y -= 5;
            }
        }
        
        drawSprites();
        if(health <= 0){
            inPlay = false;
        }
    }
    if(inPlay === false && health <= 0){
        Song.stop();
        recto.visible = false;
        recta.visible = false;
        earth.visible = false;
        tscore.visible = false;
        thealth.visible = false;
        tlevel.visible = false;
        tgameState.visible = false;
        textSize(50);
        fill(255);
        textFont(spaceFont);
        text("GAME       OVER", 200, 300);
        textSize(25);
        text("Your      score       was     " + score, 225, 400);
    }

    if(inPlay === false && gameState === 'four'){
        recto.visible = false;
        recta.visible = false;
        earth.visible = false;
        tscore.visible = false;
        thealth.visible = false;
        tlevel.visible = false;
        tgameState.visible = false;
        textSize(50);
        fill(255);
        textFont(spaceFont);
        text("You Saved the World!!! You Won!", 50, 300);
        textSize(25);
        text("Your      score       was     " + score, 225, 400);
    }
    
    if(health >= 20){
        recta.addImage(DamagedR[count]);
    }
}

/*function isTouching(object1, object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;  
    } else {
        return false;
    }
}*/

function captured(spriteA, spriteB) {
    collected.play();
    spriteA.velocityX = 0;
    spriteB.remove();
    score+=50;
}

function hurt(spriteA, spriteB) {
    boom.play();
    spriteB.remove();
    spriteA.velocityX = 0;
    health -= 20;
    count+=1;
}

function next() {
    intro += 1;
    if(intro >= 5){
        inPlay = true;
        button.hide();

    }
}

function hurtL(spriteA, spriteB) {
    health = 0;
}

function mousePressed() {
    if(recta.y >= 100){
        recta.y -= 5;
        recto.y -= 5;
    }
}