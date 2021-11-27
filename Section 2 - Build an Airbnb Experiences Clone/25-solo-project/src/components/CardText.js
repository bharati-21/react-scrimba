import React from 'react';

export default function CardText(props) {
    return (
        <article className="card-text">
            <small className="card-text--location">
                <span className="card-text--location-marker">
                    <i className="fas fa-map-marker-alt"></i>
                </span>
                <span className="card-text--location-name">{props.place.location}</span>
                <a className="card-text--location-maps-url" href={props.place.googleMapsUrl}>View on Google Maps</a>
            </small>
            <h1 className="card-text--title">{props.place.title}</h1>
            <small className="card-text--travel-dates">
                {props.place.startDate} - {props.place.endDate}
            </small>
            <p className="card-text--description">
                {props.place.description}
            </p>
        </article>
    )
}