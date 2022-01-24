import React, { Component } from "react";
import Card from "../component/card";
import Header from "../component/header";
import Buttons from "../component/buttons";
import Constants from "../util/constants";
import DynamicGenerator from "../util/dynamicGenerator";

export default class DisplayDynamic extends Component {
  state = {
    location: Constants.DISPLAY_DYNAMIC
  };

  render() {
    return (
      <div id="body">
        <Header location={this.state.location} />
        <Card
          className="section bg-grey"
          title="Save the Form Details"
          description="Enter and save the form details."
        />
        <DynamicGenerator />
        <Buttons location={this.state.location} />
      </div>
    );
  };
};
