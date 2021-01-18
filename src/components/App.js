import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import Menu from "./tiles/Menu";
import { Squiggle } from "./animations/Squiggle";

// import SearchBar from "../containers/search_bar";
import AboutDiscogs from "./about/about_discogs";
import AboutProjects from "./about/about_projects";
import AboutSynth from "./about/about_synth";
import ReleasesList from "./discogs/releases_list";
import ReleasePage from "./discogs/release_page";
import ReleasePageInfo from "./discogs/release_page_info";
import ProjectsList from "./projects/ProjectsList";
import SynthMain from "./synth/synthMain";
import Title from "./tiles/Title";
import Window from "./tiles/Window";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Squiggle />
        <TileContainer>
          <TitleTile>
            <Title />
          </TitleTile>

          <MenuTile>
            <Menu />
          </MenuTile>
          <AboutContainer>
            <AboutWindow title={"about"}>
              <Switch>
                <Route exact path="/discogs" component={AboutDiscogs} />
                <Route exact path="/synth" component={AboutSynth} />
                <Route exact path="/projects" component={AboutProjects} />
                <Route
                  exact
                  path="/discogs/release/:id"
                  component={ReleasePageInfo}
                />
              </Switch>
            </AboutWindow>
          </AboutContainer>
          <FeaturedTile>
            <FeaturedWindow>
              <Switch>
                <Route exact path="/discogs" component={ReleasesList} />
                <Route exact path="/synth" component={SynthMain} />
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
  grid-template-rows: repeat(12, 1fr);
  grid-template-areas:
    "title title title about about about  featured featured featured featured featured featured"
    "menu . . about about about featured featured featured featured featured featured"
    "menu . . about about about featured featured featured featured featured featured"
    "menu . . about about about  featured featured featured featured featured featured"
    "menu . . about about about  featured featured featured featured featured featured"
    "menu . . . . . featured featured featured featured featured featured"
    "menu . . . . . featured featured featured featured featured featured"
    "menu . . . . . featured featured featured featured featured featured"
    "menu . . . . . featured featured featured featured featured featured"
    "menu . . . . . featured featured featured featured featured featured";
  // grid-template-columns: repeat(6, 1fr);
  // grid-auto-rows: 1fr;
  // grid-auto-rows: 8vw;
  margin: auto;
  width: 100%;
  height: 100%;
  grid-gap: 0 0;
  -webkit-filter: saturate(1.2);
  filter: saturate(1.2);
`;

const Tile = styled.div`
  // overflow: auto
  // ;
  position: relative;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;

const TitleTile = styled(Tile)`
  // grid-area: 1 / 1 / span 8 / span 8;
  grid-area: title;
`;

const MenuTile = styled(Tile)`
  // grid-area: 1 / 2 / span 3 / span 4;
  grid-area: menu;
`;

const AboutContainer = styled(Tile)`
  // grid-area: 4 / 2 / span 4 / span 4;
  grid-area: about;
`;

const FeaturedTile = styled(Tile)`
  // grid-area: 1 / 6 / span 7 / span 7;
  grid-area: featured;
`;

const FeaturedWindow = styled(Window)`
  background-color: #d8d8d8;
`;

const AboutWindow = styled(Window)`
  background-color: green;
`;
