import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context-file";
import styled from "@emotion/styled";

function Menu(props) {
  const context = useContext(AppContext);

  return (
    <MenuContainer>
      <MenuCategory>
        <CategoryLink>Projects</CategoryLink>
        <LinkContainer>
          <MenuLink to={{ pathname: `/projects/ocean-memory` }}>
            Ocean Memory
          </MenuLink>
          <MenuLink to={{ pathname: `/projects/instruments` }}>
            Instrument Building
          </MenuLink>
          <MenuLink to={{ pathname: `/projects/software` }}>Software</MenuLink>
          <MenuLink to={{ pathname: `/projects/websites` }}>Websites</MenuLink>
        </LinkContainer>
      </MenuCategory>
      <MenuCategory>
        <CategoryLink>Works</CategoryLink>
        <LinkContainer>
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
  display: flex;
  flex-direction: column;
`;

const MenuLink = styled(Link)`
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
  margin: 25px;
  display: flex;
  flex-direction: column;
`;

export default Menu;
