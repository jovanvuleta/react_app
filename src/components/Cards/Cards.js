import React, { Fragment } from 'react';
import { Card } from './Card.js'

import './Cards.scss'

import uuid from 'react-uuid';

const Cards = ({ data, openForm, onCardDelete, onCardEdit }) => {

    const renderCards = () => (
        <ul className="cards">
            <li className="card-add" onClick={openForm}>
                <span>+</span>
            </li>
            {data.map(card => <Card key={card.id}
                name={card.name}
                age={card.age}
                lastName={card.lastName}
                onDelete={() => onCardDelete(card.id)}
                onEdit={() => onCardEdit(card.id)} />)}
        </ul>
    )

    return (
        <Fragment>{renderCards()}</Fragment>
    )
}

export { Cards };