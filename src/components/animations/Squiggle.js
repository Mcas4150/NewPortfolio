import React, { useRef, useEffect, useState } from "react";

export const Squiggle = () => {
  const [dimensions, setDimensions] = useState({
    heigh: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  let ref = useRef();
  useEffect(() => {
    let requestId;
    // i = 0;
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
    let w = canvas.width;
    let h = canvas.height;
    // let ctx = canvas;

    // let m = Math.min(canvas.width, canvas.height);

    // const mousemove = (event) => {
    //   mx = event.clientX + 1;
    //   my = event.clientY + 1;
    // };
    // canvas.addEventListener("mousemove", mousemove());

    const render = () => {
      // simplex = new SimplexNoise();
      requestId = requestAnimationFrame(render);

      context.fillRect(0, 0, canvas.width, canvas.height);

      draw();
    };

    function draw() {
      context.fillStyle = "white";
      context.fillRect(0, 0, w, h);
      context.fillStyle = "black";
      let xDiff = 0.5;
      let yDiff = 0.4;
      let step = 20;
      for (let x = -step; x < w + step; x += step) {
        let xOffset = Math.abs(x - w / 2);
        let cp1x = x - w * xDiff + xOffset;
        let cp1y = h * yDiff;
        let cp2x = x + w * xDiff - xOffset;
        let cp2y = h * (1 - yDiff);
        context.beginPath();
        context.moveTo(x, -5);
        context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, h + 5);
        context.stroke();
      }
    }

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <canvas
      ref={ref}
      style={{ width: dimensions.width, height: dimensions.height }}
    />
  );
};

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

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
