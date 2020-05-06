import React from 'react';
import { Button } from '../Button/Button';

const Card = ({ name, lastName, age, onDelete, onEdit }) => {
    return (
        <li>
            <span>Name: {name} </span>
            <span>Last Name: {lastName} </span>
            <span>Age: {age} </span>
            <Button type="error" click={() => onDelete()}>Delete</Button>
            <Button type="success" click={() => onEdit()}>Edit</Button>
        </li >
    )
}

export { Card }