import React, { Component } from "react";
import styled from "@emotion/styled";

export default class Main extends Component {
  render() {
    return (
      <MainContainer>
        <HeaderContainer>

          <div className="monument">Mike Cassidy </div>
          <div className="monument">About</div>
        </HeaderContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  padding: 15px;
  background-color: rgb(217, 234, 211);
  // background-color:#d3cccb
  height: 100vh;
`;

const HeaderContainer = styled.div`
  padding: 20px;
  justify-content: space-between;
  display: flex;
`;
