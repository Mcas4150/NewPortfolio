import React, { Component } from "react";
import styled from "@emotion/styled";

export default class Synth2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown() {
    this.setState({
      playing: true
    });
    //  sinea.start();
  }

  handleMouseUp() {
    this.setState({
      playing: false
    });
  }

  componentDidMount() {
    var analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    var canvas = document.querySelector(".visualizer");
    var canvasCtx = canvas.getContext("2d");
    canvas.setAttribute("width", "800px");
    canvas.setAttribute("height", "200px");

    var sinea = audioCtx.createOscillator();
    sinea.frequency.value = 220;
    sinea.type = "sine";
    // sinea.start();

    // this.state.playing ? sinea.start() : sinea.stop();
    sinea.connect(analyser);

    analyser.connect(audioCtx.destination);

    var sineb = audioCtx.createOscillator();
    sineb.frequency.value = 523.25;
    sineb.type = "sine";
    // sineb.start();
    sineb.connect(audioCtx.destination);

    var sinec = audioCtx.createOscillator();
    sinec.frequency.value = 698.46;
    sinec.type = "sine";
    // sinec.start();
    sinec.connect(audioCtx.destination);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    // var visualSetting = visualSelect.value;
    // console.log(visualSetting);

    analyser.fftSize = 2048;
    var bufferLength = analyser.fftSize;
    console.log(bufferLength);
    var dataArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    var draw = function() {
      let drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = "#DBD5C9";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";

      canvasCtx.beginPath();

      var sliceWidth = (WIDTH * 1.0) / bufferLength;
      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = (v * HEIGHT) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    };

    draw();
  }

  render() {
    return (
      <ClickContainer
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <canvas className="visualizer">SYNTH</canvas>
      </ClickContainer>
    );
  }
}
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const sinea = audioCtx.createOscillator();
const canvas = document.querySelector(".visualizer");

const ClickContainer = styled.div`
  justify-content: center;
  height: 75vh;
  width: 100%;
  display: flex;
`;
