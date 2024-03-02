import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import keycloak from './keycloakConfig';

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={(props) =>
            keycloak.authenticated ? <Component {...props} /> : <Navigate to="/login" replace />
        }
    />
);

export default PrivateRoute;
/*
    // <Route {...rest} render={(props) => (
    //     keycloak.authenticated ? (
    //         <Component {...props} />
    //     ) : (
    //         <Navigate to="/login" />
    //     )
    // )} />
*/