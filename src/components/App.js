import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import Menu from "./tiles/Menu";
import "./App.css";
import WorksList from "./info/works/WorksList";
import OceanMemory from "./info/projects/OceanMemory";
import Software from "./info/projects/Software";
import OverviewList from "./info/OverviewList";
import Instruments from "./info/projects/Instruments";
import Websites from "./info/projects/Websites";
import Electroacoustics from "./info/works/Electroacoustics";
import SoundDesign from "./info/works/SoundDesign";
import About from "./info/About";
import Title from "./tiles/Title";
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
        <TileContainer style={TileStyle}>
          <MenuTile>
            <Title />
            <Menu />
          </MenuTile>
          <InfoTile>
            <Switch>
              <Route path="/" exact component={OverviewList} />
              <Route path="/projects/instruments" component={Instruments} />
              <Route path="/projects/websites" component={Websites} />
              <Route path="/projects/software" component={Software} />
              <Route path="/projects/ocean-memory" component={OceanMemory} />
              <Route path="/works/animation" component={WorksList} />
              <Route
                path="/works/electroacoustics"
                component={Electroacoustics}
              />
              <Route path="/works/sound-design" component={SoundDesign} />
              <Route path="/about" component={About} />
            </Switch>
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
  gridTemplateColumns: "250px 750px auto",
  gridTemplateAreas: `'menu info'`,
  overflowY: "hidden",
};

const TileStyleMin = {
  gridTemplateColumns: "1fr 1fr",
  gridTemplateAreas: `'menu info'`,
  overflowY: "auto",
};

const InfoTile = styled.div`
  grid-area: info;
  margin: 35px;
  margin-top: 125px;
`;

const MenuTile = styled.div`
  grid-area: menu;
`;

export default App;
