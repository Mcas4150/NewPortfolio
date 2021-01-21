import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default class Menu extends Component {
  render() {
    let dimensions = this.props.dimensions;
    return (
      <MenuContainer
        style={
          dimensions.width <= 800 || dimensions.height <= 600
            ? MenuStyleMin
            : MenuStyleMax
        }
      >
        <MenuLink to={{ pathname: `/about` }}>About</MenuLink>
        <MenuLink to={{ pathname: `/discogs` }}>Discogs</MenuLink>
        <MenuLink to={{ pathname: `/synth` }}>Scope</MenuLink>
        <MenuLink to={{ pathname: `/projects` }}>Projects</MenuLink>
        <MenuLink to={{ pathname: `/contact` }}>Contact</MenuLink>
        <MenuLink to={{ pathname: `/cv` }}>CV</MenuLink>
      </MenuContainer>
    );
  }
}

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: MonumentRegular;
  // font-size: 1rem;
  font-size: 25px;
  color: ;
`;

const MenuContainer = styled.div`
  margin: 25px;
  display: flex;
`;

const MenuStyleMax = {
  flexDirection: "column",
};

const MenuStyleMin = {
  flexDirection: "row",
  justifyContent: "space-between",
};
