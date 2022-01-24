import React from "react";
import { useNavigate } from "react-router-dom";
import Constants from "../util/constants";

const Buttons = ({ location }) => {
  const navigate = useNavigate();

  return (
    <div id="landing-buttons" className="btn-group btn-group-lg">
      {location === Constants.LANDING ? (
        <button
          id="landing-button"
          onClick={() => navigate("/home/create-dynamic")}
          className="btn btn-danger"
        >
          Create
        </button>
      ) : location === Constants.CREATE_DYNAMIC ? (
        <button
          id="landing-button"
          onClick={() => navigate("/home/display-dynamic")}
          className="btn btn-danger"
        >
          Display
        </button>
      ) : (
        <button
          id="landing-button"
          onClick={() => {
            localStorage.clear();
            navigate("/home");
            }}
          className="btn btn-danger"
        >
          Done
        </button>
      )}
    </div>
  );
};

export default Buttons;
