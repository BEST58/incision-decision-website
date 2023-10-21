class Ghost {
    static width = 24;
    static height = 24;

    constructor({ position, image, velocity, smartAlgo }) {
        this.position = position;
        this.width = Ghost.width;
        this.height = Ghost.height;
        this.velocity = velocity || { x: 3, y: 0 };
        this.image = image;
        this.smartAlgo = smartAlgo || false;
        this.prevCollisions = [];
    }

    calc(pacmanPosition) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (doesCircleIntersectRectangle({ circle: { position: pacmanPosition, velocity: { x: 0, y: 0 }, radius: Pacman.radius - 4 },  rectangle: this})) {
            doStop = true;
            console.log("killed");
        }
        if (this.velocity.x < 0)
            if (Math.abs(this.position.x - startingX) < 10)
                this.position.x = endingX;

        if (this.velocity.x > 0)
            if (Math.abs(this.position.x - endingX) < 10)
                this.position.x = startingX;
    }
    

    updatePosition(options, pacmanPosition) {
        const dx = pacmanPosition.x - this.position.x;
        const dy = pacmanPosition.y - this.position.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const dirX = dx / distance;
        const dirY = dy / distance;
        
        if (this.smartAlgo && Math.abs(dirX) > Math.abs(dirY) && dirX < 0 && options.includes('left')){
            this.velocity = { x: -3, y: 0 };
        }
        else if (this.smartAlgo && Math.abs(dirX) > Math.abs(dirY) && dirX > 0 && options.includes('right')){
            this.velocity = { x: 3, y: 0 };
        }
        else if (this.smartAlgo && Math.abs(dirX) < Math.abs(dirY) && dirY < 0 && options.includes('up')){
            this.velocity = { x: 0, y: -3 };
        }else if (this.smartAlgo && Math.abs(dirX) < Math.abs(dirY) && dirY > 0 && options.includes('down')){
            this.velocity = { x: 0, y: 3 };
        }
        else {
            const velocities = {
                left: { x: -3, y: 0 },
                right: { x: 3, y: 0 },
                down: { x: 0, y: 3 },
                up: { x: 0, y: -3 }
            }

            const randomOption = options[Math.floor(Math.random() * options.length)];      
            this.velocity = velocities[randomOption];
        }

        this.calc(pacmanPosition);
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}




