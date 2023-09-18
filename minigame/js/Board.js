class Board {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.lines = [];

        // Borders - Top -> Right -> Bottom -> Left
        this.lines.push(
            [[this.x, this.y], [this.x + this.width, this.y]],
            [[this.x + (this.width / 2), this.y], [this.x + (this.width / 2), this.y + this.height / 6]],
            
            [[this.x + this.width, this.y], [this.x + this.width, this.y + (this.height / 3)]],

            [[this.x + this.width * 5 / 6, this.y + (this.height / 3)], [this.x + this.width, this.y + (this.height / 3)]],
            [[this.x + this.width * 5 / 6, this.y + (this.height / 3)], [this.x + this.width * 5 / 6, this.y + (this.height / 2) - 16]],
            [[this.x + this.width * 5 / 6, this.y + (this.height / 2) - 16], [this.x + this.width, this.y + (this.height / 2) - 16]],
            
            [[this.x + this.width * 5 / 6, this.y + (this.height / 2) + 16], [this.x + this.width, this.y + (this.height / 2) + 16]],
            [[this.x + this.width * 5 / 6, this.y + (this.height / 2) + 16], [this.x + this.width * 5 / 6, this.y + (this.height * 2 / 3)]],
            [[this.x + this.width * 5 / 6, this.y + (this.height * 2 / 3)], [this.x + this.width, this.y + (this.height * 2 / 3)]],

            [[this.x + this.width, this.y + (this.height * 2 / 3)], [this.x + this.width, this.y + this.height]],

            [[this.x + this.width, this.y + this.height], [this.x, this.y + this.height]],

            [[this.x, this.y], [this.x, this.y + (this.height / 3)]],
            
            [[this.x + this.width / 6, this.y + (this.height / 3)], [this.x, this.y + (this.height / 3)]],
            [[this.x + this.width / 6, this.y + (this.height / 3)], [this.x + this.width / 6, this.y + (this.height / 2) - 16]],
            [[this.x + this.width / 6, this.y + (this.height / 2) - 16], [this.x, this.y + (this.height / 2) - 16]],
            
            [[this.x + this.width / 6, this.y + (this.height / 2) + 16], [this.x, this.y + (this.height / 2) + 16]],
            [[this.x + this.width / 6, this.y + (this.height / 2) + 16], [this.x + this.width / 6, this.y + (this.height * 2 / 3)]],
            [[this.x + this.width / 6, this.y + (this.height * 2 / 3)], [this.x, this.y + (this.height * 2 / 3)]],

            [[this.x, this.y + (this.height * 2 / 3)], [this.x, this.y + this.height]],
        );
            
        const middleX = this.x + this.width / 2;
        const endX = this.x + this.width;

        // Inside obstacles
        this.lines.push(
            [[this.x + 32, this.y + 32], [this.x + 32 + 48, this.y + 32]],
            [[this.x + 32 + 48, this.y + 32], [this.x + 32 + 48, this.y + 32 + 32]],
            [[this.x + 32 + 48, this.y + 32 + 32], [this.x + 32, this.y + 32 + 32]],
            [[this.x + 32, this.y + 32], [this.x + 32, this.y + 32 + 32]],
            
            [[this.x + 32 + 48 + 32, this.y + 32], [middleX - 32, this.y + 32]],
            [[middleX - 32, this.y + 32], [middleX - 32, this.y + 32 + 32]],
            [[middleX - 32, this.y + 32 + 32], [this.x + 32 + 48 + 32, this.y + 32 + 32]],
            [[this.x + 32 + 48 + 32, this.y + 32], [this.x + 32 + 48 + 32, this.y + 32 + 32]],

            [[endX - 32, this.y + 32], [endX - 32 - 48, this.y + 32]],
            [[endX - 32 - 48, this.y + 32], [endX - 32 - 48, this.y + 32 + 32]],
            [[endX - 32 - 48, this.y + 32 + 32], [endX - 32, this.y + 32 + 32]],
            [[endX - 32, this.y + 32], [endX - 32, this.y + 32 + 32]],
            
            [[endX - 32 - 48 - 32, this.y + 32], [middleX + 32, this.y + 32]],
            [[middleX + 32, this.y + 32], [middleX + 32, this.y + 32 + 32]],
            [[middleX + 32, this.y + 32 + 32], [endX - 32 - 48 - 32, this.y + 32 + 32]],
            [[endX - 32 - 48 - 32, this.y + 32], [endX - 32 - 48 - 32, this.y + 32 + 32]],

            [[this.x + 32, this.y + 32 * 3], [this.x + 32 + 48, this.y + 32 * 3]],
            [[this.x + 32 + 48, this.y + 32 * 3], [this.x + 32 + 48, this.y + (this.height / 3) - 32]],
            [[this.x + 32 + 48, this.y + (this.height / 3) - 32], [this.x + 32, this.y + (this.height / 3) - 32]],
            [[this.x + 32, this.y + (this.height / 3) - 32], [this.x + 32, this.y + 32 * 3]],

            [[this.x + 32 + 48 + 32, this.y + 32 * 3], [middleX - 32, this.y + 32 * 3]],
            [[middleX - 32, this.y + 32 * 3], [middleX - 32, this.y + (this.height / 3) - 32]],
            [[middleX - 32, this.y + (this.height / 3) - 32], [this.x + 32 + 48 + 32, this.y + (this.height / 3) - 32]],
            [[this.x + 32 + 48 + 32, this.y + 32 * 3], [this.x + 32 + 48 + 32, this.y + (this.height / 3) - 32]],

            [[endX - 32, this.y + 32 * 3], [endX - 32 - 48, this.y + 32 * 3]],
            [[endX - 32 - 48, this.y + 32 * 3], [endX - 32 - 48, this.y + (this.height / 3) - 32]],
            [[endX - 32 - 48, this.y + (this.height / 3) - 32], [endX - 32, this.y + (this.height / 3) - 32]],
            [[endX - 32, this.y + (this.height / 3) - 32], [endX - 32, this.y + 32 * 3]],

            [[endX - 32 - 48 - 32, this.y + 32 * 3], [middleX + 32, this.y + 32 * 3]],
            [[middleX + 32, this.y + 32 * 3], [middleX + 32, this.y + (this.height / 3) - 32]],
            [[middleX + 32, this.y + (this.height / 3) - 32], [endX - 32 - 48 - 32, this.y + (this.height / 3) - 32]],
            [[endX - 32 - 48 - 32, this.y + 32 * 3], [endX - 32 - 48 - 32, this.y + (this.height / 3) - 32]],
        )
    }

    draw(ctx) {
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 5;

        ctx.beginPath();

        for (var i = 0; i < this.lines.length; i++) {
            ctx.moveTo(this.lines[i][0][0], this.lines[i][0][1])
            ctx.lineTo(this.lines[i][1][0], this.lines[i][1][1])
        }

        ctx.stroke();
    }
}
