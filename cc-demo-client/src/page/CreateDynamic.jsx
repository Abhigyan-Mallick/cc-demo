import React, { Component } from "react";
import Card from "../component/card";
import Header from "../component/header";
import Buttons from "../component/buttons";
import Constants from "../util/constants";
import DynamicCreator from "../util/dynamicCreator";

export default class CreateDynamic extends Component {
  state = {
    location: Constants.CREATE_DYNAMIC
  };

  render() {
    return (
      <div id="body">
        <Header location={this.state.location} />
        <Card
          className="section bg-grey"
          title="Display the Dynamic Form"
          description="Customise the dynamic attribute, and click on display to generate the resultant dynamic form."
        />
        <DynamicCreator />
        <Buttons location={this.state.location} />
      </div>
    );
  };
};
