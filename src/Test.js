import React from 'react';

const Test = ({ keycloak, authenticated }) => {
    const login = () => {
        if (keycloak) {
            keycloak.logout();
        } else {
            console.warn('Keycloak is not yet initialized.');
        }
    };

    const logout = () => {
        keycloak.logout();
    };

    if (authenticated) {
        return (
            <div>
                <p>You are logged in!</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>You are not logged in!</p>
                <button onClick={login}>Login</button>
            </div>
        );
    }
};

export default Test;
