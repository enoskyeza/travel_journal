import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Destination from "./Destination";
import Data from './data'


export default function Main() {

    const places = Data.map(place => {
        return <Destination
        key = {place.id}
        {...place} />
    })

    console.log(places)
    return(
        <>
        <Nav />
        {places}
        <Footer />
        </>
    )
}