import React from "react";
import styled from "@emotion/styled";
import Oscilloscope from "./oscilloscope";
import * as Tone from "tone";
import { GrainPlayer } from "tone";

const SynthMain = () => {
  const context = new Tone.Context({});
  const gainNode = new Tone.Gain(0.5);
  Tone.setContext(context);

  const granular = new GrainPlayer(
    "https://tonejs.github.io/audio/casio/A1.mp3"
  ).toDestination();

  granular.grainSize = 0.1;
  granular.loop = true;
  granular.loopStart = 0.0;
  granular.loopEnd = 0.9;
  granular.overlap = 0.05;
  granular.reverse = true;

  // const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  const noteStart = (time) => {
    granular.start();
    //  synth.triggerAttack("C4", time);
  };

  const noteEnd = () => {
    // synth.triggerRelease(now + 1);
    granular.stop();
  };

  return (
    <SynthContainer>
      <button
        onMouseDown={() => noteStart(now)}
        onMouseUp={() => noteEnd()}
        // onMouseDown={() => oscillator.start()}
        // onMouseUp={() => oscillator.stop()}
      >
        test
      </button>
      {/* <Oscilloscope ctx={context} node={gainNode} /> */}
    </SynthContainer>
  );
};

const SynthContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export default SynthMain;
