import React, { Component } from "react";
import styled from "@emotion/styled";
import { Squiggle } from "./animations/Squiggle";
import { Angle } from "./animations/Angle";
import AboutTile from "./tiles/AboutTile";
import Discogs from "./pages/discogs/Discogs";
import Graphic from "./animations/SquareSpin";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false,
      hoverTitle: false,
      scrollX: 0,
      scrollY: 0,
      scrollPos: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleUnhover = this.handleUnhover.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      startAnimation: !prevState.startAnimation,
    }));
  }

  handleHover() {
    this.setState({
      hoverTitle: true,
    });
  }

  handleUnhover() {
    this.setState({
      hoverTitle: false,
    });
  }

  render() {
    return (
      <TileContainer>
        <TitleContainer>
          <Graphic />
        </TitleContainer>
        <LeftGradient>
          <Angle />
        </LeftGradient>
        <Spheres></Spheres>
        <AboutContainer>
          <AboutTile />
        </AboutContainer>
        <Featured>
          <Discogs />
        </Featured>
        <ContactContainer>
          <Squiggle />
        </ContactContainer>
      </TileContainer>
    );
  }
}

const TileContainer = styled.div`
  background-color: #f5f4f0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-rows: 8vw;
  margin: auto;
  width: 100%;
  // height: 216vw;
  grid-gap: 0 0;
  -webkit-filter: saturate(1.2);
  filter: saturate(1.2);
`;

const Tile = styled.div`
  overflow: hidden;
  position: relative;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;

const TitleContainer = styled(Tile)`
  grid-area: 1 / 1 / span 1 / span 1;

  background-color: #c8accd;
`;

const LeftGradient = styled(Tile)`
  grid-area: 2 / 1 / span 6 / span 1;
  background-color: #c8accd;
`;

const Spheres = styled(Tile)`
  grid-area: 1 / 2 / span 3 / span 4;
  background-color: #e0ded1;
`;

const AboutContainer = styled(Tile)`
  grid-area: 4 / 2 / span 4 / span 4;
  background-color: #b4b17c;
`;

const Featured = styled(Tile)`
  grid-area: 1 / 6 / span 6 / span 7;
  // background-color: #e0ded1;
  background-color: #f5f4f0;
  // background-color: #b65b7f;
`;

const ContactContainer = styled(Tile)`
  grid-area: 7 / 6 / span 1 / span 7;
`;
