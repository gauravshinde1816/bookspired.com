import React from "react";
import pins from "../assets/pins.png";
const Pins = ({ location }) => {
  return (
    <div className="d-flex justify-content-around">
      <img
        style={{
          height: "25px",
          width: "25px",
        }}
        className="img-fluid"
        src={pins}
        alt=""
        srcset=""
      />{" "}
      <h4 className="fw-bold">{location}</h4>
    </div>
  );
};

export default Pins;
