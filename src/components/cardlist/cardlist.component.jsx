import React from 'react';
import { Card } from '../card/card.component';
import './cardlist.style.css'

export const Cardlist = props => {
    console.log(props)
    return <div className="card-list">
        {props.data.map(category => (
            <Card data={category} />
        ))}
    </div>
}