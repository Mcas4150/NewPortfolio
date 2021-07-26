import React, { Component } from "react";

export default class SoundDesign extends Component {
  render() {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eZADzmqK2Gc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
