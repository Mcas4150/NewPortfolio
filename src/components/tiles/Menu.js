import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <MenuLink to={{ pathname: `/discogs` }}>Discogs</MenuLink>
          <MenuLink to={{ pathname: `/oscilloscope` }}>Scope</MenuLink>
          <MenuLink to={{ pathname: `/projects` }}>Projects</MenuLink>
          <MenuLink to={{ pathname: `/cv` }}>CV</MenuLink>
        </ul>
      </div>
    );
  }
}

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: MonumentRegular;
  font-size: 0.75rem;
  color: ;
`;
