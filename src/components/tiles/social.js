import React, { Component } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default class Social extends Component {
  render() {
    return (
      <div>
         <FontAwesomeIcon icon={["fab", "linkedin"]} />
        <FontAwesomeIcon icon={["fab", "github-square"]} />
      </div>
    );
  }
}

const Github = styled.i``;
