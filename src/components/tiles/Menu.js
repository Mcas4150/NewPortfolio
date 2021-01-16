import React, { Component } from "react";
import styled from "@emotion/styled";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link>Discogs</Link>
          <Link>Scope</Link>
          <Link>Projects</Link>
          <Link>CV</Link>
        </ul>
      </div>
    );
  }
}

const Link = styled.li`
  text-decoration: none;
  font-family: MonumentRegular;
  font-size: 0.75rem;
  color:
`;
