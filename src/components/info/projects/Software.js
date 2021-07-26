import React, { Component } from "react";
import styled from "@emotion/styled";
import Prophet from "../../../imgs/Prophet.jpg";

export default class Software extends Component {
  render() {
    return (
      <div>
        software<ProphetImg src={Prophet}/>
      </div>
    );
  }
}


const ProphetImg = styled.img`
  width: 100%;
  height: auto;
`;
