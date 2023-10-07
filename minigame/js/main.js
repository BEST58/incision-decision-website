var doStop = false;
var fpsInterval, startTime, now, then, elapsed, ctx;

var lastKey = null;
var keysPressed = {
  w: false,
  a: false,
  s: false,
  d: false
};

const map = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', ' ', '-', ' ', '-'],
  ['-', ' ', '-', ' ', '-', ' ', '-'],
  ['-', ' ', '-', ' ', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
]

const boundaries = [];
for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[row].length; col++) {
    const value = map[row][col];
    if (value === '-') {
      const image = findImage(row, col);
      boundaries.push(
        new Boundary({
          position: {
            x: col * Boundary.width,
            y: row * Boundary.height
          },
          image: image
        })
      );
    }
  }
}

const pacman = new Pacman({
  position: {
    x: Boundary.width * 3 / 2,
    y: Boundary.width * 9 / 2
  },
  velocity: {
    x: 0,
    y: 0
  }
});

function doesCircleIntersectRectangle({
  circle,
  rectangle
}) {
  return (
    circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height &&
    circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x &&
    circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y && 
    circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width
  )
};

function willIntersect(velocity) {
  var willIntersect = false;
  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i];
    if (
      doesCircleIntersectRectangle({
        circle: { ...pacman, velocity },
        rectangle: boundary
      })
    ) {
      willIntersect = true;
      break;
    }
  };
  return willIntersect;
}

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

    if (keysPressed.w && lastKey === 'w') {
      if (willIntersect({ x: 0, y: -5 })) {
        pacman.velocity.y = 0;
      } else {
        pacman.velocity.y = -5;
      }
    } else if (keysPressed.s && lastKey === 's') {
      if (willIntersect({ x: 0, y: 5 })) {
        pacman.velocity.y = 0;
      } else {
        pacman.velocity.y = 5;
      }
    } else if (keysPressed.a && lastKey === 'a') {
      if (willIntersect({ x: -5, y: 0 })) {
        pacman.velocity.x = 0;
      } else {
        pacman.velocity.x = -5;
      }
    } else if (keysPressed.d && lastKey === 'd') {
      if (willIntersect({ x: 5, y: 0 })) {
        pacman.velocity.x = 0;
      } else {
        pacman.velocity.x = 5;
      }
    }

    boundaries.forEach(boundary => {
      if (
        doesCircleIntersectRectangle({
          circle: pacman,
          rectangle: boundary
        })
      ) {
        pacman.velocity.x = 0;
        pacman.velocity.y = 0;
        console.log("stopped")
      }
    });

    pacman.calc();

    boundaries.forEach(a => a.draw());
    pacman.draw();
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
  c.width = window.innerWidth;
  c.height = window.innerHeight - 4;
  ctx = c.getContext("2d");

  startAnimating(30);
});

document.addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'w':
    case 'ArrowUp':
      keysPressed.w = true;
      keysPressed.s = false;
      lastKey = 'w';
      break;
    case 's':
    case 'ArrowDown':
      keysPressed.s = true;
      keysPressed.w = false;
      lastKey = 's';
      break;
    case 'a':
    case 'ArrowLeft':
      keysPressed.a = true;
      keysPressed.d = false;
      lastKey = 'a';
      break;
    case 'd':
    case 'ArrowRight':
      keysPressed.d = true;
      keysPressed.a = false;
      lastKey = 'd';
      break;
  }
});

// document.addEventListener('keyup', ({ key }) => {
//   switch (key) {
//     case 'w':
//     case 'ArrowUp':
//       keysPressed.w = false;
//       break;
//     case 's':
//     case 'ArrowDown':
//       keysPressed.s = false;
//       break;
//     case 'a':
//     case 'ArrowLeft':
//       keysPressed.a = false;
//       break;
//     case 'd':
//     case 'ArrowRight':
//       keysPressed.d = false;
//       break;
//   }
// });