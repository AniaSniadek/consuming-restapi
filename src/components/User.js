import React from 'react';

const User = props => {
    const { name, email, password } = props

    return (
        <li>
            Username: <strong>{name}</strong><br />
            Email: <strong>{email}</strong><br />
            Password: <strong>{password}</strong><br />
        </li>
    );
}

export default User;