var fireworks = []; 
var gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    textSize(32);

    strokeWeight(4);
    gravity = createVector(0, 0.2);
    background(0);
    fireworks.push(new Firework(width/2, height, -14));
}

function draw(){
    background(0, 50);

    if(fireworks.length <= 0){
        fireworks.push(new Firework(width/2, height, -14));
    }
    // if(random(1)< 0.01){
    //     fireworks.push(new Firework(random(width), height));
    // }
    for(var i = fireworks.length-1; i >= 0 ; i--){
        fireworks[i].update();
        fireworks[i].show();
        if(fireworks[i].done()){
            //remove fireworks object 
            fireworks.splice(i,1);
        }
    }
    console.log(fireworks.length);
    //draw fireworks counter
    fill(255);
    text(fireworks.length,0+width/25, 0+height/10);
}