import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import Menu from "./tiles/Menu";
import { Squiggle } from "./animations/Squiggle";
import Graphic from "./animations/SquareSpin";
// import SearchBar from "../containers/search_bar";
import ReleasesList from "./discogs/releases_list";
import ReleasePage from "./discogs/release_page";
import Window from "./tiles/Window";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Squiggle />
        <TileContainer>
          <TitleContainer>
            <Graphic />
          </TitleContainer>
          <LeftGradient>
            <Menu />
          </LeftGradient>
          <MenuTile></MenuTile>
          <AboutContainer></AboutContainer>
          <FeaturedTile>
            <FeaturedWindow>
              <Switch>
                <Route exact path="/discogs" component={ReleasesList} />
                <Switch>
                  <Route
                    exact
                    path="/discogs/release/:id"
                    component={ReleasePage}
                  />
                </Switch>
              </Switch>
            </FeaturedWindow>
          </FeaturedTile>
        </TileContainer>
      </Router>
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

const FeaturedWindow = styled(Window)``;
