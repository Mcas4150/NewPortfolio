import React, { Component } from "react";
import Envelope from "./Envelope";

export default class Synth extends Component {
  render() {
    return (
      <div>
        <Envelope name={"envelope"} displayName={"envelope"} />
      </div>
    );
  }
}
