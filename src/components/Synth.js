import React, { Component } from "react";
import Envelope from "./Envelope";
import Filter from "./Filter";
import Amplifier from "./Amplifier";
// import Keyboard from "./Keyboard";
import NotePress from "./NotePress";
import AudioAnalyser from "../synth/Analyzer";

export default class Synth extends Component {
  render() {
    return (
      <div>
        <NotePress name={"frequency"} displayName={"frequency"} />{" "}
        <Envelope name={"envelope"} displayName={"envelope"} />
        {/* <Filter name={"filter"} displayName={"filter"} /> */}
        <Amplifier name={"amplifier"} displayName={"amplifier"} />
        {/* <AudioAnalyser /> */}
        {/* <Keyboard /> */}
      </div>
    );
  }
}
