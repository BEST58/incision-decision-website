const pressStart2PFont = new FontFace('pressStart2P', 'url(https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2)');
pressStart2PFont.load().then(function(font){
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

const startingX = 50;
const startingY = 50;

var score = 0;

const map = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', '-', ' ', ' ', ' ', '-', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', '-', ' ', ' ', ' ', '-', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', '-', ' ', '-', '-', '-', ' ', '-', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
]

const boundaries = [],
      pellets = [];
for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[row].length; col++) {
    const value = map[row][col];
    if (value === '-') {
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
    } else if (value === ' ') {
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
      x: startingX + Boundary.width * parseInt((map[parseInt(map.length / 2)].length + 1)/ 2) + 3,
      y: startingY + Boundary.height * map.length / 2 + Boundary.height / 2 + 3,
    }, image: getImg("images/blinky.png")
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

function willIntersect(circle, velocity) {
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
      if (willIntersect(pacman, { x: 0, y: -3 })) {
        pacman.velocity.y = 0;
      } else {
        pacman.velocity.y = -3;
      }
    } else if (keysPressed.s && lastKey === 's') {
      if (willIntersect(pacman, { x: 0, y: 3 })) {
        pacman.velocity.y = 0;
      } else {
        pacman.velocity.y = 3;
      }
    } else if (keysPressed.a && lastKey === 'a') {
      if (willIntersect(pacman, { x: -3, y: 0 })) {
        pacman.velocity.x = 0;
      } else {
        pacman.velocity.x = -3;
      }
    } else if (keysPressed.d && lastKey === 'd') {
      if (willIntersect(pacman, { x: 3, y: 0 })) {
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

    pacman.calc();
    Object.values(ghosts).forEach(ghost => {
      const velocities = {
        left: { x: -5, y: 0 },
        right: { x: 5, y: 0 },
        down: { x: 0, y: 5 },
        up: { x: 0, y: -5 }
      }

      const options = {
        left: willIntersect(ghost, { x: -5, y: 0 }),
        right: willIntersect(ghost, { x: 5, y: 0 }),
        down: willIntersect(ghost, { x: 0, y: 5 }),
        up: willIntersect(ghost, { x: 0, y: -5 })
      };

      const optKeys = Object.keys(options);

      const numOfOptions = Object.values(options).filter(a => a).length;
      if (numOfOptions > 0) {
        const num = parseInt(Math.random() * (numOfOptions - 0.0001));
        var counter = 0;
        for (let i = 0; i < optKeys.length; i++) {
          const key = optKeys[i];
          if (options[key]) {
            if (num === counter) {
              ghost.velocity = velocities[key];
              break;
            }
            counter += 1;
          }
        }
      }

      ghost.calc();
    });

    boundaries.forEach(a => a.draw());
    pellets.forEach(a => a.draw());
    pacman.draw();

    Object.values(ghosts).forEach(ghost => ghost.draw());
    
    ctx.font = "40px pressStart2P";
    ctx.fillStyle = "white";
    ctx.fillText(`SCORE: ${score}`, 10, 45);
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