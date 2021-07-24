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

      <CategoryLink to={{ pathname: `/about` }}>About</CategoryLink>
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

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: Verdana;
  color: black;
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
