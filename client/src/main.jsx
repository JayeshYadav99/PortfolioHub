import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.css'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
// import { GlobalProvider } from './GlobalContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Auth0Provider
    domain="dev-fkzyzzay6f6jrars.us.auth0.com"
    clientId="d9LXHADHfiX1FSRNaJpkegmWAgz1jRtP"
    authorizationParams={{
      redirect_uri: window.location.origin,
      useRefreshTokens: true
    }}
    cacheLocation="localstorage"
  >
    <BrowserRouter>
    {/* <GlobalProvider> */}
    <App />
    {/* </GlobalProvider> */}
    </BrowserRouter>
    </Auth0Provider>


  </React.StrictMode>,
)