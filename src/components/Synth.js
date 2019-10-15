import React, { Component } from "react";
import Envelope from "./Envelope";
import Filter from "./Filter";
import Amplifier from "./Amplifier";
import Keyboard from "./Keyboard";

export default class Synth extends Component {
  render() {
    return (
      <div>
        <Envelope name={"envelope"} displayName={"envelope"} />
        <Filter name={"filter"} displayName={"filter"} />
        <Amplifier name={"amplifier"} displayName={"amplifier"} />
        {/* <Keyboard /> */}
      </div>
    );
  }
}
