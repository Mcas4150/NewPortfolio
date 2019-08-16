import React, { Component } from "react";

export default class Ball extends Component {
  componentDidMount() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var raf;
    var running = false;

    var ball = {
      x: 500,
      y: 200,
      vx: 16,
      vy: 4,
      radius: 200,
      color: "gold",
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    };

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      } else {
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      raf = window.requestAnimationFrame(animate);
    }

    canvas.addEventListener("mouseover", function() {
      if (!running) {
        window.requestAnimationFrame(animate);
        running = true;
      }
    });

    canvas.addEventListener("mouseout", function() {
      window.cancelAnimationFrame(raf);
      running = false;
    });
  }

  render() {
    return <canvas id="canvas" width="1800" height="830" />;
  }
}
