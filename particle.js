var fireworks2 = []; 
function Particle (x,y, vely, firework){
    this.pos = createVector(x,y);
    //tracks if original firework or emitted particle
    this.firework = firework;

    this.lifespan = random(150, 500);
    this.colour = [random(255),random(255),random(255)]; 
    
    if(this.firework){
        // this.vel = createVector(0,random(-17, -18));
        this.vel = createVector(0,vely);
    }else{
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(9,10));
    }

    this.acc = createVector(0,0);

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.update = function(){
        //particle speed
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        //clear acceleration 
        this.acc.mult(0);

        //change colour

        if(!this.firework){
            this.vel.mult(0.95);
            this.lifespan -= random(0.1, 10);
        }
    }

    this.done = function(){
        if(this.lifespan < 0){
            //avoid spawning fireworks too close to edge of screen
            if(this.pos.x < windowWidth-250 && this.pos.x > 250 && this.pos.y < windowHeight-250 && this.pos.y > 250){
                //each particle has a 1.5% chance of exploding 
                if(random(1)< 0.015 && fireworks.length < 50){
                    fireworks.push(new Firework(this.pos.x, this.pos.y, 0));
                }
            }

            
            return true;
            
        }else{
            return false;
        }
    }

    this.show = function(){
        //check if this is the initial firework
        if(!this.firework){
            strokeWeight(5);
            stroke(this.colour[0],this.colour[1],this.colour[2],this.lifespan);
        }else{
            //settings for the initial firework
            strokeWeight(4);
            stroke(random(150,255));
        }

        //create point/circle at location
        point(this.pos.x, this.pos.y);
    }
}