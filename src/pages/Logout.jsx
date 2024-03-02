import React from 'react';

const Logout = ({ keycloak }) => {
    console.log(keycloak);
    return (
        <div>
            <h1>Logout Page</h1>
            <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
    );
};

export default Logout;
