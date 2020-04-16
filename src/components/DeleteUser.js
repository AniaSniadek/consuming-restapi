import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

const deleteUser = 'http://localhost/calendar/users/delete.php';

class DeleteUser extends Component {
    state = {
        id: ''
    }

    fetchDataDelete = () => {
        fetch(deleteUser, {
            method: 'POST',
            body: JSON.stringify({
                "id": this.state.id
            })
        }).then(response => {
            if (response.ok) {
                this.setState({
                    id: ''
                })
                alert('User has been deleted!')
            } else
                alert("Error!")
        })
    }

    handleChange = e => {
        this.setState({
            id: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.fetchDataDelete();
    }

    render() {
        return (
            <div className='form'>
                <label>Delete user:</label>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="id">
                        <Form.Control type="number" placeholder="Enter id" name="id" value={this.state.id} onChange={this.handleChange} />
                    </Form.Group>
                    <button>Delete user</button>
                </Form>
            </div>
        );
    }
}

export default DeleteUser;
