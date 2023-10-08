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