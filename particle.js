var fireworks2 = []; 
function Particle (x,y, vely, firework){
    this.pos = createVector(x,y);
    //tracks if original firework or emitted particle
    this.firework = firework;
    this.lifespan = random(150, 500);


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

        if(!this.firework){
            this.vel.mult(0.95);
            this.lifespan -= random(0.1, 10);
        }
    }

    this.done = function(){
        if(this.lifespan < 0){
            if(random(1)< 0.015 && fireworks.length < 50){
                fireworks.push(new Firework(this.pos.x, this.pos.y, 0));
                //console.log(fireworks.length);
            }
            
            return true;
            
        }else{
            return false;
        }
    }

    this.show = function(){
        if(!this.firework){
            strokeWeight(5);
            stroke(255,this.lifespan);
        }else{
            strokeWeight(4);
            stroke(255);
        }

        point(this.pos.x, this.pos.y);
    }
}