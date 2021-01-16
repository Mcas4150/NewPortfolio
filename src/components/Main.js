import React, { Component } from "react";
import styled from "@emotion/styled";
import { Squiggle } from "./animations/Squiggle";
import Menu from "./tiles/Menu";
import Featured from "./tiles/Featured";
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
      <div>
        <Squiggle />
        <TileContainer>
          <TitleContainer>
            <Graphic />
          </TitleContainer>
          <LeftGradient>
            <Menu />
          </LeftGradient>
          <MenuTile></MenuTile>
          <AboutContainer>Mike</AboutContainer>
          <FeaturedTile>
            <Featured />
          </FeaturedTile>
        </TileContainer>
      </div>
    );
  }
}

const TileContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  // background-color: #f5f4f0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-rows: 8vw;
  margin: auto;
  width: 100%;
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
`;

const LeftGradient = styled(Tile)`
  grid-area: 2 / 1 / span 6 / span 1;
`;

const MenuTile = styled(Tile)`
  grid-area: 1 / 2 / span 3 / span 4;
`;

const AboutContainer = styled(Tile)`
  grid-area: 4 / 2 / span 4 / span 4;
`;

const FeaturedTile = styled(Tile)`
  grid-area: 1 / 6 / span 6 / span 7;
`;
