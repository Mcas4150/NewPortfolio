import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const Angle = () => {
  let ref = useRef();
  useEffect(() => {
    let requestId,
      // i = 0,
      size;
    // simplex;

    let canvas = ref.current;

    let context = canvas.getContext("2d");
    let ratio = getPixelRatio(context);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);
    canvas.lineWidth = 8;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    size = 80;
    let w = canvas.width;
    let h = canvas.height;
    let ctx = context;

    // let m = Math.min(canvas.width, canvas.height);

    // const mousemove = (event) => {
    //   mx = event.clientX + 1;
    //   my = event.clientY + 1;
    // };
    // canvas.addEventListener("mousemove", mousemove());

    const render = () => {
      // simplex = new SimplexNoise();
      // requestId = requestAnimationFrame(render);

      context.fillRect(0, 0, canvas.width, canvas.height);

      draw();
    };

    // function draw() {
    //   context.fillStyle = "white";
    //   context.fillRect(0, 0, w, h);
    //   context.fillStyle = "black";
    //   let xDiff = 0.5;
    //   let yDiff = 0.4;
    //   let step = 20;
    //   for (let x = -step; x < w + step; x += step) {
    //     let xOffset = Math.abs(x - w / 2);
    //     let cp1x = x - w * xDiff + xOffset;
    //     let cp1y = h * yDiff;
    //     let cp2x = x + w * xDiff - xOffset;
    //     let cp2y = h * (1 - yDiff);
    //     context.beginPath();
    //     context.moveTo(x, -5);
    //     context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, h + 5);
    //     context.stroke();
    //   }
    // }
    function draw() {
      ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.fillStyle = "black";
      ctx.strokeStyle = "white";

      let nrOfFigsX = Math.floor(w / size);
      let leftOverX = w - nrOfFigsX * size;
      let xMargin = leftOverX / 2;

      let nrOfFigsY = Math.floor(h / size);
      let leftOverY = h - nrOfFigsY * size;
      let yMargin = leftOverY / 2;

      for (let x = 0; x < nrOfFigsX; x += 1) {
        for (let y = 0; y < nrOfFigsY; y += 1) {
          drawFigure(x * size + xMargin, y * size + yMargin, 20);
        }
      }
    }

    function drawFigure(x0, y0) {
      let positions = [];
      let sideSize = 4;
      let stepSize = (size * 0.8) / (sideSize - 1);
      let offset = size * 0.1;
      let nrOfPos = sideSize * sideSize;
      for (let i = 0; i < nrOfPos; i++) {
        positions[i] = false;
      }
      let firstPosition = true;
      ctx.beginPath();
      do {
        let index;
        let value;
        do {
          index = Math.floor(Math.random() * nrOfPos);
          value = positions[index];
        } while (value);
        positions[index] = true;
        let x = index % sideSize;
        let y = Math.floor(index / sideSize);
        if (firstPosition) {
          ctx.moveTo(x0 + x * stepSize + offset, y0 + y * stepSize + offset);
        } else {
          ctx.lineTo(x0 + x * stepSize + offset, y0 + y * stepSize + offset);
        }
        firstPosition = false;
      } while (positions.some((pos) => pos === false));
      ctx.closePath();
      ctx.stroke();
    }

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
