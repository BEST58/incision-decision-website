class Pellet {
    static radius = 3;

    constructor({ position }) {
        this.position = position;
        this.radius = Pellet.radius;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        
        ctx.fillStyle = "white";
        ctx.fill();
    }

}