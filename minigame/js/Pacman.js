class Pacman {
    static radius = 12;

    constructor ({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = Pacman.radius;
    }

    calc () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw () {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }

}