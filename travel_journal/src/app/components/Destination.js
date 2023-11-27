import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Destination(props) {
  return (
    <div className="place-content">
      <img src={`./${props.img}`} alt="location" />
      <div className="place-content-right">
        <div className="place-directions">
          <FaLocationDot />
          <p>{props.country}</p>
          <a href={props.map}>View on Google Maps</a>
        </div>
        <h2>{props.place}</h2>
        <h6>{props.period}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
