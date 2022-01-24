import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../page/Landing";
import CreateDynamic from "../page/CreateDynamic";
import DisplayDynamic from "../page/DisplayDynamic";

class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/home" element={<Landing/>} />
          <Route path="/home/create-dynamic" element={<CreateDynamic/>} />
          <Route path="/home/display-dynamic" element={<DisplayDynamic/>} />
        </Routes>
      </Router>
    );
  }
}

export default RouteConfig;
