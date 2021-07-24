import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import Menu from "./tiles/Menu";
import { Squiggle } from "./works/animations/Squiggle";
import "./App.css";

//import ReleasePage from "./discogs/release_page";

import Title from "./tiles/Title";
import Info from "./tiles/Info";
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
          <MenuTile>
            <Title />
            <Menu />
          </MenuTile>
          <Clear></Clear>
          <InfoTile>
            <Info />
          </InfoTile>
        </TileContainer>
      </AppContext.Provider>
    </Router>
  );
};

const TileContainer = styled.div`
  z-index: 1;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  // background-color: #407954;
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
  gridTemplateColumns: "250px 3fr",
  gridTemplateAreas: `'menu info'`,
  overflowY: "hidden",
};

const TileStyleMin = {
  // margin: "10px",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateAreas: `'menu info'`,
  overflowY: "auto",
};

const Tile = styled.div`
  position: relative;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 80%;
`;

const InfoTile = styled.div`
  grid-area: info;
`;

const Clear = styled.div`
  grid-area: clear;
  opacity: 80%;
  z-index: 0;
`;

const MenuTile = styled(Tile)`
  grid-area: menu;
`;


export default App;
