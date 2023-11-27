import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Destination from "./Destination";


export default function Main() {
    const places = data.map(place => {
        return <Destination
        key = {place.id}
        {...place} />
    })
    return(
        <>
        <Nav />
        {places}
        <Footer />
        </>
    )
}