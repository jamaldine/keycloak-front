import React from 'react';

const Login = ({ keycloak }) => {
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => keycloak.login()}>Login</button>
        </div>
    );
};

export default Login;
