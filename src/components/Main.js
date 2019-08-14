import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";
import Section from "./Section";


export default class Main extends Component {
  render() {
    return (
      <MainContainer>
        <HeaderContainer>
          <div className="monument">MIKE CASSIDY </div>
          <div className="monument">About</div>
        </HeaderContainer>
        <BodyContainer>
          <ScrollContainer>
            <BioContainer>

              <Section subtitle={dummyText} dark={true} id="about" />
              <Section subtitle={dummyText} dark={false} id="section2" />
              <Section subtitle={dummyText} dark={true} id="section3" />
              <Section subtitle={dummyText} dark={false} id="section4" />
              <Section
                subtitle={dummyText}
                dark={true}
                id="section5"
              />
            </BioContainer>
          </ScrollContainer>{" "}
          <NavLinkContainer>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About2
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About3
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About4
            </Link>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About5
            </Link>
          </NavLinkContainer>
        </BodyContainer>
      </MainContainer>
    );
  }
}

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

  font-size: 2rem;
  font-family: MonumentRegular;
  max-width: 75%;
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
  flex-direction: column;
  position: fixed;
  right: 0;
  justify-conter: center;
  text-align: right;
  padding: 15px;
`;




const dummyText = "A software engineer with an affinity for functional structures, sound design, and human-computer interaction. \n\n Previously, I've worked as a music therapist with autistic children and as inventory manager the music distributor Forced Exposure. I now specialize in fullstack application development and audio/visual programming. \n\n I spend my time listening, learning, building electronics, and writing code, currently in based in Boston.";
