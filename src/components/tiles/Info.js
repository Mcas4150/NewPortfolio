import React, { Component } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import WorksList from "../info/works/WorksList";
import ProjectsList from "../info/projects/ProjectsList";

export default class Info extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/projects/ocean-memory" component={ProjectsList} />
          <Route path="/works/animation" component={WorksList} />
        </Switch>
      </div>
    );
  }
}
