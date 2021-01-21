import React from "react";
import styled from "@emotion/styled";
import Oscilloscope from "./oscilloscope";

const SynthMain = () => {
  let context = new AudioContext();
  let oscillator = context.createOscillator();
  let gain = context.createGain();
  oscillator.connect(gain);
  gain.connect(context.destination);

  return (
    <SynthContainer>
      <button
        onMouseDown={() => oscillator.start()}
        // onMouseUp={() => oscillator.stop()}
      >
        test
      </button>
      <Oscilloscope ctx={context} node={gain} />
    </SynthContainer>
  );
};

const SynthContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export default SynthMain;
