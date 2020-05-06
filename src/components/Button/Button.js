import React from 'react';
import "./Button.scss"

const Button = ({ children, type, click }) => {

    const getClasses = () => {
        if (type === 'success') {
            return 'green'
        }
        if (type === 'error') {
            return 'red'
        }

        return "";
    }

    return (
        <button className={`button ${getClasses()}`} onClick={() => click()}>{children}</button>
    )
}



export { Button };