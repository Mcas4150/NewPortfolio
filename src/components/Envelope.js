import React, { Component } from "react";

import styled from "@emotion/styled";
import SettingSlider from "./Slider";

export default class Envelope extends Component {
  render() {
    return (
      <Env>
        <SettingSlider
          name={"envelopeAttack"}
          displayName={"A"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
        <SettingSlider
          name={"envelopeDecay"}
          displayName={"D"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
        <SettingSlider
          name={"envelopeSustain"}
          displayName={"S"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
        <SettingSlider
          name={"envelopeRelease"}
          displayName={"R"}
          parentName={this.props.name}
          min={0.1}
          max={1}
          step={0.1}
        />
      </Env>
    );
  }
}

const Env = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 10px;
`;
