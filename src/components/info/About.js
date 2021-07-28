import React, { Component } from "react";
import styled from "@emotion/styled";

export default class About extends Component {
  render() {
    return (
      <div>
        Mike Cassidy (kscd) is a software engineer.
        <Links>
          <Link href="https://www.github.com/mcas4150">Github</Link>
          <Link href="https://www.linkedin.com/in/mcas4150">LinkedIn</Link>
          <Link href="#">CV</Link>
        </Links>
      </div>
    );
  }
}

const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;
