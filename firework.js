function Firework(x,y, vely){
    this.firework = new Particle(x, y, vely,true);
    this.exploded = false;
    this.particles = [];

    this.done = function(){
        if(this.exploded && this.particles.length === 0){
            return true;
        }else{
            return false;
        }
    }
    this.update = function(){
        if(!this.exploded){
            this.firework.applyForce(gravity);
            this.firework.update();
        
            if(this.firework.vel.y >= 0){
                this.exploded = true;
                this.explode();
            }
        }
        for (var i = this.particles.length-1; i >=0; i--){
            //this.particles[i].applyForce(gravity);
            this.particles[i].update();

            if(this.particles[i].done()){
                //remove from array
                this.particles.splice(i,1);
            }
        }
    }

this.explode = function(){
    for (var i = 0; i < 100; i++){
        var p = new Particle(this.firework.pos.x, this.firework.pos.y, 0, false);
        this.particles.push(p);
    }
}

    this.show = function(){
        if(!this.exploded){
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++){
            this.particles[i].show();
        }
    }
}