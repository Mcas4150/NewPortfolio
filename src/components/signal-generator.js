import React, { Component } from "react";
import "../styles/signal-generator.css";
import { dbToLinear } from "../util/conversions";

import {

  WAVECOLORTOTAL
} from "../util/colors";

export default class SignalGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStarted: false
    };
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext("2d");
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("orientationchange", this.props.restart);

    this.drawPureWavesCanvas();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("orientationchange", this.props.restart);
  }

  handleResize = () => {
    this.props.handleResize();
    this.drawPureWavesCanvas();
  };

  renderCanvas = signals => {
    this.drawPureWavesCanvas();
    // let t = 0;
    const numberPoints = 2048 * 32;
    const sliceWidth = this.props.width / numberPoints;
    // Complex has only 1 signal in object
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let fundamentalMax = 1;
    let fundamentalMin = -1;
    let difference = 0;
    let fundamentalDifference = 0;
    let scale = 0;
    if (signals[0].wavetype === "complex") {
      let t = 0;
      let volume = dbToLinear(signals[0].volume);
      let wavelength = (100 * this.props.height) / signals[0].freq;
      let v = wavelength / signals[0].freq;
      let k = (2 * Math.PI) / wavelength;
      for (let i = 0; i < numberPoints; i++) {
        let answer = 0;
        for (let j = 0; j < signals[0].partials.length; j++) {
          let wavelength =
            (100 * this.props.height) / (signals[0].freq * (j + 1));
          let v = wavelength / (signals[0].freq * (j + 1));
          let k = (2 * Math.PI) / wavelength;
          answer += signals[0].partials[j] * Math.cos(k * (i + v * t));
        }

        if (answer > max) {
          max = answer;
        }
        if (answer < min) {
          min = answer;
        }
      }
      fundamentalDifference = fundamentalMax - fundamentalMin;
      difference = max - min;
      scale = fundamentalDifference / difference;
    }

    // console.table(signals)

    // // NEW CHANGE: ONLY SUM COLOR
    // for (let signal of signals){
    //
    //   // We get the x-distance between each point by dividing the total width by the number of points
    //   let color;
    //   switch (signal.color) {
    //     case 0:
    //       color = WAVECOLOR1;
    //       break;
    //     case 1:
    //       color = WAVECOLOR2;
    //       break;
    //     case 2:
    //       color = WAVECOLOR3;
    //       break;
    //     case 3:
    //       color = WAVECOLOR4;
    //       break;
    //     case 4:
    //       color = WAVECOLOR5;
    //       break;
    //     case 5:
    //       color = WAVECOLOR6;
    //       break;
    //     default:
    //       color = WAVECOLOR1;
    //       break;
    //     }
    //
    //   /*

    // NEW CHANGE: ONLY SUM COLOR
    // if(signals.length > 1){
    // Draw combined wave
    this.ctx.beginPath();
    this.setStyleWidthOpacity(this.ctx, WAVECOLORTOTAL, "5", 1);

    // x starts at 0 (first point is at 0)
    let x = 0;
    // For each of the points that we have

    // let volume = dbToLinear(signal.volume);
    let volume = 1;
    if (isNaN(volume)) {
      volume = 0;
    }
    let t = 0;
    //let wavelength = 100 * this.props.height / signal.freq;
    //let v = wavelength / signal.freq;
    //let k = 2 * Math.PI / wavelength;
    for (let i = 0; i < numberPoints; i++) {
      let y = 0;
      for (let signal of signals) {
        let wavelength = (100 * this.props.height) / signal.freq;
        let v = wavelength / signal.freq;
        let k = (2 * Math.PI) / wavelength;
        let volume = dbToLinear(signal.volume);
        let f;
        switch (signal.wavetype) {
          case "sine":
            f = x => Math.cos(k * (x + v * t));
            break;
          case "square":
            f = x => (Math.cos(k * (x + v * t)) > 0 ? 1 : -1);
            break;
          case "sawtooth":
            f = x => 2 * (x / wavelength - Math.floor(0.5 + x / wavelength));
            break;
          case "triangle":
            f = x =>
              (4 / wavelength) *
              (Math.abs((x % wavelength) - wavelength / 2) - wavelength / 4);
            break;
          case "complex":
            f = x => {
              let answer = 0;
              for (let i = 0; i < signal.partials.length; i++) {
                let wavelength =
                  (100 * this.props.height) / (signal.freq * (i + 1));
                let v = wavelength / (signal.freq * (i + 1));
                let k = (2 * Math.PI) / wavelength;
                answer += signal.partials[i] * Math.cos(k * (x + v * t));
              }
              return ((answer - min) / Math.abs(max - min)) * 2 - 1;
              //return (answer + Math.abs(min))/difference * fundamentalDifference + min;
            };
            break;
          default:
            f = val => Infinity;
        }
        if (isNaN(volume)) {
          volume = 0;
        }
        y += volume * 350 * f(x);
      }
      //let y = 0;
      // Calculate the location of the point using the equation of the wave.
      //y+= volume * 350 * Math.cos(k * (x + v * t))
      // if (signal.volume < 0) {
      //   y += (0 * 350 * Math.cos(k * (x + v * t)));
      // } else {
      //   y += (amplitude[0] * 350 * Math.cos(k * (x + v * t)));
      // }

      // y *= scaleProportion;

      y += this.props.height / 2;

      // We draw the point in the canvas
      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
      // x moves the x-distance to the right
      x += sliceWidth;
    }
    this.ctx.stroke();

    // Find min freq and Draw axes
    this.props.drawCombinedInfo(
      signals.reduce((total, signal) => {
        return signal.freq < total ? signal.freq : total;
      }, Infinity)
    );
    // }
  };

  // Time variable
  // var t = 0;
  // var referenceComplexAmplitude;
  // var drawTimeStamp;
  // var prevNFingers = 0;
  // var randomInitialVolumes = [];

  // This function creates the grid for the waves canvas
  createGrid(ctx, canvas) {
    // let canvasRect = canvas.getBoundingClientRect();
    let canvasHeight = this.props.height;
    let canvasWidth = this.props.width;

    // We clear whatever is in scope and we create the grid again
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#ADCAD6";
    ctx.fillRect(25, 25, canvasWidth - 250, canvasHeight - 75);

    // Mid point of the scope canvas (used to create the grid)
    let midPoint = {
      x: canvasWidth / 2,
      y: canvasHeight / 2
    };

    // Draw the white lines
    ctx.beginPath();
    this.setStyleWidthOpacity(ctx, "rgb(255, 255, 255)", "5", 1);
    // Dash Space determines the distance between white lines
    let dashSpace = 57.85;

    // Draw the scale for the canvas
  }

  // Draws the scale information for the waves canvas
  drawScaleInfo(ctx, midPoint, canvasHeight, dashSpace) {
    let lengthScale = dashSpace * 1;
    let offsetY = 0;
    let offsetX = 0;
    let lengthLittleLines = 30;
    let textOffset = 20;

    // Draw yellow scale
    ctx.beginPath();
    this.setStyleWidthOpacity(ctx, "orange", "5", 1);
    ctx.moveTo(midPoint.x + offsetX, canvasHeight / 2);
    ctx.lineTo(midPoint.x + lengthScale - offsetX, canvasHeight / 2);

    ctx.moveTo(
      midPoint.x + offsetX,
      canvasHeight / 2 + offsetY - lengthLittleLines / 2
    );
    ctx.lineTo(
      midPoint.x + offsetX,
      canvasHeight / 2 + offsetY + lengthLittleLines / 2
    );

    ctx.moveTo(
      midPoint.x + lengthScale - offsetX,
      canvasHeight / 2 + offsetY - lengthLittleLines / 2
    );
    ctx.lineTo(
      midPoint.x + lengthScale - offsetX,
      canvasHeight / 2 + offsetY + lengthLittleLines / 2
    );

    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();

    ctx.globalAlpha = 1;
    ctx.font = "16px Verdana";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    ctx.fillText(
      "1 ms",
      midPoint.x + lengthScale / 2 - offsetX / 2,
      canvasHeight / 2 + textOffset
    );

    ctx.stroke();
    ctx.closePath();
  }

  setStyleWidthOpacity(ctx, style, width, opacity) {
    ctx.strokeStyle = style;
    ctx.lineWidth = width;
    ctx.globalAlpha = opacity;
  }

  // Waves canvas drawing (pure waves)
  // TO DO: insert the canvas and the context as arguments so that if one changes, we do not have to be changing everything in the function.
  drawPureWavesCanvas() {
    this.createGrid(this.ctx, this.canvas);
  }

  startSignalGenerator = () => {
    this.setState({
      isStarted: true
    });
  };

  render() {
    return (
      <div onClick={this.startSignalGenerator}>
        <canvas
          className="signal-generator-canvas"
          width={this.props.width}
          height={this.props.height}
          ref={c => {
            this.canvas = c;
          }}
        />
      </div>
    );
  }
}
