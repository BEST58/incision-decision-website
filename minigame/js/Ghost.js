// Need info for ghosts

class Ghost {
  constructor(radius, startingX, startingY) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
      }

    draw(ctx) {
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';
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

class GhostTwo {
  constructor(radius, startingX, startingY) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
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

class GhostThree {
  constructor(radius, startingX, startingY) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
      }

    draw(ctx) {
        ctx.strokeStyle = 'blue';
        ctx.fillStyle = 'blue';
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

class GhostFour {
  constructor(radius, startingX, startingY) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
      }

    draw(ctx) {
        ctx.strokeStyle = 'cyan';
        ctx.fillStyle = 'cyan';
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
