import React from 'react';
import './card.style.css';
export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.data.id}?set=set2&size=180x180`} />
        <h1>{props.data.name}</h1>
        <p>{props.data.slug}</p>
    </div>
)