import React, { useContext } from 'react';
import KeycloakContext from '../context/KeycloakContext';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const fetchUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const Profile = () => {
    const exampleValue = useSelector(state => state.exampleX.data.exampleValue);

    const { data, isLoading, isError } = useQuery('user', () => fetchUser(1));
    console.log({ data });
    console.log({ isLoading });
    console.log({ isError });
    // Récupérer l'instance Keycloak à partir du contexte
    const keycloak = useContext(KeycloakContext);
    console.log(keycloak);
    return (
        <div>
            <p>Example Value : {exampleValue}</p>
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
