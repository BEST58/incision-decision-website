const pressStart2PFont = new FontFace('pressStart2P', 'url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2)');
pressStart2PFont.load().then(function (font) {
  document.fonts.add(font);
  console.log("Font Loaded!");
});

var doStop = false;
var fpsInterval, startTime, now, then, elapsed, ctx;

var lastKey = null;
var keysPressed = {
  w: false,
  a: false,
  s: false,
  d: false
};

const startingX = 35;
const startingY = 50;

var score = 0;

const map = [
  ['█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
  ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
  ['█', ' ', '█', '█', '█', ' ', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', ' ', '█', '█', '█', ' ', '█'],
  ['█', ' ', '█', '█', '█', ' ', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', ' ', '█', '█', '█', ' ', '█'],
  ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
  ['█', ' ', '█', '█', '█', ' ', '█', '█', ' ', '█', '█', '█', '█', '█', ' ', '█', '█', ' ', '█', '█', '█', ' ', '█'],
  ['█', ' ', ' ', ' ', ' ', ' ', '█', '█', ' ', ' ', ' ', '█', ' ', ' ', ' ', '█', '█', ' ', ' ', ' ', ' ', ' ', '█'],
  ['█', '█', '█', '█', '█', ' ', '█', '█', '█', '█', ' ', '█', ' ', '█', '█', '█', '█', ' ', '█', '█', '█', '█', '█'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['█', '█', '█', '█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█', '█', '█', '█'],
  ['█', ' ', ' ', ' ', ' ', ' ', '█', '█', ' ', '█', ' ', ' ', ' ', '█', ' ', '█', '█', ' ', ' ', ' ', ' ', ' ', '█'],
  ['█', ' ', '█', '█', '█', ' ', ' ', ' ', ' ', '█', ' ', '█', ' ', '█', ' ', ' ', ' ', ' ', '█', '█', '█', ' ', '█'],
  ['█', ' ', '█', '█', '█', ' ', '█', '█', ' ', '█', '█', '█', '█', '█', ' ', '█', '█', ' ', '█', '█', '█', ' ', '█'],
  ['█', ' ', ' ', '█', '█', ' ', '█', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', '█', ' ', '█', '█', ' ', ' ', '█'],
  ['█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█', '█', '█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█'],
  ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
  ['█', ' ', '█', '█', '█', ' ', '█', '█', ' ', '█', ' ', ' ', ' ', '█', ' ', '█', '█', ' ', '█', '█', '█', ' ', '█'],
  ['█', ' ', '█', '█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█', ' ', '█', '█', '█', ' ', '█'],
  ['█', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '█'],
  ['█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
]

const endingX = startingX + Boundary.width * map[0].length;

const boundaries = [],
  pellets = [];
for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[row].length; col++) {
    const value = map[row][col];
    if (value === '█') {
      const image = findImage(row, col);
      boundaries.push(
        new Boundary({
          position: {
            x: startingX + col * Boundary.width,
            y: startingY + row * Boundary.height
          },
          image: image
        })
      );
    } else if (value === ' ' && col != 0 && col != 22) {
      pellets.push(
        new Pellet({
          position: {
            x: startingX + col * Boundary.width + Boundary.width / 2,
            y: startingY + row * Boundary.height + Boundary.height / 2
          }
        })
      )
    }
  }
}

const pacman = new Pacman({
  position: {
    x: startingX + Boundary.width * 3 / 2,
    y: startingY + Boundary.width * 3 / 2
  },
  velocity: { x: 0, y: 0 }
});

const ghosts = {
  Blinky: new Ghost({
    position: {
      x: endingX - Boundary.width * 2 + 3,
      y: startingY + Boundary.height + 3
    },
    image: getImg("images/blinky.png"),
    smartAlgo: true,
    velocity: { x: -3, y: 0 }
  }),
  Pinky: new Ghost({
    position: {
      x: endingX - Boundary.width * 2 + 3,
      y: startingY + Boundary.height * map.length / 2 + 3,
    },
    image: getImg("images/pinky.png"),
    smartAlgo: true,
    velocity: { x: -3, y: 0 }
  }),
  Inky: new Ghost({
    position: {
      x: endingX - Boundary.width * 3 + 3,
      y: startingY + Boundary.height + 3
    },
    image: getImg("images/inky.png"),
    smartAlgo: false,
    velocity: { x: -3, y: 0 }
  }),
  Clyde: new Ghost({
    position: {
      x: endingX - Boundary.width * 3 + 3,
      y: startingY + Boundary.height + 3
    },
    image: getImg("images/clyde.png"),
    smartAlgo: false,
    velocity: { x: -3, y: 0 }
  })
}

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

function doesRectangleIntersectRectangle({
  rec1,
  rec2
}) {
  return (
    rec1.position.y + rec1.velocity.y <= rec2.position.y + rec2.height &&
    rec1.position.x + rec1.width + rec1.velocity.x >= rec2.position.x &&
    rec1.position.y + rec1.height + rec1.velocity.y >= rec2.position.y &&
    rec1.position.x + rec1.velocity.x <= rec2.position.x + rec2.width
  )
};

function willIntersectCircle(circle, velocity) {
  var willIntersect = false;
  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i];
    if (
      doesCircleIntersectRectangle({
        circle: { ...circle, velocity },
        rectangle: boundary
      })
    ) {
      willIntersect = true;
      break;
    }
  };
  return willIntersect;
}

function willIntersectRectangle(rectangle, velocity) {
  const rec1 = { ...rectangle, velocity };
  var willIntersect = false;
  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i];
    if (
      doesRectangleIntersectRectangle({
        rec1: rec1,
        rec2: boundary
      })
    ) {
      // console.log("Intersects", velocity)
      willIntersect = true;
      break;
    }
  };
  return willIntersect;
}

