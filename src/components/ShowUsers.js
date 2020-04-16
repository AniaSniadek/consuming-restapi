import React, { Component } from 'react';
import User from './User';

const readUsers = 'http://127.0.0.1/calendar/users/read.php'; //your endpoint

class ShowUsers extends Component {
    state = {
        usersList: []
    }

    handleFetchDataRead = () => {
        fetch(readUsers)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    usersList: data.records
                })
            })
    }

    render() {
        const users = this.state.usersList.map(user => (
            <User key={user.id} name={user.name} email={user.email} password={user.password} />
        ))
        
        return (
            <div>
                <button onClick={this.handleFetchDataRead}>Show users</button>
                <ul>{users}</ul>
            </div>
        );
    }
}

export default ShowUsers;