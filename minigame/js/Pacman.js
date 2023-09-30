class Pacman {
    constructor(radius, startingX, startingY, velocity) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
        this.velocity = { x : 0, y: 0 };
    }

    doesIntersect(boundary) {
        return (this.tl.x <= boundary.br.x &&
            boundary.tl.x <= this.br.x &&
            this.tl.y <= boundary.br.y &&
            boundary.tl.y <= this.br.y)
    }

    calc(bounds) {
        if (!this.velocity.x && !this.velocity.y) return;

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.tl = {
            x: this.x - this.radius,
            y: this.y - this.radius
        }

        this.br = {
            x: this.x + this.radius,
            y: this.y + this.radius
        }

        for (let i = 0; i < bounds.length; i++) {
            const boundary = {
                tl: {
                    x: bounds[i][0][0],
                    y: bounds[i][0][1]
                },
                br: {
                    x: bounds[i][1][0],
                    y: bounds[i][1][1]
                }
            }
            
            if (this.doesIntersect(boundary)) {
                // if (this.br.x > boundary.tl.x && this.velocity.x > 0) {
                //     this.x = boundary.tl.x - this.radius * 1.5;
                // } else if (this.tl.x < boundary.br.x && this.velocity.x < 0) {
                //     this.x = boundary.br.x * 1.5;
                // }

                // if (this.br.y > boundary.tl.y && this.velocity.y > 0) {
                //     this.y = boundary.tl.y - this.radius * 1.5;
                // } else if (this.tl.y < boundary.br.y && this.velocity.y < 0) {
                //     this.y = boundary.br.y * 1.5;
                // }

                this.x -= this.velocity.x;
                this.y -= this.velocity.y;

                break;
            }
        }
    }

    calcIntersect(bounds){
     //   console.log(bounds[1][0])
     let spacing = 5
        for(let i = 0; i < bounds.length; i++){
            if(this.velocity.x > 0){
                if(this.x + this.radius + spacing == bounds[i][0][0] && ((this.y > bounds[i][0][1] && this.y < bounds[i][1][1]) || (this.y < bounds[i][0][1] && this.y > bounds[i][1][1]))){
                    this.velocity.x = 0
                }
            }
            if(this.velocity.x < 0){
                if(this.x - this.radius - spacing == bounds[i][0][0] && ((this.y > bounds[i][0][1] && this.y < bounds[i][1][1]) || (this.y < bounds[i][0][1] && this.y > bounds[i][1][1]))){
                    this.velocity.x = 0
                }
            }
            if(this.velocity.y > 0){
                if(this.y + this.radius + spacing == bounds[i][0][1] && ((this.x > bounds[i][0][0] && this.x < bounds[i][1][0]) || (this.x < bounds[i][0][0] && this.x > bounds[i][1][0]))){
                    this.velocity.y = 0
                }
            }
            if(this.velocity.y < 0){
                if(this.y - this.radius - spacing == bounds[i][0][1] && ((this.x > bounds[i][0][0] && this.x < bounds[i][1][0]) || (this.x < bounds[i][0][0] && this.x > bounds[i][1][0]))){
                    this.velocity.y = 0
                }
            }
        }
        
    }

    draw(ctx) {
        ctx.strokeStyle = 'yellow';
        ctx.fillStyle = 'yellow';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI / 6, Math.PI, false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI, Math.PI * 11 / 6, false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
