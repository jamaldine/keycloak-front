import React, { useState } from 'react';
// import { createContext } from 'react';
import Keycloak from 'keycloak-js';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Nav from './components/modules/Nav';
import KeycloakContext from './context/KeycloakContext';
import store from './store/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

const keycloak = new Keycloak({
  realm: "realm_demo",
  url: "http://localhost:8080/auth",
  clientId: "myclient",
});


// Créez un contexte pour stocker l'instance Keycloak
// const KeycloakContext = createContext();


const queryClient = new QueryClient();

const App = () => {

  const [keyCloak, setKeyCloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  React.useEffect(() => {
    if (keyCloak) {
      keycloak.init({
        onLoad: 'login-required',
        // Activer l'authentification unique (SSO)
        enableBearerInterceptor: true,
        enableLogging: true, // Activez cette option pour le débogage
      })
        .then(authenticated => {
          setAuthenticated(authenticated);
        })
        .catch(err => {
          console.error('Authentication failed:', err);
        });
    }
    setKeyCloak(keycloak);
  }, [keyCloak]);

  if (!keyCloak) {
    return <div>Loading Keycloak...</div>;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <KeycloakContext.Provider value={keycloak}>
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </KeycloakContext.Provider>
      </Provider>
    </QueryClientProvider>
  )
};

// Exportez le contexte pour une utilisation dans d'autres composants
export default App;