import React from "react";

export default function Destination(props) {
    return (
        <>
        <img />
        <div>
            <div>
                <img src={`./${props.img}`} alt="location-icon" />
                <p>{props.country}</p>
                <a href={props.map}>View on Google Maps</a>
            </div>
            <h2>{props.place}</h2>
            <h6>{props.period}</h6>
            <p>{props.description}</p>
        </div>
        </>
    )
}