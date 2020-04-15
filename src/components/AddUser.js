import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

const addUser = 'http://localhost/calendar/users/create.php';

class AddForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    fetchDataAdd = () => {
        fetch(addUser, {
            method: 'POST',
            body: JSON.stringify({
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password
            })
        })
    }

    handleChange = e => {
        const name = e.target.name;
        const type = e.target.type;

        if (type === "text" || type === "password" || type === 'email') {
            const value = e.target.value;
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.fetchDataAdd();
        this.setState({
            name: '',
            email: '',
            password: ''
        })
        alert('Dodano nowego użytkownika do bazy!')
    }

    render() {
        return (
            <div className="form">
                <label>Dodaj użytkownika:</label>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <button>Dodaj użytkownika</button>
                </Form>
            </div>
        );
    }
}

export default AddForm;