function animate() {
  // stop
  if (doStop) {
    ctx.fillText(`GAME OVER`, 225, 375);
    return;
  }

  // request another frame
  requestAnimationFrame(animate);

  // calc elapsed time since last loop
  now = Date.now();
  elapsed = now - then;

  // if enough time has elapsed, draw the next frame
  if (!(elapsed > fpsInterval)) return;

  then = now;

  ctx.reset();

  if (keysPressed.w && lastKey === 'w') {
    if (willIntersectCircle(pacman, { x: 0, y: -3 })) {
      pacman.velocity.y = 0;
    } else {
      pacman.velocity.y = -3;
    }
  } else if (keysPressed.s && lastKey === 's') {
    if (willIntersectCircle(pacman, { x: 0, y: 3 })) {
      pacman.velocity.y = 0;
    } else {
      pacman.velocity.y = 3;
    }
  } else if (keysPressed.a && lastKey === 'a') {
    if (willIntersectCircle(pacman, { x: -3, y: 0 })) {
      pacman.velocity.x = 0;
    } else {
      pacman.velocity.x = -3;
    }
  } else if (keysPressed.d && lastKey === 'd') {
    if (willIntersectCircle(pacman, { x: 3, y: 0 })) {
      pacman.velocity.x = 0;
    } else {
      pacman.velocity.x = 3;
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
    }
  });

  pellets.forEach((pellet, i) => {
    if (Math.hypot(
      pellet.position.x - pacman.position.x,
      pellet.position.y - pacman.position.y
    ) < pellet.radius + pacman.radius
    ) {
      score += 10;
      pellets.splice(i, 1);
    }
  });

  pacman.calc(startingX, endingX);
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

      ghost.prevCollisions = [];
      ghost.updatePosition(options, pacman.position);
    } else {
      ghost.calc(pacman.position);
    }

    
  });

  boundaries.forEach(a => a.draw());
  pellets.forEach(a => a.draw());
  pacman.draw();

  Object.values(ghosts).forEach(ghost => ghost.draw());

  ctx.font = "40px pressStart2P";
  ctx.fillStyle = "white";
  ctx.fillText(`SCORE: ${score}`, 10, 45);
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

  startAnimating(60);
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key.includes("Arrow")) e.preventDefault();

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