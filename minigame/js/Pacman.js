class Pacman {
    static radius = 12;

    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = Pacman.radius;
        this.turn = 0;
    }

    calc (startingX, endingX) {
        // if teleport
        if (this.velocity.x < 0)
            if (Math.abs(this.position.x - startingX) < 10)
                this.position.x = endingX;

        if (this.velocity.x > 0)
            if (Math.abs(this.position.x - endingX) < 10)
                this.position.x = startingX;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw() {

        if(this.velocity.x > 0){
            this.turn = 0;
        }
        if(this.velocity.x < 0){
            this.turn = Math.PI;
        }
        if(this.velocity.y > 0){
            this.turn = Math.PI/2;
        }
        if(this.velocity.y < 0){
            this.turn = 3*Math.PI/2;
        }

        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        /*  ctx.arc(this.position.x, this.position.y, this.radius, Math.PI / 4, 7 * Math.PI / 6);
         ctx.arc(this.position.x, this.position.y, this.radius, 3 * Math.PI / 4, 7 * Math.PI / 4);
 */
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0.25 * Math.PI + this.turn, 1.25 * Math.PI + this.turn, false);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0.75 * Math.PI + this.turn, 1.75 * Math.PI + this.turn, false);
        ctx.fill();
    }

}