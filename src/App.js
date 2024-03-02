import React, { useState } from 'react';
import Keycloak from 'keycloak-js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';;

const keycloak = new Keycloak({
  realm: "realm_demo",
  url: "http://localhost:8080/auth",
  clientId: "myclient",
});


const App = () => {

  const [keycloakk, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  React.useEffect(() => {
    if (keycloakk) {
      keycloak.init({ onLoad: 'login-required' })
        .then(authenticated => {
          setAuthenticated(authenticated);
        })
        .catch(err => {
          console.error('Authentication failed:', err);
        });
    }
    setKeycloak(keycloak);
  }, [keycloakk]);

  if (!keycloakk) {
    return <div>Loading Keycloak...</div>;
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login keycloak={keycloakk} />} />
        <Route path="/logout" element={<Logout keycloak={keycloakk} />} />
      </Routes>
    </Router>
  )
};

export default App;
