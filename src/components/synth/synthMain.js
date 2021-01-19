import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const SynthMain = () => {
  let context = new AudioContext();
  let oscillator = context.createOscillator();
  let gain = context.createGain();
  oscillator.connect(gain);
  gain.connect(context.destination);

  return (
    <SynthContainer>
      <button onMouseDown={() => oscillator.start()}>test</button>
    </SynthContainer>
  );
};

const SynthContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export default SynthMain;
