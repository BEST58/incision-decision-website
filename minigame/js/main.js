var doStop = false;
var fpsInterval, startTime, now, then, elapsed, ctx;

const pacman = new Pacman(10, 27, 27);
const board = new Board(10, 10, 448, 496);
const pellet = new Pellet(106, 91, 3);

// Ghost pos: board.x + board.width / 2, board.y + board.height / 2 
//const ghost = new Ghost (10, ??, ??);
//const ghost = new GhostTwo (10, ??, ??);
//const ghost = new GhostThree (10, ??, ??);
//const ghost = new GhostFour (10, ??, ??);

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
    console.log(pellet.getBoundary())

    pellet.draw(ctx)
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
      pacman.velocity.y = -1;
       pacman.velocity.x = 0;
      break;
    case 's':
    case 'ArrowDown':
      pacman.velocity.y = 1;
       pacman.velocity.x = 0;
      break;
    case 'a':
    case 'ArrowLeft':
      pacman.velocity.x = -1;
       pacman.velocity.y = 0;
      break;
    case 'd':
    case 'ArrowRight':
      pacman.velocity.x = 1;
       pacman.velocity.y = 0;
      break;
  }
});
