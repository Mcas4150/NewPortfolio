import React, { Component } from "react";
import * as SimplexNoise from "simplex-noise";

export default class Simplex extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { width, height, rotation } = this.props;
    const context = this.refs.canvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(100, 100);
    context.rotate(rotation, 100, 100);
    context.fillStyle = "#F00";
    context.fillRect(-50, -50, 100, 100);
    context.restore();
  }

  render() {
    const { width, height } = this.props;
    return <canvas ref="canvas" width={width} height={height} />;
  }

  // constructor(props) {
  //   super(props);
  //   // this.state = { width: 0, height: 0, OrbitId: "", counter2: 0 };
  //   // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  //   this.draw = this.draw.bind(this);
  // }

  // componentDidMount() {
  //   this.ctx = this.canvas.getContext("2d");
  //   window.addEventListener("resize", this.reset);
  //   window.addEventListener("mousemove", this.mousemove);
  //   this.draw();
  // }

  // reset() {
  //   simplex = new SimplexNoise();
  //   w = canvas.width = window.innerWidth;
  //   h = canvas.height = window.innerHeight;
  //   m = Math.min(w, h);
  //   mx = w / 2;
  //   my = h / 2;
  // }

  // mousemove = (event) => {
  //   mx = event.clientX + 1;
  //   my = event.clientY + 1;
  // };

  // draw(timestamp) {
  //   now = timestamp;
  //   window.requestAnimationFrame(this.draw);
  //   this.ctx = this.canvas.getContext("2d");
  //   this.canvas.getContext("2d").fillStyle = "black";
  //   ctx.fillRect(0, 0, w, h);
  //   ctx.strokeStyle = "white";
  //   for (let i = 10; i < m / 2 - 40; i += 10) {
  //     this.drawCircle(i);
  //   }
  // }

  // drawCircle(r) {
  //   ctx.beginPath();
  //   let point, x, y;
  //   let deltaAngle = (Math.PI * 2) / 400;
  //   for (let angle = 0; angle < Math.PI * 2; angle += deltaAngle) {
  //     point = this.calcPoint(angle, r);
  //     x = point[0];
  //     y = point[1];
  //     ctx.lineTo(x, y);
  //   }
  //   ctx.closePath();
  //   ctx.stroke();
  // }

  // calcPoint(angle, r) {
  //   let noiseFactor = (mx / w) * 50;
  //   let zoom = (my / h) * 200;
  //   let x = Math.cos(angle) * r + w / 2;
  //   let y = Math.sin(angle) * r + h / 2;
  //   let n = simplex.noise3D(x / zoom, y / zoom, now / 2000) * noiseFactor;
  //   x = Math.cos(angle) * (r + n) + w / 2;
  //   y = Math.sin(angle) * (r + n) + h / 2;
  //   return [x, y];
  // }

  // render() {
  //   return (
  //     <div>
  //       <canvas
  //         className="simplex-canvas"
  //         width={this.props.width}
  //         height={this.props.height}
  //         ref={(c) => {
  //           this.canvas = c;
  //         }}
  //       />
  //     </div>
  //   );
  // }
}

let canvas;
let ctx;
let w, h;
let m;
let simplex;
let mx, my;
let now;
