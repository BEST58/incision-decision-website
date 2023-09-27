// Will figure out how to create 4 ghosts later, first working on the basics for it. Will need some info such as starting pos.

class Ghost {
  constructor(radius, startingX, startingY) {
        this.radius = radius;
        this.x = startingX;
        this.y = startingY;
      }

    draw(ctx) {
        ctx.strokeStyle = 'rand';
        ctx.fillStyle = 'rand';
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
