class Pacman {
    static radius = 12;

    constructor ({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = Pacman.radius;
    }

    calc (startingX, endingX) {
        // if teleport
        if (this.velocity.x < 0)
            if (Math.abs(this.position.x - startingX) < 10)
                console.log("teleport left")

        if (this.velocity.x > 0)
            if (Math.abs(this.position.x - endingX) < 10)
                console.log("teleport right")

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