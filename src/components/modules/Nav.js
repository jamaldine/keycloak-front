import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import KeycloakContext from '../../context/KeycloakContext';

const Nav = () => {
    const keycloak = useContext(KeycloakContext);

    console.log(keycloak);
    const handleLogout = () => {
        keycloak.logout(); // Déconnectez-vous en utilisant la fonction logout de l'instance Keycloak
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    {keycloak?.authenticated ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Nav;