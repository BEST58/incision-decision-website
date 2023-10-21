class Ghost {
    static width = 24;
    static height = 24;

    constructor({ position, image, velocity }) {
        this.position = position;
        this.width = Ghost.width;
        this.height = Ghost.height;
        this.velocity = velocity || { x: 3, y: 0 };
        this.image = image;
        this.prevCollisions = [];
    }
    calc() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    updatePosition(options, pacmanPosition) {
        const dx = pacmanPosition.x - this.position.x;
        const dy = pacmanPosition.y - this.position.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const dirX = dx / distance;
        const dirY = dy / distance;
        
        if (Math.abs(dirX) > Math.abs(dirY) && dirX < 0 && options.includes('left')){
            this.velocity = { x: -3, y: 0 };
        }else if (Math.abs(dirX) > Math.abs(dirY) && dirX > 0 && options.includes('right')){
            this.velocity = { x: 3, y: 0 };
        }
        else if (Math.abs(dirX) < Math.abs(dirY) && dirY < 0 && options.includes('up')){
            this.velocity = { x: 0, y: -3 };
        }else if (Math.abs(dirX) < Math.abs(dirY) && dirY > 0 && options.includes('down')){
            this.velocity = { x: 0, y: 3 };
        } else {
            const velocities = {
                left: { x: -3, y: 0 },
                right: { x: 3, y: 0 },
                down: { x: 0, y: 3 },
                up: { x: 0, y: -3 }
            }

            const randomOption = options[Math.floor(Math.random() * options.length)];      
            this.velocity = velocities[randomOption];
        }

        console.log('hi')

        this.calc();
    }


    /*calc() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }*/

    /*calc(pacman.position, pacman.position) {
        const pacmanX = position.x;
        const pacmanY = position.y;

        const dx = pacmanX - this.position.x;
        const dy = pacmanY - this.position.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const dirX = dx / distance;
        const dirY = dy / distance;

        this.velocity.x = dirX * 5; 
        this.velocity.y = dirY * 5;
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.calc();
    }*/

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}




