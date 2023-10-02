class Board {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.lines = [];

        // Borders - Top -> Right -> Bottom -> Left
        this.lines.push(
            [[this.x, this.y], [this.x + this.width / 2 - 8, this.y]],
            [[this.x + this.width / 2 + 8, this.y], [this.x + this.width, this.y]],
            [[this.x + (this.width / 2) - 8, this.y], [this.x + (this.width / 2) - 8, this.y + 32 * 2]],
            [[this.x + (this.width / 2) + 8, this.y], [this.x + (this.width / 2) + 8, this.y + 32 * 2]],
            [[this.x + (this.width / 2) - 8, this.y + 32 * 2], [this.x + (this.width / 2) + 8, this.y + 32 * 2]],

            [[this.x + this.width, this.y], [this.x + this.width, this.y + (this.height / 3)]],

            [[this.x + this.width * 5 / 6, this.y + (this.height / 3)], [this.x + this.width, this.y + (this.height / 3)]],
            [[this.x + this.width * 5 / 6, this.y + (this.height / 3)], [this.x + this.width * 5 / 6, this.y + (this.height / 2) - 16]],
            [[this.x + this.width * 5 / 6, this.y + (this.height / 2) - 16], [this.x + this.width, this.y + (this.height / 2) - 16]],
            
            [[this.x + this.width * 5 / 6, this.y + (this.height / 2) + 16], [this.x + this.width, this.y + (this.height / 2) + 16]],
            [[this.x + this.width * 5 / 6, this.y + (this.height / 2) + 16], [this.x + this.width * 5 / 6, this.y + (this.height * 2 / 3)]],
            [[this.x + this.width * 5 / 6, this.y + (this.height * 2 / 3)], [this.x + this.width, this.y + (this.height * 2 / 3)]],

            [[this.x + this.width, this.y + (this.height * 2 / 3)], [this.x + this.width, this.y + (this.height * 2 / 3) + (this.height / 6) - 8]],
            [[this.x + this.width - 32, this.y + (this.height * 2 / 3) + (this.height / 6) - 8], [this.x + this.width, this.y + (this.height * 2 / 3) + (this.height / 6) - 8]],
            [[this.x + this.width, this.y + (this.height * 2 / 3) + (this.height / 6) + 8], [this.x + this.width, this.y + this.height]],
            [[this.x + this.width - 32, this.y + (this.height * 2 / 3) + (this.height / 6) + 8], [this.x + this.width, this.y + (this.height * 2 / 3) + (this.height / 6) + 8]],
            [[this.x + this.width - 32, this.y + (this.height * 2 / 3) + (this.height / 6) - 8], [this.x + this.width - 32, this.y + (this.height * 2 / 3) + (this.height / 6) + 8]],

            [[this.x + this.width, this.y + this.height], [this.x, this.y + this.height]],
            [[this.x, this.y], [this.x, this.y + (this.height / 3)]],
            
            [[this.x + this.width / 6, this.y + (this.height / 3)], [this.x, this.y + (this.height / 3)]],
            [[this.x + this.width / 6, this.y + (this.height / 3)], [this.x + this.width / 6, this.y + (this.height / 2) - 16]],
            [[this.x + this.width / 6, this.y + (this.height / 2) - 16], [this.x, this.y + (this.height / 2) - 16]],
            
            [[this.x + this.width / 6, this.y + (this.height / 2) + 16], [this.x, this.y + (this.height / 2) + 16]],
            [[this.x + this.width / 6, this.y + (this.height / 2) + 16], [this.x + this.width / 6, this.y + (this.height * 2 / 3)]],
            [[this.x + this.width / 6, this.y + (this.height * 2 / 3)], [this.x, this.y + (this.height * 2 / 3)]],

            [[this.x, this.y + (this.height * 2 / 3)], [this.x, this.y + (this.height * 2 / 3) + (this.height / 6) - 8]],
            [[this.x + 32, this.y + (this.height * 2 / 3) + (this.height / 6) - 8], [this.x, this.y + (this.height * 2 / 3) + (this.height / 6) - 8]],
            [[this.x, this.y + (this.height * 2 / 3) + (this.height / 6) + 8], [this.x, this.y + this.height]],
            [[this.x + 32, this.y + (this.height * 2 / 3) + (this.height / 6) + 8], [this.x, this.y + (this.height * 2 / 3) + (this.height / 6) + 8]],
            [[this.x + 32, this.y + (this.height * 2 / 3) + (this.height / 6) - 8], [this.x + 32, this.y + (this.height * 2 / 3) + (this.height / 6) + 8]],
        );
            
        const middleX = this.x + this.width / 2;
        const endX = this.x + this.width;

        // Inside obstacles
        this.lines.push(
            [[this.x + 32, this.y + 32], [this.x + this.width / 6, this.y + 32]],
            [[this.x + this.width / 6, this.y + 32], [this.x + this.width / 6, this.y + 32 + 32]],
            [[this.x + this.width / 6, this.y + 32 + 32], [this.x + 32, this.y + 32 + 32]],
            [[this.x + 32, this.y + 32], [this.x + 32, this.y + 32 + 32]],
            
            [[this.x + this.width / 6 + 32, this.y + 32], [middleX - 8 - 32, this.y + 32]],
            [[middleX - 8 - 32, this.y + 32], [middleX - 8 - 32, this.y + 32 + 32]],
            [[middleX - 8 - 32, this.y + 32 + 32], [this.x + this.width / 6 + 32, this.y + 32 + 32]],
            [[this.x + this.width / 6 + 32, this.y + 32], [this.x + this.width / 6 + 32, this.y + 32 + 32]],

            [[endX - 32, this.y + 32], [this.x + this.width * 5 / 6, this.y + 32]],
            [[this.x + this.width * 5 / 6, this.y + 32], [this.x + this.width * 5 / 6, this.y + 32 + 32]],
            [[this.x + this.width * 5 / 6, this.y + 32 + 32], [endX - 32, this.y + 32 + 32]],
            [[endX - 32, this.y + 32], [endX - 32, this.y + 32 + 32]],
            
            [[this.x + this.width * 5 / 6 - 32, this.y + 32], [middleX + 8 + 32, this.y + 32]],
            [[middleX + 8 + 32, this.y + 32], [middleX + 8 + 32, this.y + 32 + 32]],
            [[middleX + 8 + 32, this.y + 32 + 32], [this.x + this.width * 5 / 6 - 32, this.y + 32 + 32]],
            [[this.x + this.width * 5 / 6 - 32, this.y + 32], [this.x + this.width * 5 / 6 - 32, this.y + 32 + 32]],

            [[this.x + 32, this.y + 32 * 3], [this.x + this.width / 6, this.y + 32 * 3]],
            [[this.x + this.width / 6, this.y + 32 * 3], [this.x + this.width / 6, this.y + (this.height / 3) - 32]],
            [[this.x + this.width / 6, this.y + (this.height / 3) - 32], [this.x + 32, this.y + (this.height / 3) - 32]],
            [[this.x + 32, this.y + 32 * 3], [this.x + 32, this.y + (this.height / 3) - 32]],

            [[this.x + this.width / 6 + 32, this.y + 32 * 3], [this.x + this.width / 6 + 32 + 16, this.y + 32 * 3]],
            [[this.x + this.width / 6 + 32 + 16, this.y + 32 * 3], [this.x + this.width / 6 + 32 + 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8]],
            [[this.x + this.width / 6 + 32 + 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8], [middleX - 8 - 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8]],
            [[this.x + this.width / 6 + 32, this.y + 32 * 3], [this.x + this.width / 6 + 32, (this.y + (this.height / 2) - 16)]],
            [[this.x + this.width / 6 + 32 + 16, (this.y + (this.height / 2) - 16)], [this.x + this.width / 6 + 32 + 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],
            [[this.x + this.width / 6 + 32, (this.y + (this.height / 2) - 16)], [this.x + this.width / 6 + 32 + 16, (this.y + (this.height / 2) - 16)]],
            [[this.x + this.width / 6 + 32 + 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8], [middleX - 8 - 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],
            [[middleX - 8 - 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8], [middleX - 8 - 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],

            [[endX - 32, this.y + 32 * 3], [this.x + this.width * 5 / 6, this.y + 32 * 3]],
            [[this.x + this.width * 5 / 6, this.y + 32 * 3], [this.x + this.width * 5 / 6, this.y + (this.height / 3) - 32]],
            [[this.x + this.width * 5 / 6, this.y + (this.height / 3) - 32], [endX - 32, this.y + (this.height / 3) - 32]],
            [[endX - 32, this.y + (this.height / 3) - 32], [endX - 32, this.y + 32 * 3]],

            [[this.x + this.width * 5 / 6 - 32, this.y + 32 * 3], [this.x + this.width * 5 / 6 - 32 - 16, this.y + 32 * 3]],
            [[this.x + this.width * 5 / 6 - 32 - 16, this.y + 32 * 3], [this.x + this.width * 5 / 6 - 32 - 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8]],
            [[this.x + this.width * 5 / 6 - 32 - 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8], [middleX + 8 + 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8]],
            [[this.x + this.width * 5 / 6 - 32, this.y + 32 * 3], [this.x + this.width * 5 / 6 - 32, (this.y + (this.height / 2) - 16)]],
            [[this.x + this.width * 5 / 6 - 32 - 16, (this.y + (this.height / 2) - 16)], [this.x + this.width * 5 / 6 - 32 - 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],
            [[this.x + this.width * 5 / 6 - 32, (this.y + (this.height / 2) - 16)], [this.x + this.width * 5 / 6 - 32 - 16, (this.y + (this.height / 2) - 16)]],
            [[this.x + this.width * 5 / 6 - 32 - 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8], [middleX + 8 + 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],
            [[middleX + 8 + 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8], [middleX + 8 + 32, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],

            [[this.x + this.width / 6 + 32, this.y + (this.height / 2) + 16], [this.x + this.width / 6 + 32 + 16, this.y + (this.height / 2) + 16]],
            [[this.x + this.width / 6 + 32, this.y + (this.height / 2) + 16], [this.x + this.width / 6 + 32, this.y + (this.height * 2 / 3)]],
            [[this.x + this.width / 6 + 32 + 16, this.y + (this.height / 2) + 16], [this.x + this.width / 6 + 32 + 16, this.y + (this.height * 2 / 3)]],
            [[this.x + this.width / 6 + 32, this.y + (this.height * 2 / 3)], [this.x + this.width / 6 + 32 + 16, this.y + (this.height * 2 / 3)]],

            [[endX - this.width / 6 - 32, this.y + (this.height / 2) + 16], [endX - this.width / 6 - 32 - 16, this.y + (this.height / 2) + 16]],
            [[endX - this.width / 6 - 32, this.y + (this.height / 2) + 16], [endX - this.width / 6 - 32, this.y + (this.height * 2 / 3)]],
            [[endX - this.width / 6 - 32 - 16, this.y + (this.height / 2) + 16], [endX - this.width / 6 - 32 - 16, this.y + (this.height * 2 / 3)]],
            [[endX - this.width / 6 - 32, this.y + (this.height * 2 / 3)], [endX - this.width / 6 - 32 - 16, this.y + (this.height * 2 / 3)]],

            [[this.x + 32 * 3 + 48 + 16, this.y + 32 * 3], [endX - 32 * 3 - 48 - 16, this.y + 32 * 3]],
            [[this.x + 32 * 3 + 48 + 16, this.y + 32 * 3], [this.x + 32 * 3 + 48 + 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32]],
            [[endX - 32 * 3 - 48 - 16, this.y + 32 * 3], [endX - 32 * 3 - 48 - 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32]],
            [[this.x + 32 * 3 + 48 + 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32], [this.x + (this.width / 2) - 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32]],
            [[endX - 32 * 3 - 48 - 16, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32], [this.x + (this.width / 2) + 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32]],
            [[this.x + (this.width / 2) + 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32], [this.x + (this.width / 2) + 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],
            [[this.x + (this.width / 2) - 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 - 8 - 32], [this.x + (this.width / 2) - 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],
            [[this.x + (this.width / 2) + 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8], [this.x + (this.width / 2) - 8, (this.y + 32 * 3 + this.y + (this.height / 2) - 16) / 2 + 8]],

            
            [[this.x + 32 * 3 + 48 + 16,this.y + (this.height * 2 / 3) - 4], [this.x + (this.width / 2) - 8 ,this.y + (this.height * 2 / 3) - 4]],
            [[this.x + (this.width / 2) + 8,this.y + (this.height * 2 / 3) - 4], [endX - 32 * 3 - 48 - 16,this.y + (this.height * 2 / 3) - 4]],
            [[endX - 32 * 3 - 48 - 16, this.y + 32 * 3 + middleX - 32], [endX - 32 * 3 - 48 - 16, this.y + 32 * 3 + middleX - 4] ],
            [[this.x + 32 * 3 + 48 + 16, this.y + 32 * 3 + middleX - 32], [this.x + 32 * 3 + 48 + 16, this.y + 32 * 3 + middleX - 4] ],
            [[this.x + 32 * 3 + 48 + 16, this.y + 32 * 3 + middleX - 32], [endX - 32 * 3 - 48 - 16, this.y + 32 * 3 + middleX - 32] ],
            [[this.x + (this.width / 2) - 8, (this.height * 2 / 3) + 10 - 4], [this.x + (this.width / 2) - 8, (this.height * 2 / 3) + 48 + 4] ],
            [[this.x + (this.width / 2) + 8, (this.height * 2 / 3) + 10 - 4], [this.x + (this.width / 2) + 8, (this.height * 2 / 3) + 48 + 4] ],
            [[this.x + (this.width / 2) - 8, (this.height * 2 / 3) + 48 + 4], [this.x + (this.width / 2) + 8, (this.height * 2 / 3) + 48 + 4] ],
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
