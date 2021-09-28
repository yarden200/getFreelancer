import React from "react";
import Carousel from 'react-elastic-carousel';
import Card from '../cmps/gig-card';
// import "../assets/styles/main.css";


export default function GigCarusel () {

    const breakPoints = [
        {width: 500, itemsToShow: 2},
        {width: 700, itemsToShow: 3},
        {width: 900, itemsToShow: 4},
        {width: 1200, itemsToShow: 5}
    ]

    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                <Card number="1"/>
                <Card number="2"/>
                <Card number="3"/>
                <Card number="4"/>
                <Card number="5"/>
                <Card number="6"/>
            </Carousel>
        </div>
    )
}