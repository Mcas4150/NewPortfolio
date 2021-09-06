import React, { Component } from "react";
import styled from "@emotion/styled";
import Anim from "../../../imgs/TDMovieOut.gif";

export default class WorksList extends Component {
  render() {
    return (
      <div>
        <h1>Animations</h1>
        {/* <Processing></Processing> */}
        <AnimImg src={Anim} />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bLV_YBqo4UM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

const AnimImg = styled.img`
  width: 100%;
  height: auto;
`;
