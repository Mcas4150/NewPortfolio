import React, { Component } from "react";

export default class SoundDesign extends Component {
  render() {
    return (
      <div>
        <h1>Sound Design</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eZADzmqK2Gc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div>
          As a participant in{" "}
          <a href="https://www.animateconcordia.ca/">Animate Concordia's</a>{" "}
          annual 48hr Challenge (2021), I paired with two students from the
          Animation program to create a short film, for which I composed the
          sound effects and original music.
        </div>
      </div>
    );
  }
}
