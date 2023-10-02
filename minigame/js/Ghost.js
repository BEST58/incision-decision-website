// Need info for ghosts

//Making something that should happen when pacman touches the ghost, not to be used or at least not now as this is just to give me an idea of what to do

/*

if Ghost(X, Y) == Pacman(X, Y) {
  return doStop;
}

//Trying to calculate for ghost

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
*/

class Ghost {
  constructor(radius, startingX, startingY) {
        this.radius = 10;
        this.x = 27;
        this.y = 57;
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
        this.radius = 10;
        this.x = 27;
        this.y = 57;
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
        this.radius = 10;
        this.x = 27;
        this.y = 57;
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
        this.radius = 10;
        this.x = 27;
        this.y = 57;
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
