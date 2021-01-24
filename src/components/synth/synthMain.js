import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Oscilloscope from "./oscilloscope";
import * as Tone from "tone";
import SettingSlider from "./slider";
import { GrainPlayer } from "tone";
import FFT from "./fft";
import "./slider.css";

const SynthMain = () => {
  // const [playing, setPlaying] = useState(false);

  const [grainSize, setGrainSize] = useState(0.1);
  const [loopStart, setLoopStart] = useState(0.0);
  const [loopEnd, setLoopEnd] = useState(2.5);

  const [frequency, setFrequency] = useState(400);
  const context = new Tone.Context({});
  const gainNode = new Tone.Gain(0.5);
  Tone.setContext(context);

  // const granular = new GrainPlayer(
  //   "https://tonejs.github.io/audio/casio/A1.mp3"
  // ).toDestination();

  const oscillator = new Tone.Oscillator(frequency, "sine").toDestination();

  // granular.loop = true;

  // granular.set({
  //   grainSize: 0.01,
  //   loopEnd: 0.3,
  //   overlap: 0.45,
  // });


  // let loopStart = (granular.loopStart = 0.0);
  // let loopEnd = (granular.loopEnd = 0.9);
  // granular.overlap = 0.95;
  // granular.reverse = false;
  // granular.loopEnd = 0.3;
  // granular.grainSize = 0.01;

  // const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  const noteStart = () => {
    // granular.start();
    // console.log(granular.get());
    // oscillator.start();
  };

  const noteEnd = () => {
    // oscillator.stop();
    // granular.stop();
  };

  function setParam(param, value) {
    // granular.param = value;
  }

  const handleChange = (e) => {
    setGrainSize(e.target.value);
    // granular.set({
    //   grainSize: e.target.value,
    // });
  };

  useEffect(() => {});
  const handleChangeFreq = (e) => {
    setFrequency(e.target.value);
    oscillator.set({
      frequency: frequency,
      type: "sine2",
    });
  };

  const handleLoopStart = (e) => {
    setLoopStart(e.target.value);
    // granular.set({
    //   loopStart: loopStart,
    // });
  };

  const handleLoopEnd = (e) => {
    setLoopEnd(e.target.value);
    // granular.set({ loopEnd: loopEnd });
  };

  // const handleChange = (e, setHooks) => {
  //   setHooks(e.target.value);
  // };

  function updateSetting(name, val) {
    if (constructor.TOP_LEVEL_SETTINGS.includes(name)) {
      this[name](val);
    } else {
      this[name](val);
    }
  }

  // const noteToggle = () => {
  //   setPlaying(!playing);
  //   playing ? granular.start() : granular.stop();
  // };

  return (
    <SynthContainer>
      <button
        // onClick={() => noteStart(now)}
        // onMouseUp={() => noteEnd()}
        // onClick={()=> noteToggle()}
        // onMouseDown={() => oscillator.start()}
        // onMouseUp={() => oscillator.stop()}
        onMouseDown={() => noteStart()}
        onMouseUp={() => noteEnd()}
      >
        test
      </button>
      <div>
        <input
          type="range"
          displayName="GrainSize"
          min={200}
          max={2500}
          step="100"
          defaultValue={frequency}
          className="slider"
          id="grainSize"
          onChange={handleChangeFreq}
        />
        <input
          type="range"
          displayName="GrainSize"
          min={0.1}
          max={2.4}
          step="0.1"
          defaultValue={grainSize}
          className="slider"
          id="grainSize"
          onMouseUp={handleChange}
        />
        <SettingSlider
          name={"grainSize"}
          displayName={"FREQ"}
          parentName={"grainSize"}
          min={0.1}
          max={2.4}
          step={0.1}
        />
        <SettingSlider
          name={"loopStart"}
          displayName={"FREQ"}
          parentName={"loopStart"}
          min={0.1}
          max={2.5}
          step={0.1}
        />

        <input
          type="range"
          min="0.0"
          max="2.5"
          defaultValue={loopStart}
          step="0.1"
          className="slider"
          id="loopStart"
          onMouseUp={handleLoopStart}
        />
        <input
          type="range"
          min="0.1"
          max="2.5"
          step="0.1"
          defaultValue={loopEnd}
          className="slider"
          id="loopEnd"
          // onChange={(e) => setParam(loopEnd, e.target.value)}
          onMouseUp={handleLoopEnd}
        />
        <FFT />
      </div>
      {/* <Oscilloscope ctx={context} node={gainNode} /> */}
    </SynthContainer>
  );
};

const SynthContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export default SynthMain;
