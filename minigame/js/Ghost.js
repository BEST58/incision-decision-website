class Ghost {
    static width = 24;
    static height = 24;

    constructor({ position, image }) {
        this.position = position;
        this.width = Ghost.width;
        this.height = Ghost.height;
        this.velocity = { x: 0, y: 0 };
        this.image = image;
    }

    calc() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

}