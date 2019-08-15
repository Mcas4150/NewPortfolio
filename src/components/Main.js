import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";
import TrackVisibility from "react-on-screen";
import Projects from "./Projects";
import Section from "./Section";
import psychic from "../imgs/psychic.png";
import nimbus from "../imgs/Nimbus.png";
import Skillset from "./Skillset";

var boxes = ["╱", "╲"];
var rows = [];
var max = 249;
function writeNext() {
  document.getElementById("marbles").innerHTML +=
    boxes[Math.round(Math.random())];

  // for (var i = 0; i < max; i++) {
  //   // note: we add a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(
  //     <span key={i} box={boxes[Math.round(Math.random())]}>
  //       {boxes[Math.round(Math.random())]}{" "}
  //     </span>
  //   );
  //   // rows.push(<span key={i} box={boxes[Math.round(Math.random())]}>  {boxes[Math.round(Math.random())]} </span>);
  // }
}
var count = 0;
function run() {
  writeNext();
  if (count++ < max) {
    setTimeout(run, 5);
  }
}

// TOOODOOOO  Map Letters to svg

// var rows = [];
// for (var i = 0; i < max; i++) {
//   // note: we add a key prop here to allow react to uniquely identify each
//   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
//   rows.push(
//     <span key={i} box={boxes[Math.round(Math.random())]}>
//       {" "}
//       {boxes[Math.round(Math.random())]}{" "}
//     </span>
//   );
//   // rows.push(<span key={i} box={boxes[Math.round(Math.random())]}>  {boxes[Math.round(Math.random())]} </span>);
// }

export default class Main extends Component {
  componentDidMount() {
    run();
  }

  render() {
    return (
      <MainContainer>
        <HeaderContainer>
          <Title style={{ marginLeft: "25px" }}>MIKE CASSIDY </Title>
        </HeaderContainer>
        <BodyContainer>
          <ScrollContainer>
            <BioContainer>
              <div id="about" style={{ marginTop: "50px" }}>
                A software engineer with an affinity for functional structures,
                sound design, and human-computer interaction.
                <br />
                <br />
                Previously a music therapist and a record nerd at music
                distributor Forced Exposure. now a fullstack audio/visual
                application developer
                <br />
                <br />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  now listening:
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      alt="record"
                      src={nimbus}
                      style={{
                        maxHeight: "250px",
                        maxWidth: "250px",
                        marginTop: "15px",
                        marginRight: "15px"
                      }}
                    />
                    <img
                      alt="record"
                      src={psychic}
                      style={{
                        maxHeight: "250px",
                        maxWidth: "250px",
                        marginTop: "15px",
                        marginRight: "15px"
                      }}
                    />{" "}
                    <img
                      alt="record"
                      src="https://img.discogs.com/RgWjSJxC1PpWqyV7NebG6e-Wj7Q=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-184251-1455309048-1365.jpeg.jpg"
                      style={{
                        maxHeight: "250px",
                        maxWidth: "250px",
                        marginTop: "15px",
                        marginRight: "15px"
                      }}
                    />
                  </div>
                </div>
              </div>
              <Space />
              <div id="section2">
                <Skillset id="section2" />
              </div>
              <Space />{" "}
              <div id="section3" style={{ marginTop: "75px" }}>
                <Projects />
              </div>
              <Space />
              <Section subtitle={dummyText} dark={false} id="section4" />{" "}
              <Space />
              <Section
                subtitle={" Listening, learning, and building in: Boston."}
                dark={true}
                id="section5"
              />
            </BioContainer>
          </ScrollContainer>{" "}
          <NavLinkContainer>
            <Link
              activeClass="active"
              className="monument"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ marginBottom: "25px" }}
            >
              About
            </Link>
            <Link
              activeClass="active"
              className="monument"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ marginBottom: "25px" }}
            >
              Skillset
            </Link>{" "}
            <Link
              activeClass="active"
              className="monument"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ marginBottom: "25px" }}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              className="monument link"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ marginBottom: "25px" }}
            >
              Resume
            </Link>
            <Link
              activeClass="active"
              className="monument"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ marginBottom: "25px" }}
            >
              Contact
            </Link>
            <TenPlus id="marbles">{rows}</TenPlus>
            {/* var boxes = ["╱", "╲"];
		var max = 4000;
		function writeNext()
        {
			document.getElementById('content').innerHTML +=
			boxes[Math.round(Math.random())];
        }
		var count = 0;
		function run() {
			writeNext();
			if(count++ < max) {
				setTimeout(run,5);
			}
		}
		run();	 */}
          </NavLinkContainer>
        </BodyContainer>
      </MainContainer>
    );
  }
}

const TenPlus = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  width: 250px;
  overflow-wrap: break-word;
`;

const MainContainer = styled.div`
  padding: 15px;
  background-color: rgb(217, 234, 211);
  // background-color:#d3cccb
  height: 100%;
`;

const HeaderContainer = styled.div`
  padding: 20px;
  justify-content: space-between;
  display: flex;
`;

const BioContainer = styled.div`
  padding: 50px;

  font-size: 1.5rem;
  font-family: MonumentRegular;
  max-width: 75%;
`;

const Space = styled.div`
  height: 100vh;
  width: 100vw;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScrollContainer = styled.div`
  width: 75vw;
`;

const NavLinkContainer = styled.div`
  width: 20vw;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: fixed;
  right: 0;
  justify-conter: center;
  text-align: right;
  padding: 15px;
`;

const Title = styled.div`
  position: fixed;
  font-family: "MonumentRegular";
  font-size: 2.5rem;
  color: transparent;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transition: color 0.25s ease-in-out;
  :hover {
    color: black;
    transition: color 0.25s ease-in-out;
  }
`;

const dummyText =
  "A software engineer with an affinity for functional structures, sound design, and human-computer interaction. \n\n Previously, I've worked as a music therapist with autistic children and as inventory manager the music distributor Forced Exposure. I now specialize in fullstack application development and audio/visual programming. \n\n I spend my time listening, learning, building electronics, and writing code, currently in based in Boston.";
