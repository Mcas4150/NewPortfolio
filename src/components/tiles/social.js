import React, { Component } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default class Social extends Component {
  render() {
    return (
      <SocialContainer>
        <SocialIcon icon={["fab", "linkedin"]} />
        <SocialIcon icon={["fab", "github-square"]} />
        2021
      </SocialContainer>
    );
  }
}

const SocialIcon = styled(FontAwesomeIcon)`
  color: grey;
  font-size: 25px;
  margin: 5px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
