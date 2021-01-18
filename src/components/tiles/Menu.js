import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default class Menu extends Component {
  render() {
    return (
      <MenuContainer>
        <MenuLink to={{ pathname: `/discogs` }}>Discogs</MenuLink>
        <MenuLink to={{ pathname: `/synth` }}>Scope</MenuLink>
        <MenuLink to={{ pathname: `/projects` }}>Projects</MenuLink>
        <MenuLink to={{ pathname: `/cv` }}>CV</MenuLink>
      </MenuContainer>
    );
  }
}

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: MonumentRegular;
  // font-size: 1rem;
  font-size: 20px;

  color: ;
`;

const MenuContainer = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
`;
