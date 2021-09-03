import React, { useState } from "react";
import Maps from "./Maps";
import MapLeaflet from "./MapLeaflet";
import map from "../assets/location.jpg";
import maps from "../assets/maps.png";

import Pins from "../components/Pins";
const CommunityReading = () => {
  const [formdata, setFormData] = useState({
    name: "",
    message: "",
    location: "",
  });
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    setFormData({
      name: "",
      message: "",
      location: "",
    });
  };
  return (
    <div>
      {/* map component */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-2 mt-5 fw-bold">
              Next <br /> Destinations
            </h1>
            <p className="fs-4">See Where we are Visiting Next...</p>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={map} alt="" srcset="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="row text-center">
              <div className="col-lg-4">
                <Pins location="Pune" /> <br />
                <Pins location="Delhi" />
                <br />
                <Pins location="Mumbai" />
              </div>
              <div className="col-lg-4">
                <Pins location="Kolhapur" /> <br />
                <Pins location="Satara" />
                <br />
                <Pins location="Surat" />
              </div>
              <div className="col-lg-4">
                <Pins location="Sangli" /> <br />
                <Pins location="Delhi" />
                <br />
                <Pins location="Mumbai" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex my-3">
          <img
            style={{
              height: "45px",
              width: "45px",
              marginRight: "5px",
            }}
            src={maps}
            alt=""
          />
          <h1>Mark Your Location</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <i class="fas   fa-user"></i> Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formdata.name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <i class="fas text-success  fa-map-marked-alt"></i> Suggest
              Location
            </label>
            <select
              name="location"
              class="form-select"
              value={formdata.location}
              onChange={(e) => onChange(e)}
            >
              <option>Select Location</option>
              <option value="Pune">Pune</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Ranchi">Ranchi</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <i class="far   fa-comments"></i> Message
            </label>
            <textarea
              name="message"
              rows="8"
              type="text"
              className="form-control"
              value={formdata.message}
              onChange={(e) => onChange(e)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityReading;
