import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context-file";
import styled from "@emotion/styled";

function Menu(props) {
  const context = useContext(AppContext);

  return (
    <MenuContainer
      style={
        context.dimensions.width <= 800 || context.dimensions.height <= 600
          ? MenuStyleMin
          : MenuStyleMax
      }
    >
      <MenuLink to={{ pathname: `/about` }} onClick={context.toggleWindow}>
        About
      </MenuLink>
      <MenuLink to={{ pathname: `/discogs` }} onClick={context.toggleWindow}>
        Discogs
      </MenuLink>
      <MenuLink to={{ pathname: `/synth` }} onClick={context.toggleWindow}>
        Scope
      </MenuLink>
      <MenuLink to={{ pathname: `/projects` }} onClick={context.toggleWindow}>
        Projects
      </MenuLink>
      
    </MenuContainer>
  );
}

const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: MonumentRegular;
  // font-size: 1rem;
  font-size: 25px;
  // color:  ;
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

export default Menu;
