// KeycloakContext.js
import React, { createContext, useContext } from 'react';
// import keycloak from './keycloak'; // Importez l'instance Keycloak ou tout autre moyen que vous utilisez pour initialiser Keycloak

// Créez un contexte pour stocker l'instance Keycloak
const KeycloakContext = createContext();

// Créez un hook personnalisé pour utiliser le contexte Keycloak
// export const useKeycloak = () => {
//   return useContext(KeycloakContext);
// };

// Exportez le contexte pour une utilisation dans d'autres composants
export default KeycloakContext;
