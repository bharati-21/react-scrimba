import React from 'react';
import CardText from './CardText';

export default function Card(props) {
    const {imageUrl, ...cardText} = props.place;
    console.log(props.place.imageUrl)
    return (
        <section className="card">
           <img className="card--image" src={imageUrl}/>

           <CardText place={cardText} />
        </section>
    )
}