class Pacman {
    static radius = 11;

    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = Pacman.radius;
        this.images = [
            [getImg("images/pacmanRight.png"), getImg("images/pacmanRightOpen.png")],
            [getImg("images/pacmanLeft.png"), getImg("images/pacmanLeftOpen.png")],
            [getImg("images/pacmanDown.png"), getImg("images/pacmanDownOpen.png")]
            [getImg("images/pacmanUp.png"), getImg("images/pacmanUpOpen.png")],
        ]
        this.turn = this.images[0];
        this.animationFrame = 0;
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
            this.turn = this.images[0];
        }
        if(this.velocity.x < 0){
            this.turn = this.images[1];
        }
        if(this.velocity.y > 0){
            this.turn = this.images[2];
        }
        if(this.velocity.y < 0){
            this.turn = this.images[3];
        }

        this.animationFrame += 1;
        if (this.animationFrame >= 40) {
            this.animationFrame = 0;
        }

        ctx.drawImage(this.turn[parseInt(this.animationFrame / 20)], this.position.x - this.radius, this.position.y - this.radius, this.radius*2, this.radius*2);

        // ctx.fillStyle = 'yellow';
        // ctx.beginPath();
        // ctx.arc(this.position.x, this.position.y, this.radius, 0.25 * Math.PI + this.turn, 1.25 * Math.PI + this.turn, false);
        // ctx.fill();
        // ctx.beginPath();
        // ctx.arc(this.position.x, this.position.y, this.radius, 0.75 * Math.PI + this.turn, 1.75 * Math.PI + this.turn, false);
        // ctx.fill();
    }

}