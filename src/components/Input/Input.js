import React from 'react';
import "./Input.scss";

const Input = ({ type, name, label, value, onInputChange }) => {


    return (
        <section className="input">
            <label>{label}</label>
            <input type={type}
                name={name}
                value={value}
                onChange={e => onInputChange(e.target.value, name)} />
        </section>
    )
}

export { Input };