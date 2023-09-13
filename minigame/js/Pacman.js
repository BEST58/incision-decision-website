class Pacman {
    constructor(radius, startingX, startingY) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
    }

    draw(ctx) {
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();

        this.x += 5;
    }
}
