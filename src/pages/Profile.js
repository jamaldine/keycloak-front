import React, { useContext } from 'react';
import KeycloakContext from '../context/KeycloakContext';

const Profile = () => {
    // Récupérer l'instance Keycloak à partir du contexte
    const keycloak = useContext(KeycloakContext);
    console.log(keycloak);
    return (
        <div>
            <h2>User Profile</h2>
            {keycloak.authenticated && (
                <div>
                    <p>Username: {keycloak.tokenParsed.preferred_username}</p>
                    <p>Email: {keycloak.tokenParsed.email}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
