var doStop = false;
var fpsInterval, startTime, now, then, elapsed, ctx;

const pacman = new Pacman(10, 27, 27);
const board = new Board(10, 10, 448, 496);

function animate() {

  // stop
  if (doStop) {
    return;
  }

  // request another frame

  requestAnimationFrame(animate);

  // calc elapsed time since last loop

  now = Date.now();
  elapsed = now - then;

  // if enough time has elapsed, draw the next frame

  if (elapsed > fpsInterval) {
    ctx.reset();

    pacman.calc(board.lines);

    board.draw(ctx);
    pacman.draw(ctx);
  }
}

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

document.addEventListener("DOMContentLoaded", function () {

  const c = document.getElementById("myCanvas");
  ctx = c.getContext("2d");

  startAnimating(30);

});

document.addEventListener('keydown', ({ key }) => {
  switch(key) {
    case 'w':
    case 'ArrowUp':
      pacman.velocity.y = -5;
      break;
    case 's':
    case 'ArrowDown':
      pacman.velocity.y = 5;
      break;
    case 'a':
    case 'ArrowLeft':
      pacman.velocity.x = -5;
      break;
    case 'd':
    case 'ArrowRight':
      pacman.velocity.x = 5;
      break;
  }
});