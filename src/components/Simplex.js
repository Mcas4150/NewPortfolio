import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import SimplexNoise from "simplex-noise";
import { getMousePos } from "../util/conversions";

export const Simplex = () => {
  let ref = useRef();
  useEffect(() => {
    let requestId,
      i = 0,
      simplex,
      n,
      mx,
      my;

    let canvas = ref.current;

    let context = canvas.getContext("2d");
    let ratio = getPixelRatio(context);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    let m = Math.min(canvas.width, canvas.height);

    // const mousemove = (event) => {
    //   mx = event.clientX + 1;
    //   my = event.clientY + 1;
    // };
    // canvas.addEventListener("mousemove", mousemove());

    const render = () => {
      simplex = new SimplexNoise();
      requestId = requestAnimationFrame(render);
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "white";
      for (let i = 10; i < m / 2 - 40; i += 10) {
        drawCircle(i);
      }
    };

    const drawCircle = (r) => {
      context.beginPath();
      let point, x, y;
      let deltaAngle = (Math.PI * 2) / 400;
      for (let angle = 0; angle < Math.PI * 2; angle += deltaAngle) {
        point = calcPoint(angle, r);
        x = point[0];
        y = point[1];
        context.lineTo(x, y);
      }
      context.closePath();
      context.stroke();
    };

    const calcPoint = (angle, r) => {

      // let pos = getMousePos(canvas, r);
      // let mx = pos.x / canvas.width + 1;
      // let my = pos.y / canvas.height + 1;
      let noiseFactor = (15 / canvas.width) * 50;
      let zoom = (50 / canvas.height) * 200;
      let x = Math.cos(angle) * r + canvas.width / 2;
      let y = Math.sin(angle) * r + canvas.height / 2;
      n = simplex.noise3D(x / zoom, y / zoom, requestId / 20000) * noiseFactor;
      x = Math.cos(angle) * (r + n) + canvas.width / 2;
      y = Math.sin(angle) * (r + n) + canvas.height / 2;
      return [x, y];
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return <canvas ref={ref} style={{ width: "100%", height: "100%" }} />;
};

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};

// function mousemove(event) {
//   mx = event.clientX + 1;
//   my = event.clientY + 1;
// }

// function draw(timestamp) {
//   now = timestamp;
//   requestAnimationFrame(draw);
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, w, h);
//   ctx.strokeStyle = "white";
//   for (let i = 10; i < m / 2 - 40; i += 10) {
//     drawCircle(i);
//   }
// }
