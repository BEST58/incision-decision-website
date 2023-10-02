class Pacman {
    constructor(radius, startingX, startingY, velocity) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
        this.velocity = { x : 0, y: 0 };
        this.angle = 0;
    }

    doesIntersect(boundary) {
        return (this.tl.x <= boundary.br.x &&
            boundary.tl.x <= this.br.x &&
            this.tl.y <= boundary.br.y &&
            boundary.tl.y <= this.br.y)
    }

    doesIntersectOffset(boundary, xOffset, yOffset) {
        return (this.tl.x + xOffset <= boundary.br.x &&
            boundary.tl.x <= this.br.x + xOffset &&
            this.tl.y + yOffset <= boundary.br.y &&
            boundary.tl.y <= this.br.y + yOffset)
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

        var hasBeenUndone = {
            x: false,
            y: false
        };

        for (let i = 0; i < bounds.length; i++) {
            const boundary = {
                tl: {
                    x: Math.min(bounds[i][0][0],  bounds[i][1][0]) ,
                    y: Math.min(bounds[i][0][1], bounds[i][1][1]) 
                },
                br: {
                    x: Math.max(bounds[i][0][0],  bounds[i][1][0]),
                    y: Math.max(bounds[i][0][1], bounds[i][1][1])
                 }
            }
            
            if (this.doesIntersect(boundary)) {
                const causedByX = !this.doesIntersectOffset(boundary, -this.velocity.x * 1.5, 0);
                if (causedByX && !hasBeenUndone.x) {
                    hasBeenUndone.x = true;
                    if (this.velocity.x > 0) {
                        this.x = boundary.tl.x - this.radius - 3;
                    } else if (this.velocity.x < 0) {
                        this.x = boundary.br.x + this.radius + 3;
                    }
                }

                const causedByY = !this.doesIntersectOffset(boundary, 0, -this.velocity.y * 1.5);
                if (causedByY && !hasBeenUndone.y) {
                    hasBeenUndone.y = true;
                    if (this.velocity.y > 0) {
                        this.y = boundary.tl.y - this.radius - 3;
                    } else if (this.velocity.y < 0) {
                        this.y = boundary.br.y + this.radius + 3;
                    }
                }
            }
        }

        if (!hasBeenUndone.x || !hasBeenUndone.y) {
            if (this.velocity.x > 0 && !hasBeenUndone.x) {
                this.angle = 0;
            } else if (this.velocity.x < 0 && !hasBeenUndone.x) {
                this.angle = Math.PI;
            } else if (this.velocity.y > 0 && !hasBeenUndone.y) {
                this.angle = Math.PI / 2;
            } else if (this.velocity.y < 0 && !hasBeenUndone.y) {
                this.angle = Math.PI * 3 / 2;
            }
        }
    }

   /* calcIntersect(bounds){
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
        
    }*/

    draw(ctx) {
        ctx.strokeStyle = 'yellow';
        ctx.fillStyle = 'yellow';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.angle + Math.PI / 6, this.angle + Math.PI, false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.angle + Math.PI, this.angle + Math.PI * 11 / 6, false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
