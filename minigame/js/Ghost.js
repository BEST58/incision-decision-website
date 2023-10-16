class Ghost {
    static width = 24;
    static height = 24;

    constructor({ position, image, velocity }) {
        this.position = position;
        this.width = Ghost.width;
        this.height = Ghost.height;
        this.velocity = velocity || { x: 5, y: 0 };
        this.image = image;
        this.prevCollisions = [];
    }

    calc() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}
pacman.calc();
    Object.values(ghosts).forEach(ghost => {
      const velocities = {
        left: { x: -3, y: 0 },
        right: { x: 3, y: 0 },
        down: { x: 0, y: 3 },
        up: { x: 0, y: -3 }
      }

      const collisions = [];

      for (let i = 0; i < Object.keys(velocities).length; i++) {
        const key = Object.keys(velocities)[i];
        const willIntersect = willIntersectRectangle(ghost, velocities[key]);
        // console.log(willIntersect, key)
        if (willIntersect) collisions.push(key);
      }

      if (collisions.length > ghost.prevCollisions.length) {
        ghost.prevCollisions = collisions;
      }

      const sameOptionsAsLast = JSON.stringify(ghost.prevCollisions) === JSON.stringify(collisions);
      if (!sameOptionsAsLast) {
        if (ghost.velocity.x > 0) ghost.prevCollisions.push('right');
        else if (ghost.velocity.x < 0) ghost.prevCollisions.push('left');
        else if (ghost.velocity.y > 0) ghost.prevCollisions.push('down');
        else if (ghost.velocity.y < 0) ghost.prevCollisions.push('up');

        const options = ghost.prevCollisions.filter(option => !collisions.includes(option));

        const randomOption = options[Math.floor(Math.random() * options.length)];
        console.log(ghost.prevCollisions, collisions, randomOption)
        
        ghost.velocity = velocities[randomOption];
        ghost.prevCollisions = [];
      }

      ghost.calc();
    });
