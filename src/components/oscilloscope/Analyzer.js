import React, { Component } from "react";
import AudioVisualiser from "./Visualizer";
import Tone from "tone";

class AudioAnalyser extends Component {
  constructor(props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser = new Tone.Analyser("fft", "2048");
    this.fft = new Tone.FFT("2048");
    this.dataArray = new Uint8Array(this.fft.getValue());
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.setState({ audioData: this.dataArray });
    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  render() {
    return <AudioVisualiser audioData={this.state.audioData} />;
  }
}

export default AudioAnalyser;

// const mapStateToProps = (state, ownProps) => {
//   const value = get(state, `amplifier.vcaLevel`);
//   return { dialValue: value === undefined ? 0 : value };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     changeDial: dial => dispatch(changeDial(dial))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AudioAnalyser);
