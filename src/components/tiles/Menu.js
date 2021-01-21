import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import  AppContext  from "../context-file";
import styled from "@emotion/styled";

function Menu(props) {
  // const [isToggled, setIsToggled] = useState(false);
  let dimensions = props.dimensions;
  // const toggle = () => setIsToggled(true);
  const contextValues = useContext(AppContext);

  return (
    <MenuContainer
      style={
        dimensions.width <= 800 || dimensions.height <= 600
          ? MenuStyleMin
          : MenuStyleMax
      }
    >
      <MenuLink
        to={{ pathname: `/about` }}
        onClick={contextValues.toggleWindow}
      >
        About
      </MenuLink>
      <MenuLink
        to={{ pathname: `/discogs` }}
        onClick={contextValues.toggleWindow}
      >
        Discogs
      </MenuLink>
      <MenuLink
        to={{ pathname: `/synth` }}
        onClick={contextValues.toggleWindow}
      >
        Scope
      </MenuLink>
      <MenuLink
        to={{ pathname: `/projects` }}
        onClick={contextValues.toggleWindow}
      >
        Projects
      </MenuLink>
      <MenuLink
        to={{ pathname: `/contact` }}
        onClick={contextValues.toggleWindow}
      >
        Contact
      </MenuLink>
      <MenuLink to={{ pathname: `/cv` }} onClick={contextValues.toggleWindow}>
        CV
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
