import React, { useEffect } from "react";
import Sketch from "react-p5";
// import p5 from "p5";
import * as p5 from 'p5';
import "p5/lib/addons/p5.sound";

const FFT = () => {
  let setup = (p5, canvasParentRef) => {
    p5.createCanvas(710, 400).parent(canvasParentRef);
    p5.noFill();
    let mic = new p5.AudioIn();
    let fft = new p5.FFT();

    mic.start();

    fft.setInput(mic);
  };

  let draw = (p5) => {
    p5.background(200);
    let fft = new p5.FFT();
    let spectrum = fft.analyze();

    p5.beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      p5.vertex(i, p5.map(spectrum[i], 0, 255, p5.height, 0));
    }
    p5.endShape();
  };

  return (
    <div className="parent">
      <Sketch setup={setup} draw={draw}></Sketch>
    </div>
  );
};

export default FFT;
