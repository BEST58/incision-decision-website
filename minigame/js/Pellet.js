class Pellet {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.tl = {
            x: this.x - this.radius,
            y: this.y - this.radius
        }

        this.br = {
            x: this.x + this.radius,
            y: this.y + this.radius
        }

    }

    getBoundary() {

     const boundary = {
            tl: {
                x: 40,
                y: this.y - this.radius 
            },
            br: {
                x: this.x + this.radius,
                y: this.y + this.radius
             }
        }
        return boundary
    }

    draw(ctx) {
        ctx.strokeStyle = 'yellow';
        ctx.fillStyle = 'yellow';
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

}