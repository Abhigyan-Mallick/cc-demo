import React, { Component } from "react";
import Card from "../component/card";
import Header from "../component/header";
import Buttons from "../component/buttons";
import Constants from "../util/constants";

class Landing extends Component {
  state = {
    location: Constants.LANDING
  };

  render() {
    return (
      <div id="body">
        <Header location={this.state.location} />
        <Card
          className="section bg-grey"
          title="Create a Dynamic Attribute"
          description="To generate a dynamic form with the desired field(s) & attribute(s), first create the filed(s) and customise the attribute(s) according to your preferences."
        />

        <Buttons location={this.state.location} />
      </div>
    );
  };
};

export default Landing;
