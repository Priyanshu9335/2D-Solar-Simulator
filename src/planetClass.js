export class planetClass {
    static G = 6.67e-11;
    static TIME_STEP = 60 * 60 * 24;
    static SCALE = 1e9;

    constructor(name, x, y, velX, velY, radius, mass, color) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }

    updatePosition(planetsArray){
        let ax = 0;
        let ay = 0;
        for (let other of planetsArray) {
            if (other !== this) {
                let dx = other.x - this.x;
                let dy = other.y - this.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist === 0) continue; // Avoid division by zero

                let F = (planetClass.G * other.mass * this.mass) / (dist * dist); 
                
                let angle = Math.atan2(dy, dx);

                ax += F*Math.cos(angle)/this.mass;
                ay += F*Math.sin(angle)/this.mass;

            }
        }
        this.velX += ax * planetClass.TIME_STEP;
        this.velY += ay * planetClass.TIME_STEP;

        this.x += this.velX * planetClass.TIME_STEP;
        this.y += this.velY * planetClass.TIME_STEP;
    }
    
    draw(ctx, width, height){
        ctx.beginPath();
        ctx.arc(this.x/planetClass.SCALE + width/2 , this.y/planetClass.SCALE + height/2, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

}