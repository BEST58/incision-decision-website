document.addEventListener("DOMContentLoaded", function() {
    let playerXPosition = 100;
  
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
  
    function drawPacman() {
      ctx.arc(playerXPosition, 75, 15, 0, 2 * Math.PI);
      ctx.fillStyle = "yellow";
      ctx.fill();
    }
  
    setInterval(playerXPosition+=10, 10)
    setInterval(drawPacman(), 10)

  });