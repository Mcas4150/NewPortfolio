import React from "react";
import Sketch from "react-p5";

let grid;
let x;
let y;
let dir;

let ANTUP = 0;
let ANTRIGHT = 1;
let ANTDOWN = 2;
let ANTLEFT = 3;
let height = 400;
let width = 400;

const Processing = (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(400, 400).parent(canvasParentRef);
    grid = make2DArray(width, height);
    x = width / 2;
    y = height / 2;
    dir = ANTUP;
  };

  const draw = (p5) => {
    p5.strokeWeight(1);
    for (let n = 0; n < 100; n++) {
      let state = grid[x][y];
      if (state === 0) {
        turnRight();
        grid[x][y] = 1;
      } else if (state === 1) {
        turnLeft();
        grid[x][y] = 0;
      }

      p5.stroke(p5.color(255));
      if (grid[x][y] === 1) {
        p5.stroke(p5.color(0));
      }
      p5.point(x, y);
      moveForward();
    }
  };
  function turnRight() {
    dir++;
    if (dir > ANTLEFT) {
      dir = ANTUP;
    }
  }

  function turnLeft() {
    dir--;
    if (dir < ANTUP) {
      dir = ANTLEFT;
    }
  }

  function moveForward() {
    if (dir === ANTUP) {
      y--;
    } else if (dir === ANTRIGHT) {
      x++;
    } else if (dir === ANTDOWN) {
      y++;
    } else if (dir === ANTLEFT) {
      x--;
    }

    if (x > width - 1) {
      x = 0;
    } else if (x < 0) {
      x = width - 1;
    }
    if (y > height - 1) {
      y = 0;
    } else if (y < 0) {
      y = height - 1;
    }
  }

  function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default Processing;
