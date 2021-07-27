import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import AppContext from "../context-file";
import styled from "@emotion/styled";

function Menu(props) {
  // const context = useContext(AppContext);

  const [showProjects, setShowProjects] = useState(true);
  const [showWorks, setShowWorks] = useState(true);

  const toggleLink = (props) => {
    if (props === "projects") {
      setShowProjects(!showProjects);
    } else if (props === "works") {
      setShowWorks(!showWorks);
    }
  };

  return (
    <MenuContainer>
      <MenuCategory>
        <CategoryLink onClick={() => toggleLink("projects")}>
          Projects
        </CategoryLink>
        <LinkContainer
          style={showProjects ? { display: "flex" } : { display: "none" }}
        >
          <MenuLink to={{ pathname: `/projects/ocean-memory` }}>
            Ocean Memory
          </MenuLink>
          <MenuLink to={{ pathname: `/projects/instruments` }}>
            Instruments
          </MenuLink>
          <MenuLink to={{ pathname: `/projects/software` }}>Software</MenuLink>
          <MenuLink to={{ pathname: `/projects/websites` }}>Websites</MenuLink>
        </LinkContainer>
      </MenuCategory>
      <MenuCategory>
        <CategoryLink onClick={() => toggleLink("works")}>Works</CategoryLink>
        <LinkContainer
          style={showWorks ? { display: "flex" } : { display: "none" }}
        >
          <MenuLink to={{ pathname: `/works/electroacoustics` }}>
            Electroacoustics
          </MenuLink>
          <MenuLink to={{ pathname: `/works/animation` }}>Animation</MenuLink>
          <MenuLink to={{ pathname: `/works/sound-design` }}>
            Sound Design
          </MenuLink>
        </LinkContainer>
      </MenuCategory>

      <AboutLink to={{ pathname: `/about` }}>About</AboutLink>
    </MenuContainer>
  );
}
const MenuCategory = styled.div``;

const CategoryLink = styled(Link)`
  text-decoration: none;
  font-family: Verdana;
  font-weight: bold;
  color: black;
`;

const AboutLink = styled(CategoryLink)`
  margin-top: 20px;
`;
const LinkContainer = styled.div`
  flex-direction: column;
  margin-bottom: 2em;
`;

const MenuLink = styled(Link)`
  margin: 3px 3px 2px 0px;

  width: fit-content;
  text-decoration: none;
  font-family: Verdana;
  color: black;
  display: inline-block;
  &:hover {
    color: white;
    background-color: #00b7ff;
  }
  // font-size: 1rem;
  // font-size: 25px;
  // color:  ;
`;

const MenuContainer = styled.div`
  margin: 35px;
  display: flex;
  flex-direction: column;
`;

export default Menu;
