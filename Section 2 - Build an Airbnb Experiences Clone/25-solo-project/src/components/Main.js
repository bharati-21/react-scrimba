import React from 'react';
import Card from './Card';
import data from '../data';

export default function Main() {
    const cardElements = data.map(place => {
        console.log(place)
        return <Card key={place.key} place={place} />
    })
    return (
        <main className="main">
            {cardElements}
        </main>
    )
}