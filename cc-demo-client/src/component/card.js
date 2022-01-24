import React from "react";

const Card = ({className, title, description }) => {
  return (
    <div className={className}>
      {/* <div className="small-div">
          <i className={className}></i>
        </div> */}

      <div className="big-div">
        <span className="div-title">{title}</span>
        <br />
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Card;
