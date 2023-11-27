import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Destination(props) {
  return (
      <div className="place-content">
        <img src={`./${props.img}`} alt="location" />
        <div className="place-content-right">
          <div className="place-directions">
            <FaLocationDot color="rgb(255, 106, 0)" />
            <h4 className="country">{props.country}</h4>
            <a href={props.map}>
              <small>View on Google Maps</small>
            </a>
          </div>
          <h2>{props.place}</h2>
          <h4 className="period">{props.period}</h4>
          <p>
            <small>{props.description}</small>
          </p>
        </div>
      </div>
  );
}
