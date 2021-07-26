import React, { Component } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";



export default class Info extends Component {
  render() {
    return (
      <div>
        {this.children}
      </div>
    );
  }
}
