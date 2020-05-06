import React, { Component } from 'react';
import './Form.scss';

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

class Form extends Component {


    state = {
        name: "",
        lastName: "",
        age: 18
    }

    componentDidMount() {
        if (this.props.formData) {
            this.setState({
                ...this.props.formData
            })
        }
    }

    onInputChange = (value, name) => {
        this.setState({
            [name]: value
        })
    }

    onFormClear = () => {
        this.setState({
            name: "",
            lastName: "",
            age: 18
        })
    }

    submitForm = () => {
        const data = { ...this.state };
        const { onFormSubmit, onFormEdit } = this.props;

        if (data.id) {
            onFormEdit(data);
        } else {
            onFormSubmit(data);
        }
    }

    render() {
        const { name, lastName, age } = this.state;

        return (
            <section className="form">
                <Input type="text"
                    name="name"
                    label="Name"
                    value={name}
                    onInputChange={(value, name) => this.onInputChange(value, name)} />

                <Input type="text"
                    name="lastName"
                    label="Last name"
                    value={lastName}
                    onInputChange={(value, name) => this.onInputChange(value, name)} />

                <Input type="number"
                    name="age"
                    label="Name"
                    value={age}
                    onInputChange={(value, name) => this.onInputChange(value, name)} />

                <section className="action-container">
                    <Button type="error" click={() => this.onFormClear()}>Cancel</Button>
                    <Button type="success" click={() => this.submitForm()}>Submit</Button>
                </section>
            </section>
        )
    }
}

export { Form };