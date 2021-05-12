import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import Menu from "./tiles/Menu";
import { Squiggle } from "./animations/Squiggle";
import "./App.css";

import ReleasePage from "./discogs/release_page";

import ProjectsList from "./projects/ProjectsList";
import Title from "./tiles/Title";
import Window from "./tiles/Window";
import AppContext from "./context-file";

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
  });

  let TileStyle =
    dimensions.width <= 800 || dimensions.height <= 600
      ? TileStyleMin
      : TileStyleMax;

  const [showWindow, setShowWindow] = useState(false);

  const toggleWindow = () => {
    setShowWindow(!showWindow);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Router>
      <AppContext.Provider value={{ showWindow, toggleWindow, dimensions }}>
        <Squiggle styled={{ zIndex: "-1" }} />
        <TileContainer style={TileStyle}>
          <TitleTile>
            <Title />
          </TitleTile>
          <MenuTile>
            <Menu />
          </MenuTile>

          <FeaturedTile>
            <FeaturedWindow title={"Title"}>
              <Switch>
                {/* <Route exact path="/discogs" component={ReleasesList} />
                <Route exact path="/synth" component={SynthMain} /> */}
                <Route exact path="/projects" component={ProjectsList} />
                <Route
                  exact
                  path="/discogs/release/:id"
                  component={ReleasePage}
                />
              </Switch>
            </FeaturedWindow>
          </FeaturedTile>
        </TileContainer>
      </AppContext.Provider>
    </Router>
  );
};

const TileContainer = styled.div`
  z-index: 2;
  opacity: 80%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #407954;
  display: grid;
  margin: auto;
  width: 100%;
  height: 100%;
  grid-gap: 0 0;
  -webkit-filter: saturate(1.2);
  filter: saturate(1.2);
`;

const TileStyleMax = {
  // margin: "25px",
  gridTemplateColumns: "repeat(12, 1fr) 25px",
  gridTemplateRows: "repeat(12, 1fr)",
  gridTemplateAreas: `'title title title about about about  featured featured featured featured featured featured'
    'menu . . about about about featured featured featured featured featured featured'
    'menu . . about about about featured featured featured featured featured featured'
    'menu . . about about about  featured featured featured featured featured featured'
    'menu . . . . .  featured featured featured featured featured featured'
    'menu . . tech tech tech featured featured featured featured featured featured'
    'menu . . tech tech tech featured featured featured featured featured featured'
    'menu . . tech tech tech featured featured featured featured featured featured'
    'menu . . . . . featured featured featured featured featured featured'
    'menu . . . . . featured featured featured featured featured featured'
    '. . . . . . . . . . . .'
    '. . . . . . . . . . . .'`,
  overflowY: "hidden",
};

const TileStyleMin = {
  // margin: "10px",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "repeat(12, 1fr)",
  gridTemplateAreas: `'title title '
    'menu menu'
    'about about'
    'about about'
    'tech tech'
    'tech tech'
    'featured featured'
    'featured featured'
    'featured featured'
    'featured featured'
    'featured featured'
    'featured featured'`,
  overflowY: "auto",
};

const Tile = styled.div`
  position: relative;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;

const TitleTile = styled(Tile)`
  grid-area: title;
  z-index: 3;
  opacity: 100%;
`;

const MenuTile = styled(Tile)`
  grid-area: menu;
`;

const TechTile = styled(Tile)`
  grid-area: tech;
`;

const TechWindow = styled(Window)``;

const AboutTile = styled(Tile)`
  grid-area: about;
`;

const FeaturedTile = styled(Tile)`
  grid-area: featured;
`;

const SocialTile = styled(Tile)`
  grid-area: social;
`;

const FeaturedWindow = styled(Window)`
  background-color: #d8d8d8;
`;

const AboutWindow = styled(Window)`
  background-color: green;
`;

export default App;
