import React, { Component } from "react";

export default class OceanMemory extends Component {
  render() {
    return (
      <div>
        <h1>Ocean Memory Project</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_94z0itk8TY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          In spring 2021, I participated in a workshop for the{" "}
          <a href="https://ccrma.stanford.edu/~brg/soniOM/">
            Ocean Memory Project
          </a>{" "}
          . ecology through sonification practices.
        </p>
        <p>
          Coral Reef data measuring gene expression in response to temperature
          fluctuations over a 17-day period was sonified by applying techniques
          of Parameter Mapping Sonification (PMSon) . The synthesis engine
          selected was a four-formant vocal synthesis instrument from the
          Synthesis Toolkit . Gene expression measurements were scaled within an
          optimally discernable frequency range (100-1000Hz). The first
          derivative was mapped to frequency cutoff of a resonant filtere
          (200-2000Hz). The second derivative was mapped to vibrato gain, the
          third derivative mapped to vibrato frequency. The fourth derivative
          was mapped to stereo panning. With these parameters in place, the
          temperature spike on days 7 and 8 can clearly be perceived, as well as
          the resulting “memory” of the incident in the days afterward.
        </p>
      </div>
    );
  }
}
