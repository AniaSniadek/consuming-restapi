import React from 'react';

const User = props => {
    const { name, email, password } = props

    return (
        <li>
            Nazwa użytkownika: <strong>{name}</strong><br />
            Email użytkownika: <strong>{email}</strong><br />
            Hasło użytkownika: <strong>{password}</strong><br />
        </li>
    );
}

export default User;