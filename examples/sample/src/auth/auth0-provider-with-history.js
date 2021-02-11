import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@hosamshahin/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const tokenIssuer = process.env.REACT_APP_TOKEN_ISSUER;
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const scope = process.env.REACT_APP_AUTH0_SCOPE;
  const backChannelUrl = 'https://api.opendsa.net/login';

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      redirectUri={window.location.origin}
      clientId={clientId}
      issuer={tokenIssuer}
      scope={scope}
      onRedirectCallback={onRedirectCallback}
      // audience={audience}
      backChannelUrl={backChannelUrl}
      // cacheLocation={"localstorage"}
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
