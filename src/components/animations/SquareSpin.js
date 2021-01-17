import React, { useState, useEffect } from "react";

// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState({ x: null, y: null });

//   const updateMousePosition = (ev) => {
//     setMousePosition({ x: ev.clientX, y: ev.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return mousePosition;
// };

class Graphic extends React.Component {
  constructor(props) {
    super(props);
    this.paint = this.paint.bind(this);
  }

  componentDidUpdate() {
    this.paint();
  }

  paint() {
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
}

export default class CanvasApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);
  }

  tick() {
    // const rotation = this.state.rotation;
    const rotation = this.state.rotation + 0.04;
    this.setState({ rotation });
    requestAnimationFrame(this.tick);
  }

  render() {
    // const { x, y } = useMousePosition();
    return (
      <Graphic rotation={this.state.rotation} width={200} height={200} />
    );
  }
}

//MDN requestAnimationFrame
// var start = null;
// var element = document.getElementById("SomeElementYouWantToAnimate");
// element.style.position = "absolute";

// function step(t) {
//   if (!start) start = t;
//   var maxt = 2000; // length of animation
//   var dx = 1000; // change of animation
//   var dt = (t - start) / maxt; //fraction < 1
//   element.style.left = Math.min(dt * dx, 200) + "px";
//   if (dt < 1) window.requestAnimationFrame(step);
// }

// window.requestAnimationFrame(step);
